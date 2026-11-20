const username = "godofredo_88";
let followers = 100;
let posts = 12;
const isPrivate = "no";

// Simulate the day
followers = followers + 3;   // gains 3 followers
followers = followers - 1; // loses 1 follower
posts = posts + 1;       // publishes a new photo

// Show the result in the console
console.log(`${username} tiene ${followers} seguidores y ha publicado ${posts} posts.`)
