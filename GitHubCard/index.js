
axios.get("https://api.github.com/users/thiernodiallo222")
  .then((response) => {

    console.log(response);
    root.appendChild(myInfo(response.data));
  })
  .catch(error => {
    console.log("Cannot find data requested !", error);
  });

const myInfo = function (myObject) {
  
  let ObjectContainer = document.createElement('div');

  ObjectContainer.classList.add('object-container');
  
  let
    Image = document.createElement('img'),
    InfoCard = document.createElement('div'),
    entry1 = document.createElement('p'),
    entry2 = document.createElement('p'),
    entry3 = document.createElement('p'),
    entry4 = document.createElement('p'),
    entry5 = document.createElement('p'),
    entry6 = document.createElement('p'),
    entry7 = document.createElement('p'),
    entry8 = document.createElement('p'),
    entry9 = document.createElement('p'),
    entry10 = document.createElement('p'),
    entry11 = document.createElement('p'),
    entry12 = document.createElement('p'),
    entry13 = document.createElement('p'),
    entry14 = document.createElement('p'),
    entry15 = document.createElement('p'),
    entry16 = document.createElement('p'),
    entry17 = document.createElement('p'),
    entry18 = document.createElement('p'),
    entry19 = document.createElement('p'),
    entry20 = document.createElement('p'),
    entry21 = document.createElement('p'),
    entry22 = document.createElement('p'),
    entry23 = document.createElement('p'),
    entry24 = document.createElement('p'),
    entry25 = document.createElement('p'),
    entry26 = document.createElement('p'),
    entry27 = document.createElement('p'),
    entry28 = document.createElement('p'),
    entry29 = document.createElement('p');
    
  Image.src = myObject.avatar_url;
  entry1.textContent = `login: ${myObject.login}`
  entry2.textContent = `id: ${myObject.id}`
  entry3.textContent = `node_id: ${myObject.node_id}`
  entry4.textContent = `avatar_id: ${myObject.avatar_if}`
  entry5.textContent = `url: ${myObject.url}`
  entry6.textContent = `html_url: ${myObject.html_url}`
  entry7.textContent = `followers_url: ${myObject.followers_url}`
  entry8.textContent = `gists_url: ${myObject.gists_url}`
  entry9.textContent =`starred_url: ${myObject.starred_url}`
  entry10.textContent =`subscriptions_url: ${myObject.subscriptions_url}`
  entry11.textContent =`organizations_url: ${myObject.organizations_url}`
  entry12.textContent = `repos_url: ${myObject.repos_url}`
  entry13.textContent = `events_url: ${myObject.events_url}`
  entry14.textContent = `reved_events_url: ${myObject.received_events_url}`
  entry15.textContent = `type: ${myObject.type}`
  entry16.textContent = `site_admin: ${myObject.site_admin}`
  entry17.textContent = `name: ${myObject.name}`
  entry18.textContent = `company: ${myObject.company}`
  entry19.textContent = `blog: ${myObject.blog}`
  entry20.textContent = `location: ${myObject.location}`
  entry21.textContent = `email: ${myObject.email}`
  entry22.textContent = `hierable: ${myObject.hierable}`
  entry23.textContent = `bio: ${myObject.bio}`
  entry24.textContent = `public_repos: ${myObject.public_repos}`
  entry25.textContent = `public_gists: ${myObject.public_gists}`
  entry26.textContent = `followers: ${myObject.followers}`
  entry27.textContent = `following: ${myObject.following}`
  entry28.textContent = `created_at: ${myObject.created_at}`
  entry29.textContent = `updated_at: ${myObject.updated_at}`
  // entry31.textContent = `photo: ${myObject._photo_}`;
  
  // appending to one stuff
  ObjectContainer.appendChild(Image);
  ObjectContainer.appendChild(InfoCard);
  InfoCard.appendChild(entry1);
  InfoCard.appendChild(entry2);
  InfoCard.appendChild(entry3);
  InfoCard.appendChild(entry4);
  InfoCard.appendChild(entry5);
  InfoCard.appendChild(entry6);
  InfoCard.appendChild(entry7);
  InfoCard.appendChild(entry8);
  InfoCard.appendChild(entry9);
  InfoCard.appendChild(entry10);
  InfoCard.appendChild(entry11);
  InfoCard.appendChild(entry12);
  InfoCard.appendChild(entry13);
  InfoCard.appendChild(entry14);
  InfoCard.appendChild(entry15);
  InfoCard.appendChild(entry16);
  InfoCard.appendChild(entry17);
  InfoCard.appendChild(entry18);
  InfoCard.appendChild(entry19);
  InfoCard.appendChild(entry20);
  InfoCard.appendChild(entry21);
  InfoCard.appendChild(entry22);
  InfoCard.appendChild(entry23);
  InfoCard.appendChild(entry24);
  InfoCard.appendChild(entry25);
  InfoCard.appendChild(entry26);
  InfoCard.appendChild(entry27);
  InfoCard.appendChild(entry28);
  InfoCard.appendChild(entry29);
  

  return ObjectContainer;
};
 
let root = document.querySelector('.cards');


/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  /* Step 2: Inspect and study the data coming back, this is YOUR 
     github info! You will need to understand the structure of this 
     data in order to use it to build your component function 
  
     Skip to Step 3.
  */
  
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];
axios.get("https://api.github.com/users/thiernodiallo222/followers")

  .then(res => {
    console.log(res);
    res.data.forEach(element => {
      root.appendChild(myInfo(element));
    });
    
  })
  .catch(error => {
    console.log("Cannot find data", error);
  });

const CreateComponent = function(Obj){

  // creating elements
  const Card = document.createElement('div'),
    Image = document.createElement('img'),
    CardInfo = document.createElement('div'),
    Name = document.createElement('h3'),
    Username = document.createElement('p'),
    Location = document.createElement('p'),
    Profil = document.createElement('p'),
    Followers = document.createElement('p'),
    Following = document.createElement('p'),
    Bio = document.createElement('p');

    // appending content
  Image.src = Obj.avatar_url;
  Name.textContent = `Name: ${Obj.name}`;
  Username.textContent = `User name: ${Obj.login}`;
  Location.textContent = `Location: ${Obj.location}`;
  Profil.textContent = `Profil: ${Obj.html_url}`;
  Followers.textContent = `Followers: ${Obj.followers_url}`;
  Following.textContent = `Following: ${Obj.following}`;
  Bio.textContent = `Bio: ${Obj.bio}`;

  // Appending stuff 

  Card.appendChild(Image);
  Card.appendChild(CardInfo);
  CardInfo.appendChild(Name);
  CardInfo.appendChild(Username);
  CardInfo.appendChild(Location);
  CardInfo.appendChild(Profil);
  CardInfo.appendChild(Followers);
  CardInfo.appendChild(Following);
  CardInfo.appendChild(Bio);

  // adding classes
  Card.classList.add('card');
  CardInfo.classList.add('card-info');
  Name.classList.add('name');
  Username.classList.add('username');

  return Card;
}
axios.get("https://api.github.com/users/thiernodiallo222/followers")
.then(res => {
    console.log(res);
    res.data.forEach(element => {
      root.appendChild(CreateComponent(element));
    });
    
  })
  .catch(error => {
    console.log("Cannot find data", error);
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


// 