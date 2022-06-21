const express = require("express");
const app = express();
const cors = require("cors");
const videoModels = require('./models/videos');
const uuid = require('uuid');
const examplev = require('./exampleresponse.json');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
// connect to mongodb
const dbURI = 'mongodb+srv://ramla55:ramla123@videodb.pqtx5nq.mongodb.net/videos-db?retryWrites=true&w=majority'
//connect to mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// let videos1 = examplev;

// GET "/"
app.get("/", (req, res) => {
  videoModels.find().sort({ "title": 1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err))
});
// GET "/:id" i'll refactor or change this end point
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
  const newVideo = {
    ...request.body,
    rating: 0
  }
  if (!request.body.title || !request.body.embedId) {
    response.status(404).json({
      "result": "failure",
      "message": "Video could not be saved"
    });
  } else {
    const videoList = new videoModels(newVideo);

    videoList.save()
      .then((result) => {
        console.log(result);
        response.status(200).send(result);
      })
      .catch((err) => console.log(err));
  }
});
// put i need some help with this end point
app.put("/:id", (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  const id = request.params.id;
  const updatedData = request.body;
  videoModels.findByIdAndUpdate(
    id,
    { $set: { updatedData } },
    { new: true }, (err, data) => {
      if (err) console.log(err)
      else response.status(200).send(data)
    }
  )



})


// DELETE "/:id"
app.delete("/:id", (request, response) => {
  console.log(request.params.id);
  const id = request.params.id;
  videoModels.findByIdAndDelete(id)
    .then((result) => response.status(200).send(result))
    .catch((err) => console.log(err))

});