
//Express Params
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
app.set('port', process.env.PORT || 7878);

var cmd=require('node-cmd');

app.get('/ec2Create', function (req, res) {
console.log("Received the message inside gitPush->"+ JSON.stringify(req.body));

    cmd.get('bash ec2Create.sh',
        function(err, data, stderr){
            if (!err) {
               console.log('Success in Running the Code->',data);
               res.json("success");
            } else {
               console.log('error', err);
               res.json("error");
            }

        }
    );


});


app.get('/s3Create', function (req, res) {
    console.log("Received the message inside S3 create->"+ JSON.stringify(req.body));
    
        cmd.get('bash s3Create.sh',
            function(err, data, stderr){
                if (!err) {
                   console.log('Success in Running the Code->',data);
                   res.json("success");
                } else {
                   console.log('error', err);
                   res.json("error");
                }
    
            }
        );
    
    
    });





app.listen(app.get('port'));