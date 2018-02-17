import reddit from './redditapi';

const serachForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
serachForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;
  const searchLimit = document.getElementById('limit').value;
  
if(searchTerm === ''){
  showMessage('Please add a search term', 'alert-danger');
}

searchInput.value = '';

reddit.search(searchTerm, searchLimit, sortBy).then(results => {
  let output = '<div class="card-columns">';
  results.forEach(post => {
    let image = post.preview ? post.preview.images[0].source.url : 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Reddit_logo_and_wordmark.svg/150px-Reddit_logo_and_wordmark.svg.png';
    output += `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${truncateText(post.selftext, 100)}</p>
    <a href="${post.url}" class="btn btn-dark">Read More</a>
    <hr>
    <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
    <span class="badge badge-dark">Subreddit: ${post.score}</span>
  </div>
</div>
    
    `
  });
  output += '</div>'
  document.getElementById('results').innerHTML = output;
});

});

function showMessage(message, className){
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const searchContainer = document.getElementById('search-container');
  const search = document.getElementById('search');
  searchContainer.insertBefore(div, search);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}

function truncateText(text, limit){
  const shortened = text.indexOf(' ', limit);
  if(shortened == -1) return text;
  return text.substring(0, shortened);
}