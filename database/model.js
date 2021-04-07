const pool = require('./index');
const queries = require('./queries.js');

// //  methods for getting data from database (using queries from queries.js)

// const pool = require('./index.js');
// const queries = require('./queries.js');

// const getMovies = async () => {

//   try {
//     const movies = pool.query(queries.getMovies);
//     return movies;
//   }
//   catch (error) {
//     console.log(error);
//   }

// };

module.exports.getMyMovies = async (userId) => {
  try {
    let movies = pool.query(queries.getMyMovies, userId);
    return movies;
  }
  catch (error) {
    return error;
  }
};

module.exports.getMyFriends = async (userId) => {
  try {
    let friends = await pool.query(queries.getMyFriends(userId));
    return friends;
  } catch (error) {
    return error;
  }
};

module.exports.addNewFriend = async (userId, username) => {
  try {
    let friendId = await pool.query(queries.getUserIDByUserName(username));
    friendId = friendId.rows[0].id;
    // console.log({friendId})
    // return friendId;
    let data = await pool.query(queries.addNewFriend(userId, friendId));
    return data;
  } catch (error) {
    return error;
  }
};


