// Data Fetching

//  API => Application Programming Interface .

const fetchUser = (username, callback) => {
  console.log("fetching...");
  setTimeout(() => {
    console.log("Now we have the user");
    callback({ username });
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  setTimeout(() => {
    console.log(`[Now we have Photos for ${username}]`);
    callback(["Photo1", "Photo2"]);
  }, 2000);
};

const fetchPhotoDetails = (photo, callback) => {
  setTimeout(() => {
    console.log(`[Now we have Photo detailes]`);
    callback(`details...`);
  }, 2000);
};

// {username: 'Michael'}


fetchUser("Michael", (a) => {
    console.log(`Your name is , ${a.username}`);
    
    fetchUserPhotos(a.username, (userPhotos) => {
        console.log(`Your photos are ${userPhotos}`);
        
        fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(`Your photo details are: ${details}`);
        });
    });
});

// the infamous callback Hell

// const user = fetchUser('test', (username) => {
	// fetchUserPhotos(username, (userPhotos) => {
		// fetchPhotoDetails(userPhotos[0], (details) => {
			// fetchPhotoDetails(userPhotos[0], (details) => {
				// fetchPhotoDetails(userPhotos[0], (details) => {
					// fetchPhotoDetails(userPhotos[0], (details) => {
						// console.log(details);
					// });
				// });
			// });
		// });
	// });
// });