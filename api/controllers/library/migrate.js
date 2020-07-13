const fs = require("fs");
const axios = require("axios");

module.exports = {
  friendlyName: "migrate library",

  description: "migrates library to a DB",

  inputs: {},

  exits: {
    success: {},
    notFound: {
      description: "No user with the specified ID was found in the database.",
      responseType: "notFound",
    },
  },

  fn: async function ({}) {
    let rawdata = fs.readFileSync("assets/Film.JSON");
    let student = JSON.parse(rawdata);

    student.data.forEach(async (element) => {
      try {
        var res = await axios({
          url: "http://www.omdbapi.com/?apikey=63416aa8&t=" + element.Title,
          method: "GET",
        });
        await Video.create({
          title: element.Title,
          poster: res.data.Poster,
          plot: res.data.Plot,
          stock: Math.floor(Math.random() * 201),
          type: gettype(Math.floor(Math.random() * 3)),
        });
      } catch (err) {
        console.log(err);
      }
    });
    //
    return;
  },
};

function gettype(i) {
  if (i === 0) {
    return "New";
  } else if (i === 1) {
    return "Old";
  } else {
    return "Regular";
  }
}
