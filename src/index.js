const url = 'https://newsapi.org/v2/everything?q=bitcoin'
const options = {
    headers:{
        'X-Api-Key': 'f51d51ef29634144b84cf933be09d34e'
    }
}

fetch(url, options)
.then (response=>response.json())
.then(console.log)
