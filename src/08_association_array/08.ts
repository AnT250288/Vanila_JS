import {users} from "./08.test";

export const userObj = {
    '0': "Dimych",
    '1': "Nastya",
    '2': "Volodya",
    '3': "Jora"
}

/*let user = {id: 100500, name: 'Igor'}
users[user.id] = user;

delete users[user.id]

users[user.id].name = "Vitya" // -update*/


export const userArray = [
    {id: 101, name: "Dimych"},
    {id: 2312312312, name: "Nastya"},
    {id: 555135366, name: "Volodya"},
    {id: 1, name: "Jora"}
]

//userArray.find(u => u.id === 1) //- придется пройтись по всему массиву для поиска нужного id
//var userCopy = [...userArray.filter(), user] //- для добавления нужно создавать новый массив и фильтровать все id
//var usersArray = userArray.filter(u => u.id !== user.id) //-для удаления нужно перезатирать старый массив и опять искать нужный id

