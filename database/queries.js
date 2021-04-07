//  queries to database

//  get friends
// select f1.*
// -- from friendships f1
// -- inner join friendships f2 on f1.userID = f2.friendID and f1.friendID = f2.userID;

//get movies you and friend have in common
module.exports.getCommonMovies = `
  SELECT *
  FROM movies m
  JOIN (
    SELECT A.user_id AS user1, B.user_id AS user2, A.movie_id
    FROM users_movies A, users_movies B
    WHERE A.user_id = $1 AND B.user_id = $2 AND A.movie_id = B.movie_id
  ) common_movies
  ON m.movieId = common_movies.movie_id;
`;

//get my movie list
module.exports.getMyMovies = `
  SELECT *
  FROM movies m, user-movies u
  WHERE m.id = u.movieID AND u.userID = $1;
`;

module.exports.getMyFriends = (userID) => {
  return `
    SELECT *
    FROM users u
    INNER JOIN friendships f
      ON u.id = f.friendID
    WHERE f.userID = ${userID}
  ;`
};

module.exports.addNewFriend = (userID, friendID) => {
  return `
    INSERT INTO friendships (userID, friendID)
    VALUES (${userID}, ${friendID})
    ON CONFLICT (userID, friendID)
    DO NOTHING
  ;`
};

module.exports.getUserIDByUserName = (username) => {
  return `
    SELECT id
    FROM users
    WHERE username = '${username}'
  ;`
}