const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const aws = require('aws-sdk');
const corsPrefetch = require('cors-prefetch-middleware').default;
const fileUpload = require('express-fileupload');
const config = require('../life_app/src/Config.js');

app.use(fileUpload());
app.use(corsPrefetch);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


aws.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY, region: config.region});


let docClient = new aws.DynamoDB.DocumentClient();
let s3 = new aws.S3();


app.get('/api', (req, res) => {

  console.log("server called ", req.body)
})
app.get('/api/:id', (req, res) => {

  console.log("server called with params", req.body, req.params)
})

app.post('/api', (req, res) => {

if(req.files){

   var options = {
              Bucket: config.S3_BUCKET,
              Key: app.locals.userID+"/"+req.files.imageFiles.name,
              Body: req.files.imageFiles.data,
              ContentType: req.files.imageFiles.mimetype,
              ACL: 'public-read'
            }
             console.log(req.files, "options>", options)


             s3.upload(options, function(err, data){
                    if(err){return console.log("error in upload ", err)}
                      console.log("the Location!!!!!!  >>>>>> ", data.Location)
                    res.json(data.Location)
                })
             return true
}

    let putRams = Object.assign({}, req.body)
    console.log(putRams)

    let option = {
       TableName: "donators",
       Item: putRams
    }
    console.log(option)

   docClient.put(option, function(err, data){
            if(err){
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            }else{
                console.log("Added item:", JSON.stringify(data, null, 2));
                app.locals.userID = putRams.name+putRams.birth
                res.json(putRams)
            }
  })

})




app.listen(4000, () => {
  console.log("server running on pt 4000")
})
