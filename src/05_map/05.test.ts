import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: "Ivan Ivanov", age: 45},
        {name: "Petr Petrov", age: 25},
        {name: "Sergey Sergeev", age: 18},
        {name: "Dmitry Dmitriev", age: 58}
    ]
})

test("should get array of greeting messages", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(4)
    expect(messages[0]).toBe("Hello Ivan. Welcome to IT-Incubator!")
    expect(messages[1]).toBe("Hello Petr. Welcome to IT-Incubator!")
    expect(messages[2]).toBe("Hello Sergey. Welcome to IT-Incubator!")
    expect(messages[3]).toBe("Hello Dmitry. Welcome to IT-Incubator!")
})
