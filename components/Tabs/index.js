// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// get axios data

const placeTabs = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(item => {
            let tabTopics = createTab(item);
            placeTabs.appendChild(tabTopics);
        })

    })
    .catch(error => {
        console.log('Error:');
    })



// create tabs component

function createTab(topic) {

    const tabTopic = document.createElement('div');
    const topics = document.createElement('a');

    tabTopic.classList.add('tab');
    topics.classList.add('topics');

    tabTopic.textContent = topic;

    return tabTopic;

}

placeTabs.appendChild(createTab('swimming'));