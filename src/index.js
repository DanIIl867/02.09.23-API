// const url = 'https://newsapi.org/v2/everything?q=bitcoin'
// const options = {
//     headers:{
//         'X-Api-Key': 'f51d51ef29634144b84cf933be09d34e'
//     }
// }

// fetch(url, options)
// .then (response=>response.json())
// .then(console.log)



const form = document.querySelector('.js-search-form')



function getImg(query) {
    const url = `https://newsapi.org/v2/everything?q=${query}`
    const options = {
        headers: {
            'X-Api-Key': 'bc9655a1ace34da58299b1782e8ed736'
        }
    }
    return fetch(url,options)
    .then(response => response.json())
}

form.addEventListener('submit', onSearchQuery)

function onSearchQuery(e) {
    e.preventDefault()
    const query = e.currentTarget.elements.query.value
    getImg(query).then(articles => {
        return articles.articles
    })
    .then(articles => {
        console.log(articles[0].source.name);
    })
}
