export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Ivan Ivanov", age: 45},
    {name: "Petr Petrov", age: 25},
    {name: "Sergey Sergeev", age: 18},
    {name: "Dmitry Dmitriev", age: 58}
]

const dimychTransformator = (man: ManType) => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lasName: man.name.split(" ")[1]
})


const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Ivan", lasName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Petr", lasName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Sergey", lasName: "Sergeev"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lasName: "Dmitriev"
    }
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2]),
    dimychTransformator(people[3]),
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lasName: man.name.split(" ")[1]
}))

const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return  people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator!`)
}

