import zhttp.http._
import zhttp.service._
import zio._

object CookieServerSide extends App {

  val app: HttpApp[Any, Nothing] = HttpApp.collect { case Method.GET -> Root / "cookie" =>
    Response.setCookie(
      Cookie("abc", "value", Some(Meta(Some("Thu, 31 Oct 2021 07:28:00 GMT"), None, Some(Path("/cookie")), true, true))),
    )
  }

  // Run it like any simple app
  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =
    Server.start(8090, app.silent).exitCode
}
