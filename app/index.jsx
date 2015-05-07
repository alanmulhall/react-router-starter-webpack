import React from "react";
import Router from "react-router";
import App from "./App";
import Home from "./Home";
import News from "./News";

var {Route, DefaultRoute} = Router;


let routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Home} />
        <Route name="news" path="/news" handler={News} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById("example"));
});
