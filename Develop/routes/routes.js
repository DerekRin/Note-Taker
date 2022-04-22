const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    res.json(JSON.parse(data));
  });
});

router.post("/api/notes", (req, res) => {
  // set id based on what the next index of the array will be
  console.log(req.body);
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    const posting = JSON.parse(data);
    posting.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(posting), function (err, res) {
      if (err) {
        console.log("Failure", err);
      } else {
        console.log("Success");
      }
    });
  });

  //   if (!validateAnimal(req.body)) {
  //     res.status(400).send("The animal is not properly formatted.");
  //   } else {
  //     const animal = createNewAnimal(req.body, animals);
  //     res.json(animal);
  //   }
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
