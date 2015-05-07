import React from "react";
import Router from "react-router";

var {RouteHandler, Link} = Router;

let App = React.createClass({
    render () {
        return (
            <div className="App">
                <Link
                    to="/"
                >
                    Home
                </Link>

                |

                <Link
                    to="news"
                >
                    News
                </Link>
                <RouteHandler />
            </div>
        )
    }
});

export default App;
