var sql = require('mssql');
var express = require('express');
var app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.end("Hello To Courses API.")
});

app.get('/courses', function (req, res) {
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        // Query 

        new sql.Request().query('select * from courses')
            .then(function (recordset) {

                res.end(JSON.stringify(recordset));
            }).catch(function (err) {
                console.error(err.message);
            });

    }).catch(function (err) {
        console.error(err.message);
    });
});

app.get('/course/:courseId', function (req, res) {
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        // Query 

        new sql.Request().query('select * from courses where courseId = ' + req.params.courseId)
            .then(function (recordset) {

                res.end(JSON.stringify(recordset));
            }).catch(function (err) {
                console.error(err.message);
            });

    }).catch(function (err) {
        console.error(err.message);
    });
});

app.get('/topics', function (req, res) {
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        // Query 

        new sql.Request().query('select * from topics')
            .then(function (recordset) {

                res.end(JSON.stringify(recordset));
            }).catch(function (err) {
                console.error(err.message);
            });

    }).catch(function (err) {
        console.error(err.message);
    });
});

app.get('/topic/:topicId', function (req, res) {
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        // Query 

        new sql.Request().query('select * from topics where topicId = ' + req.params.topicId)
            .then(function (recordset) {

                res.end(JSON.stringify(recordset));
            }).catch(function (err) {
                console.error(err.message);
            });

    }).catch(function (err) {
        console.error(err.message);
    });
});

//app.delete('/topic/:topicId', function (req, res) {
//    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
//        // Query 
//
//        new sql.Request().query('select * from topics where topicId = ' + req.params.topicId);
//
//    }).catch(function (err) {
//        console.error(err.message);
//    });
//});
app.post('/topic',function(req, res){
//    res.send("create connection sucessfully");
    var name = req.query.name;
    var duration  =req.query.duration;
   
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        
    });
    
});
app.get('/course/:courseId/topics', function (req, res) {
    sql.connect("mssql://belluser:venkat@localhost/courses").then(function () {
        // Query 

        new sql.Request().query('select b.* from course_topics a \
                            inner join topics b on a.topicId = b.topicId \
                            where a.courseId = ' + req.params.courseId)
            .then(function (recordset) {
                  
                res.end(JSON.stringify(recordset));
            }).catch(function (err) {
                console.error(`in query ${err.message} `);
            });

    }).catch(function (err) {
        console.error(`error occurd on course/courseid/topics ${err.message}`);
    });
});


app.listen(8000, function () {
    console.log("Server running on port 8000.");
});
