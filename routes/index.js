var express = require('express');
var router = express.Router();
var React = require("react");

var App = React.createFactory(require("../target/js/components/app.react"));

router.get('/', function(req, res) {
    var reactHtml = React.renderToString(App());
    res.render('index', {output: reactHtml});
});

module.exports = router;
