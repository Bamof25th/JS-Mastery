// Promices in Javascript
// const fetchUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     resolve({ username: 'Michel' });
//     // reject("User Not Found");
//   }, 2000);
// });

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the user");
      resolve({ username });
      //   reject("User Not Found");
    }, 2000);
  });
};

// fetchUser
//   .then((user) => console.log(user.username))
//   .catch((err) => console.log(err));

const fetchUserPhotos = (username, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now we have Photos for ${username}]`);
      resolve(["Photo1", "Photo2"]);
    }, 2000);
  });
};

const fetchPhotoDetails = (photo, callback) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[Now we have Photo detailes]`);
      resolve(`details...`);
    }, 2000);
  });
};


// fetchUser('Michel')

//     .then((user)=> fetchUserPhotos(user.username))
//     .then((photos) => fetchPhotoDetails(photos[0]))
//     .then((details) => console.log(`Your photo details are: ${details}`))

// const fetchUser = (username, callback) => {
//     console.log("fetching...");
//     setTimeout(() => {
//       console.log("Now we have the user");
//       callback({ username });
//     }, 2000);
//   };

const displayData = async () => {
  const user = await fetchUser('michel');
  console.log(user)
  const photos = await fetchUserPhotos(user.username);
  const details = await fetchPhotoDetails(photos[0]);

  console.log(details);
}
displayData()