const cardContainer = document.querySelector('.card-container');

fetch('stories.json')
  .then(response => response.json())
  .then(stories => {
    stories.forEach(story => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const img = document.createElement('img');
      img.src = story.image;
      img.alt = story.title;
      card.appendChild(img);
      
      const title = document.createElement('h2');
      title.textContent = story.title;
      card.appendChild(title);
      
      const description = document.createElement('p');
      description.textContent = story.description;
      card.appendChild(description);
      
      const link = document.createElement('a');
      link.href = story.link;
      link.textContent = 'Read More';
      card.appendChild(link);
      
      cardContainer.appendChild(card);
    });
  });

function getQuote() {
  fetch('https://type.fit/api/quotes?category=woman')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      document.getElementById('quote').innerHTML = quote;
    })
    .catch(error => {
      console.error('There was a problem fetching the quote:', error);
    });
}
