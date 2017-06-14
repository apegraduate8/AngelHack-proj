const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const aws = require('aws-sdk');
const corsPrefetch = require('cors-prefetch-middleware').default;
const fileUpload = require('express-fileupload');
const config = require('./Config.js');
const Anthony = require('./Anthony.js');

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
  console.log("server called to get specific profile with params >>  ", req.body, req.params)
    // let r = req.params.id.split(" ")

    // let j = r.length-1;
    // let p = r[j];
    // let d = p.split("");
    // d.pop();
    // console.log(parseInt(d[d.length-1]))
    // if( !Number.isNaN(Number(d[d.length-1])) ){
    //     d.pop()
    //      console.log("d again", d)
    // }
    // let y = d.join("");
    // let final = r[0] + " " + y;
    let final = Anthony.getName(req.params);

    console.log("final ", final)

    let profileParams = {
                TableName: "donators",
                Key:{
                    "name": final
                }
            };

   docClient.get(profileParams, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("GetItem succeeded:", data,  JSON.stringify(data, null, 2));
                res.json(data)
            }
        });


})

app.post('/api', (req, res) => {
if(!app.locals.images){
  app.locals.images = []
  app.locals.audio = null
}
if(req.files){
    console.log("erier>>>>>> ", req.files)
        switch(req.files.imageFiles.mimetype) {
          case 'audio/mp3':
            console.log("yessss", req.files.imageFiles.mimetype)
              // res.json("true")
                  yours()

                  return true

          case 'image/jpeg':
            console.log("is a image!!!")

              return true
          case 'image/png':
            console.log("is a image!!!")
                  yours()
              return true
          case 'image/jpg':
            console.log("is a image!!!")
                  yours()
              return true

    default: return true
  }


 function yours(){
  console.log("locals. > ", app.locals.userID)
      if(app.locals.userID){
            let options = {
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
                        app.locals.images.push(data.Location)
                        putData()
                        res.json(data.Location)
                    })
                 return
      }else {
         let options = {
                  Bucket: config.S3_BUCKET,
                  Key: app.locals.RemName,
                  Body: req.files.imageFiles.data,
                  ContentType: req.files.imageFiles.mimetype,
                  ACL: 'public-read'
                }
                 console.log(req.files, "options>", options)
                 s3.upload(options, function(err, data){
                        if(err){return console.log("error in upload ", err)}
                          console.log("the Location!!!!!!  >>>>>> ", data.Location)
                        // app.locals.images.push(data.Location)
                        app.locals.audio = data.Location
                        putData("audio")
                        res.json(data.Location)
                    })
      }


}

             return true
}


    if(req.body.userName){
       app.locals.RemName = req.body.userName
        console.log("yayayayay >> renname >>. ", app.locals.RemName)
        res.json("true")
       return
    }


    let putRams = Object.assign({}, req.body)
    console.log("putrams.  >>> ", putRams)

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
                app.locals.userID = putRams.name+putRams.birth[0]
                app.locals.userData = putRams
                res.json(putRams)
            }
  })

function putData(a) {
  let pararams;

  if(a === "audio"){
      pararams = {
            TableName: "donators",
            Key:{
                "name": app.locals.RemName
            },
            UpdateExpression: "set audioFiles = :r",
            ExpressionAttributeValues:{
                ":r": app.locals.audio
            },
            ReturnValues:"UPDATED_NEW"
        };

      console.log("Updating the item...");
      docClient.update(pararams, function(err, data) {
            if(err){
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            }else{
                console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            }
        });

        return true
  }

   pararams = {
            TableName: "donators",
            Key:{
                "name": app.locals.userData.name
            },
            UpdateExpression: "set images = :r",
            ExpressionAttributeValues:{
                ":r": app.locals.images
            },
            ReturnValues:"UPDATED_NEW"
        };

      console.log("Updating the item...");
      docClient.update(pararams, function(err, data) {
            if(err){
                console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            }else{
                console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            }
        });



  }


})


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server running on pt 4000")
})



/// https://react-dropzone.netlify.com/
