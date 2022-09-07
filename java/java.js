fetch('https://swapi.dev/api/planets/')
.then((response) => {
    if(!response.ok)
    throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
})
.then((data) => {
    console.log('fetched first ten planets');
    for(let planet of data.results) {
        console.log(planet.name);
    }
    const nextURL = data.next;
    return fetch(nextURL); 
})
.then((response) => {
    if (!response.ok)
    throw new Error(`Satus Code Error: ${response.status}`);

    return response.json();
})
.then((data) => {
    console.log('fetched next 10 planets');
    for(let planet of data.results) {
        console.log(planet.name);
    }
    
})
.catch((err) => {
 console.log('something wrong');
 console.log(err);
});