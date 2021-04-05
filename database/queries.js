//  queries to database

//  get friends
// select f1.*
// -- from friendships f1
// -- inner join friendships f2 on f1.userID = f2.friendID and f1.friendID = f2.userID;

//get movies you and friend have in common
//SELECT * FROM "users-movies" u JOIN movies m ON u.movie_id = m.id WHERE user_id = 1 OR user_id = 2