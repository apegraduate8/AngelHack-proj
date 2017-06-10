const express = require('express');
const app = express();
const aws = require('aws-sdk');
const corsPrefetch = require('cors-prefetch-middleware').default;
const fileUpload = require('express-fileupload');


app.use(fileUpload());
app.use(corsPrefetch);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


aws.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY, region: config.region});


let docClient = new aws.DynamoDB.DocumentClient();
let s3 = new aws.S3();
