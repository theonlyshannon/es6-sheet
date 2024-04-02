//function scope using var let

function getNama() {
    if (false) {
        var nama = 'nuha';

        console.log(nama)
    }else {
        console.log('nama tidak ditemukan')
    }
}

getNama();

//=======================================================//


//reassign using const

const orang = {
    id : 1,
    nama : 'sofwan',
    last_nama : 'nuha'
}

orang.id = 2; //id console change to 2

console.log(orang)

//=======================================================//

//arrow syntax =>

var nama = ['aqila', 'ehan', 'fikri', 'abyan']

nama.forEach((nama, index) => {
    console.log(nama + ' = ' + index)
})

var nama = ['momo', 'nayeon', 'sana', 'jihyo']

let namaIndex = nama.map((nama, index) =>  //menggunakan fungsi map
    nama + ' = ' + index
)

console.log(namaIndex)

//second try

let newjeans = {
    members : ['hanni', 'minji', 'haerin', 'danielle', 'hyein'],
    getMembers () {
        this.members.map((name) => {
            console.log(this);
        });
    }
}

console.log(newjeans.getMembers()); untuk mention object dari variable newjeans


//=======================================================//

default parameter

createTag = (title, tag = 'html') => {
    // tag = tag || 'css'

    // if (typeof tag === 'undefined') {
    //     tag = 'js' untuk versi dibawah es6
    // }
    console.log(title + ' ' + tag)
}

createTag('tampilan')

//=======================================================//

// rest and spread

signIn = (username, password) => {
    console.log(username + ' memiliki password ' + password)

}

let data = ['shannon', '12345']

signIn(...data); //rest data


signIn = (...data) => {
    console.log(data)
}

username = 'shannon',
password = '12345',
umur = '35'

signIn(username, password, umur); //spread data

//=======================================================//

//template literal/string literal

let nama = 'shannon'
let umur = 25

// let text = `nama ${nama} berumur ${umur}`

// console.log(text)


test = (strings, nama) => {
    let string1 = strings[0]
    let string2 = nama[1]

    console.log(string2)
}

let output = test `nama saya adalah ${nama} berumur ${umur}`


//=======================================================//

//shorthand and destructuring object

var name = 'hanni'
var age = 19

getMember = () => {
    return `nama saya ${name} berumur ${age} tahun`
}

let member = {
    name, age, getMember
}

console.log(member.getMember()) //shorthand


const person = {
    name : 'kang haerin',
    age : 17,
    city : 'seoul'
}

const {name, age, city} = person; // destructuring 

console.log(`nama saya ${name} saya berumur ${age} saya tinggal di ${city}`)


//=======================================================//

//class es6

class Member {
    constructor(name, position) {
        this.name = name
        this.position = position
    }

    getData(name) {
        return `nama ${this.name} posisi sebagai ${this.position}`
    }

    static getPoint () {
        return 'point 90 sebagai dancer'
    }
}

let member = new Member('mina', 'dancer')
console.log(member.getData());


