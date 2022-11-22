//***Promises */

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promises");
  } else {
    reject("No! rejected the promise...");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

//******SetTimeout */

const myPromise2 = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes! resolved the promise...");
  } else {
    reject("No! rejected the promise...");
  }
});

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("my nextPromise resolved!");
  }, 4000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise2.then((value) => {
  console.log(value);
});

//****Call API... */

const users = fetch("https://jsonplaceholder.typicode.com/users");

console.log(users);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log(user);
    });
  });

//****async, await */

const myUsers = {
  userList: [],
};

const myFunction = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonData = await res.json();
  return jsonData;
};

const anotheFun = async () => {
  const data = await myFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotheFun();
console.log(myUsers.userList);

//***workflow function */

const fetchFun = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const userInfo = await res.json();

  const userEmail = userInfo.map((user) => {
    return user.email;
  });

  postEmailFun(userEmail);
};

const postEmailFun = (data) => {
  console.log(data);
};
fetchFun();

//***second parameter of is a object*/

const fetchJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await res.json();

  console.log("jsonJokeData:", jsonJokeData.joke);
};

fetchJoke();

//***second parameter of is a object [POST]*/

const jokeObject = {
  id: "A5ozsH6pWnb",
  joke: "What do you call a troublesome Canadian high schooler? A poutine.",
};

const postJoke = async (jokeObj) => {
  const res = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await res.json();

  console.log("jsonResponse:", jsonResponse.headers);
};

postJoke();

//*********abstract into function****/

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const res = await fetch(url);
  const jokeRes = await res.json();
  console.log("jokeRes:...", jokeRes);
  const joke = jokeRes.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

//****Procedural "worklflow" function***/

const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
};

processJokeRequest();
