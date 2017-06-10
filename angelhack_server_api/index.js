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

app.post('/api', (req, res) => {



   var options = {
              Bucket: config.S3_BUCKET,
              Key: "anthony"
              Body: req.files.imageFiles.data,
              ContentType: req.files.imageFiles.mimetype,
              ACL: 'public-read'
            }
             console.log(req.files, options)

})




app.listen(4000, () => {
  console.log("server running on pt 4000")
})
