const data = [
  { 
    name: 'John Doe',
    age: 33,
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
},
{ 
  name: 'Jen Smith',
  age: 26,
  location: 'Boston MA',
  image: 'https://randomuser.me/api/portraits/women/82.jpg'
},
{ 
  name: 'William Johnson',
  age: 38,

  location: 'Boston MA',
  image: 'https://randomuser.me/api/portraits/men/80.jpg'
},
];

const profiles = profileIterator(data);
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {

  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
  console.dir(document.getElementById('profileDisplay'));
  document.getElementById('profileDisplay').innerHTML = 
  
  `<ul class="list-group">
  <li class="list-group-item"> Name: ${currentProfile.name} </li>
  <li class="list-group-item"> Age: ${currentProfile.age} </li>
  <li class="list-group-item"> Location: ${currentProfile.location} </li>
  </ul>
  `;
  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;} else {
    window.location.reload();
  }

}

function profileIterator(profiles) {
let nextIndex = 0;

return {
  next: function(){
    return nextIndex < profiles.length ?
    {value: profiles[nextIndex++], done: false} :
    {done: true}
  }
}
}