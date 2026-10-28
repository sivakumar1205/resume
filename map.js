/*let name=["John", "Jane", "Doe", "Smith"];
const s=name.map((name,index)=>{
    return `index of this name ${name}=${index}`
})

console.log(s)
console.log(name)*/

/*let name =[1,2,3,4,5]
const s=name.filter((name, index)=>name%2==0)
console.log(s)

console.log(name)*/

/*b=[1,2,3,4,5]
const a=b.find((c)=> c===4)
console.log(a)*/

/*const users = [
  { id: 1, name: "siva", email: "siva@gmail.com" },
  { id: 2, name: "kumar", email: "kumar@gmail.com" },
  { id: 3, name: "arun", email: "arun@gmail.com" },
  { id: 4, name: "karthik", email: "karthik@gmail.com" },
  { id: 5, name: "vijay", email: "vijay@gmail.com" },
  { id: 6, name: "rahul", email: "rahul@gmail.com" },
  { id: 7, name: "suresh", email: "suresh@gmail.com" },
  { id: 8, name: "ramesh", email: "ramesh@gmail.com" },
  { id: 9, name: "praveen", email: "praveen@gmail.com" },
  { id: 10, name: "dinesh", email: "dinesh@gmail.com" }
]
 

console.log(users.find((db)=>db.id===7))
console.log(users.findIndex((db)=>db.id==8))
console.log(users[12])*/


let arr=['a','b','c','d','e','f','g','h']
const print=arr.reduce((acc,n)=>acc+n)  //acc means acumlator
console.log(print)





