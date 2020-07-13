module.exports = {
  attributes: {
    owner: {
      model: "user",
    },
    myrental: {
      model: "video",
    },
    issueed: { type: "string", required: true },
    expiry: { type: "string", required: true },
    title: { type: "string", required: true },
    price: { type: "number", columnType: "FLOAT", required: true },
    paid: { type: "string", required: true },
  },
};
