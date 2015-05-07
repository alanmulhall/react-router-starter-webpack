import React from "react";
import Router from "react-router";
import App from "./App";
import Home from "./Home";
import News from "./News";
import NotFound from "./NotFound";

let {Route, DefaultRoute, NotFoundRoute} = Router;

//let routes = Router.createRoute({path: "/", handler: App}, function () {
//    Router.createNotFoundRoute({handler: NotFound});
//    Router.createDefaultRoute({handler: Home});
//    Router.createRoute({name: "news", path: "/news", handler: News});
//});

let routes = (
    <Route handler={App} path="/">
        <NotFoundRoute handler={NotFound} />
        <DefaultRoute handler={Home} />
        <Route name="news" path="/news" handler={News} />
    </Route>
);

Router.run([routes], function (Handler) {
    React.render(<Handler/>, document.getElementById("example"));
});
