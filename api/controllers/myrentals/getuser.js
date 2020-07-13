module.exports = {
  friendlyName: "getuser",

  description: "get myrentals of a user",

  inputs: {
    userId: {
      description: "The ID of the user to look up.",
      type: "number",
      required: true,
    },
  },

  exits: {
    success: {},
    notFound: {
      description: "No user with the specified ID was found in the database.",
      responseType: "notFound",
    },
  },

  fn: async function ({ userId }) {
    try {
      var myrentals = await MyRentals.find({ owner: userId });
    } catch (err) {
      throw "notFound";
    }
    return myrentals;
  },
};
