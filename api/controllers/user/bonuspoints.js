module.exports = {
  friendlyName: "update bonus points",

  description: "updates bonus points",

  inputs: {
    userId: {
      description: "The ID of the user to look up.",
      type: "number",
      required: true,
    },
    movieType: {
      discription: "the type of a movie",
      type: "string",
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

  fn: async function ({ userId, movieType }) {
    try {
      var user = await User.findOne({ id: userId });
      if (movieType === "New") {
        await User.updateOne({ id: userId }).set({
          bonusPoints: user.bonusPoints + 2,
        });
      } else {
        await User.updateOne({ id: userId }).set({
          bonusPoints: user.bonusPoints + 1,
        });
      }
    } catch (err) {
      throw "notFound";
    }
    return user;
  },
};
