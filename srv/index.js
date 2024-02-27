import express from 'express';
const fileUpload = require('express-fileupload');
const path = require('path');

export default (app, http) => {

  app.use(express.static('public')); //to access the files in public folder
  app.use(express.json());
  app.use(fileUpload());

  app.get('/test', (req, res) => {
    res.json([1,2,3]);
  });

  // file upload api
  app.post('/upload', (req, res) => {

    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(path.join(__dirname, `../public/${myFile.name}`), function (err) {
      if (err) {
        console.log(err)
        return res.status(500).send({ msg: "Error occured" });
      }
      // returing the response with file path and name
      return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

}
