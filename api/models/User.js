module.exports = {
  attributes: {
    name: { type: "string", required: true },
    bonusPoints: { type: "number", defaultsTo: 0, columnType: "INT" },

    //myrentals
    myrental: {
      collection: "video",
      via: "owner",
      through: "myrentals",
    },
  },
};
