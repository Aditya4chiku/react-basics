class Person {
    constructor(name) {
        this.name = name
    }
    hello() {
        return 'Hello ,I am ' + this.name
    }
}

class man extends Person {

    constructor(gender) {
        this.gender = gender
    }
    gender() {
        super()
        return 'Gender is ' + this.gender
    }
}

const per = new man('Male')

console.log(per.gender())


// const car = {
//     model: 'Furari',
//     manufacturer: 'Food',
//     fullname: function () {
//         return `${this.manufacturer} ${this.model}`
//     }
// }

// const car = {
//     model: "BMW",
//     manufacturer: 'Person',
//     fullName: () => {
//         return `${this.model}`
//     }
// }
// console.log(car.fullName())
// const string = `Hey
// this
// string
// is awesome!`
// const t = 'shvbe\nscnjfn'
// console.log(t)
