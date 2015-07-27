var React = require("react");

App = React.createFactory(require("./components/app.react"));

if (typeof window !== "undefined") {
    window.onload = function() {
        React.render(App(), document.getElementById("app"));
    };
}
