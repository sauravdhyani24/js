// pimitive datatypes
// 7 types: string, Number, Boolean, null, undefined, symbol, BigInt
const score =33
const isloggedin = false
const scorevalue = 33.5
const temp = null
const infnum = undefined

const id = Symbol("123")
const userid = Symbol("123")
//console.log(id===userid);
const bignum =23456723456n
// referance type, nonprimitivev datatypes
// Arrays, Objects, Functions

const name = ["shubham", "sahil", "rahul"]
let myobj = {
    name: "rahul",
    age: 23,
    roll: 21

}

function myfunction()
{
    console.log("hello world")
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\

// stack (primitive), heap (non primitive)

let myname = "shubham"

let secondname = myname
secondname = "hitesh"
//console.log(myname)
//console.log(secondname);

let userone= {
    email: "shubham.com",
    password: "singhl"
}
let usertwo = userone
usertwo.email = "shubhamgoole.com"

console.log(userone.email);
console.log(usertwo.email);