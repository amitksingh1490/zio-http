"use strict";(self.webpackChunkzio_http_docs=self.webpackChunkzio_http_docs||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,p(p({ref:t},c),{},{components:n})):a.createElement(h,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),p=["components"],l={sidebar_position:2},i="Getting Started",s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Http",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zio-http/docs/getting-started",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/zio-http/docs/index"},next:{title:"Work in progress",permalink:"/zio-http/docs/dsl/http/index"}},c=[{value:"Http",id:"http",children:[{value:"Creating a &quot;<em>Hello World</em>&quot; app",id:"creating-a-hello-world-app",children:[],level:3},{value:"Routing",id:"routing",children:[],level:3},{value:"Composition",id:"composition",children:[],level:3},{value:"ZIO Integration",id:"zio-integration",children:[],level:3},{value:"Accessing the Request",id:"accessing-the-request",children:[],level:3},{value:"Testing",id:"testing",children:[],level:3}],level:2},{value:"Socket",id:"socket",children:[{value:"Creating a socket app",id:"creating-a-socket-app",children:[],level:3}],level:2},{value:"Server",id:"server",children:[{value:"Starting an Http App",id:"starting-an-http-app",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"http"},"Http"),(0,o.kt)("h3",{id:"creating-a-hello-world-app"},'Creating a "',(0,o.kt)("em",{parentName:"h3"},"Hello World"),'" app'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app = Http.text("Hello World!")\n')),(0,o.kt)("p",null,"An application can be made using any of the available operators on ",(0,o.kt)("inlineCode",{parentName:"p"},"zhttp.Http"),". In the above program for any Http request, the response is always ",(0,o.kt)("inlineCode",{parentName:"p"},'"Hello World!"'),"."),(0,o.kt)("h3",{id:"routing"},"Routing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app = Http.collect[Request] {\n  case Method.GET -> Root / "fruits" / "a"  => Response.text("Apple")\n  case Method.GET -> Root / "fruits" / "b"  => Response.text("Banana")\n}\n')),(0,o.kt)("p",null,"Pattern matching on route is supported by the framework"),(0,o.kt)("h3",{id:"composition"},"Composition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval a = Http.collect[Request] { case Method.GET -> Root / "a"  => Response.ok }\nval b = Http.collect[Request] { case Method.GET -> Root / "b"  => Response.ok }\n\nval app = a <> b\n')),(0,o.kt)("p",null,"Apps can be composed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"<>")," operator. The way it works is, if none of the routes match in ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," , or a ",(0,o.kt)("inlineCode",{parentName:"p"},"NotFound")," error is thrown from ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", and then the control is passed on to the ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," app."),(0,o.kt)("h3",{id:"zio-integration"},"ZIO Integration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val app = Http.collectM[Request] {\n  case Method.GET -> Root / "hello" => ZIO.succeed(Response.text("Hello World"))\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Http.collectM")," allow routes to return a ZIO effect value."),(0,o.kt)("h3",{id:"accessing-the-request"},"Accessing the Request"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app = Http.collect[Request] {\n  case req @ Method.GET -> Root / "fruits" / "a"  =>\n    Response.text("URL:" + req.url.path.asString + " Headers: " + r.headers)\n  case req @ Method.POST -> Root / "fruits" / "a" =>\n    Response.text(req.getBodyAsString.getOrElse("No body!"))\n}\n')),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"zhttp provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"zhttp-test")," package for use in unit tests. You can utilize it as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\nimport zhttp.test._\nimport zhttp.http._\n\nobject Spec extends DefaultRunnableSpec {\n  val app = Http.collect[Request] {\n    case Method.GET -> Root / "text" => Response.text("Hello World!")\n  }\n  \n  def spec = suite("http") (\n    testM("should be ok") {\n      val req         = ???\n      val expectedRes = resp => resp.status.toJHttpStatus.code() == Status.OK\n      assertM(app(req))(expectedRes) // an apply method is added via `zhttp.test` package\n    }\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.http._\n\nval app = Http.collect[Request] {\n  case req @ Method.GET -> Root / "fruits" / "a"  =>\n    Response.text("URL:" + req.url.path.asString + " Headers: " + r.headers)\n  case req @ Method.POST -> Root / "fruits" / "a" =>\n    Response.text(req.getBodyAsString.getOrElse("No body!"))\n}\n')),(0,o.kt)("h2",{id:"socket"},"Socket"),(0,o.kt)("h3",{id:"creating-a-socket-app"},"Creating a socket app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zhttp.socket._\n\nprivate val socket = Socket.collect[WebSocketFrame] {\n  case WebSocketFrame.Text("FOO")  => ZStream.succeed(WebSocketFrame.text("BAR"))\n}\n\nprivate val app = Http.collect[Request] {\n  case Method.GET -> Root / "greet" / name  => Response.text(s"Greetings {$name}!")\n  case Method.GET -> Root / "ws" => Response.socket(socket)\n}\n')),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("h3",{id:"starting-an-http-app"},"Starting an Http App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zhttp.http._\nimport zhttp.service.Server\nimport zio._\n\nobject HelloWorld extends App {\n  val app = Http.ok\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    Server.start(8090, app).exitCode\n}\n")),(0,o.kt)("p",null,"A simple Http app that responds with empty content and a ",(0,o.kt)("inlineCode",{parentName:"p"},"200")," status code is deployed on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8090")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"Server.start"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/HelloWorld.scala"},"Simple Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/HelloWorldAdvanced.scala"},"Advanced Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/SocketEchoServer.scala"},"WebSocket Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/StreamingResponse.scala"},"Streaming Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/SimpleClient.scala"},"Simple Client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/FileStreaming.scala"},"File Streaming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/dream11/zio-http/blob/main/example/src/main/scala/Authentication.scala"},"Authentication"))))}d.isMDXComponent=!0}}]);