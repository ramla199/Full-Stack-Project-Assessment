const express = require("express");
const app = express();
const cors = require("cors");
const uuid = require('uuid');
const examplev = require('./exampleresponse.json');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = examplev;

// GET "/"
app.get("/", (req, res) => {
  // Delete this line after you've confirmed your server is running
  // res.send({ express: "Your Backend Service is Running" });
  res.json(videos);
});

app.get("/:id", function (request, response) {
  const videoId = Number(request.params.id);
  if (videos.some(video => video.id === videoId)) {
    const targetVideo = videos.find(video => video.id === videoId);
    response.status(200).json({ targetVideo });
  } else {
    response.status(404).send("There is no video ID  with  " + request.params.id);
  }
});

// POST "/"
app.post("/", (request, response) => {
  // const video = request.body;

  // console.log(video);
  // video.id = video.length;
  const newVideo = {
    id: uuid.v4(),
    ...request.body,
    rating: 0
  }
  if (!request.body.title || !request.body.url) {
    response.status(400);
    response.send({
      "result": "failure",
      "message": "Video could not be saved"
    });
  } else {
    response.status(200);
    videos.push(newVideo);
    console.log(videos);
    // response.redirect('/');
  }
});



app.delete("/:id", (request, response) => {
  console.log(request.params.id);
  const id = Number(request.params.id);
  videos.map((video) => {
    video.id === id ? videos.splice(id, 1) : null;
  });
  console.log(videos);
  response.status(200);
  response.send({
    "result": "failure",
    "message": "Video could not be deleted"
  });
  console.log(`You have deleted a message with id ${id}`)
});