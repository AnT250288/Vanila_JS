type UserType = {
    name: string
    age: number
}

export var user: UserType = {
    name: "Dimych",
    age: 32
}

function increaseAge(user: UserType) {
    user.age++
}