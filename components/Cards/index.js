// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let subtopics = response.data.articles;
        return subtopics;
//         debugger
//     }) .then(subtopics =>{
//         let cardData
//         subtopics.forEach(item =>{
//             cardData = item;
//         })
//         return cardData;
// debugger
//     }).then(cardData =>{
//         cardData.forEach(item =>{
//             cardContainer.appendChild(createCard(item));
//         })
    })

    .catch(error => {
        console.log('Error:');
    })


// create component

function createCArd(articleObj){
    const {headline, authorPhoto, authorName} = articleObj;

    const card = document.createElement('div');
    const cardHeadline = document.createElement('div');
    const cardAuthor = document.createElement('div');
    const cardAuthorPhoto = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardAuthorName = document.createElement('span');

    card.appendChild(cardHeadline);
    card.appendChild(cardAuthor);
    cardAuthor.appendChild(cardAuthorPhoto);
    cardAuthorPhoto.appendChild(cardImg);
    cardAuthor.appendChild(cardAuthorName);

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardAuthorPhoto.classList.add('img-container');

    cardImg.src = authorPhoto;
    cardHeadline.textContent = headline;
    cardAuthorName.textContent = authorName;

    return card;

}

cardContainer.appendChild(createCArd({headline: 'I am a headline', authorPhoto: 'I am a photo', authorName: 'I am a name'}))