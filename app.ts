///<reference path='DefinitelyTyped/node/node.d.ts'/>
///<reference path='DefinitelyTyped/express/express.d.ts' />
///<reference path="DefinitelyTyped/underscore/underscore.d.ts" />

import routes = module('./routes/index')
import express = module('express')
var app = <express.ServerApplication> express()

var port = process.env.VCAP_APP_PORT || 1337;

app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    //express3
    app.set('view options', {
        layout: false
    });
    app.use(express.bodyParser({}));
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function () {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function () {
    app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.post('/testPost/:userid/newboard', function (req, res) {
    console.log('testing post ' + req.params.userid + ', ' + req.param('postdata'));
});



app.listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');