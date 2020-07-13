module.exports = {
  attributes: {
    title: { type: "string", required: true },
    poster: { type: "string", required: true },
    stock: { type: "number", required: true },
    plot: { type: "string", required: true },
    type: { type: "string", required: true },

    //owners
    owner: {
      collection: "user",
      via: "myrental",
      through: "myrentals",
    },
  },
  tableName: "library",
};
