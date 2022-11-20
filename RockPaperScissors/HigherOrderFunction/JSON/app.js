//**Higher Order Function */

import { posts } from "./posts.js";

//********ForEach */

posts.forEach((post) => {
  console.log(post);
});

//********FlILTER */

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});

console.log(filteredPosts);

//********MAP */

const mappedPosts = posts.map((post) => {
  return post.id * 5;
});

console.log(mappedPosts);

//********REDUCER */

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});

console.log(reducedPostsValue);
