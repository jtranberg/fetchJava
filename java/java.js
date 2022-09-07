fetch('https://swapi.dev/api/planets/')
.then((response) => {
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
})
.then((data) => {
    console.log('fetched first ten planets');
    const filmURL = data.results[0].films[0];
    return fetch(filmURL); 
})
.then((response) => {
    if (!response.ok)
    throw new Error(`Satus Code Error: ${response.status}`);

    return response.json();
})
.then((data) => {
    console.log('fetched first fil based on first planet');
    console.log(data.title);
})
.catch((err) => {
 console.log('something wrong');
 console.log(err);
});