class User {
    constructor(username, isLoggedIn, isLoginCount) {
        this.username = username
        this.isLoggedIn = isLoggedIn
        this.isLoginCount = isLoginCount
    }

    body() {
        return `userName:${this.username}\nisLoggedIn:${this.isLoggedIn}\nisLoginCount:${this.isLoginCount}`
    }
}

const user1 = new User("akshar", true, 10)
const user2 = new User("Parth", false, 0)
console.log(user1.body() +" " +user2);


function Movies(mvName, year, star) {
    this.mvName = mvName
    this.year = year
    this.star = star

    this.greeting = function() {
        return `this is the movie "${this.mvName}" that you choose`
    }
    return this
}

const movie1 = new Movies("Thai jashe!", 2023, 5)
console.log(movie1.greeting());

console.log(movie1 instanceof Movies);
console.log(movie1 instanceof Object);

