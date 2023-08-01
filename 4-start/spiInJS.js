fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => {
    return res.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally((msg) => {
    console.log('finally run');
})