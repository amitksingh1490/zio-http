import io.circe
import io.circe.generic.auto._
import io.circe.parser._
import io.circe.syntax._
import zhttp.http.HttpError.BadRequest
import zhttp.http._
import zhttp.service.Server
import zio._

/**
 * Example to build app using JSON web service
 */
object JsonWebService extends App {

  sealed trait UserRequest
  object UserRequest  {
    case class Create(user: User) extends UserRequest
    case object Show              extends UserRequest
  }
  sealed trait UserResponse
  object UserResponse {
    case class Show(users: List[User]) extends UserResponse
    case class Create(user: User)      extends UserResponse
  }
  final case class User(id: Long, name: String)

  def getUser(jsonString: String): Either[circe.Error, User] = decode[User](jsonString)

  def userApp(ref: Ref[List[User]]) =
    Http.collectM[Any]({
      case UserRequest.Show         =>
        for {
          users <- ref.get
        } yield UserResponse.Show(users)
      case UserRequest.Create(user) =>
        for {
          _ <- ref.update(_ :+ user)
        } yield UserResponse.Create(user)
      case _                        => ZIO.succeed(Http.fail(Status.BAD_REQUEST))
    })

  // Create HTTP route
  def app(ref: Ref[List[User]]): Http[Any, Nothing, Request, UResponse] = userApp(ref)
    .contramap[Request] {
      case Method.GET -> Root / "show"          => UserRequest.Show
      case req @ Method.POST -> Root / "create" => {
        getUser(req.getBodyAsString.get) match {
          case Left(_)     => Http.fail(BadRequest)
          case Right(user) => UserRequest.Create(user)
        }
      }
      case _                                    => Http.fail(BadRequest)
    }
    .map {
      case UserResponse.Show(users)  => Response.text(users.asJson.noSpaces)
      case UserResponse.Create(user) => Response.text(user.asJson.noSpaces)
      case _                         => Response.status(Status.BAD_REQUEST)
    }

  // Run it like any simple app
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = {
    for {
      r <- Ref.make(List[User]())
      s <- Server.start(8090, HttpApp(app(r))).exitCode
    } yield s
  }

}
