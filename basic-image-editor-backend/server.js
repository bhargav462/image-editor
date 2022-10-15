const express = require('express');
const bodyParser = require('body-parser');
const sharp = require('sharp');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req,res) => {
    console.log("Hello world");
    await compositeImages();
    res.send("sds");
});

async function compositeImages() {
  try {
    await sharp("ok.jpg")
        .rotate(125)
        .composite([
            {
                input: "check.jpg",
                top: 2500,
                left: 2500,
            }
        ])
        .toFile("ok1.jpg");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port,(res) => {
    console.log("Server is up on port",port);
})