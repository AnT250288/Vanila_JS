import {userObj} from "./08";

type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType

beforeEach( () =>{
    users = {
        '101': {id: 101, name: "Dimych"},
        '12312312312': {id: 2312312312, name: "Nastya"},
        '555135366': {id: 555135366, name: "Volodya"},
        '1': {id: 1, name: "Jora"}
    }
})

test("should select users from obj", () => {

    expect(userObj[0]).toBe("Dimych")
    expect(userObj[1]).toBe("Nastya")
    expect(userObj[2]).toBe("Volodya")
    expect(userObj[3]).toBe("Jora")
})

test("should update correct user", () => {
    users['1'].name = "Anastasiya"
    expect(users['1'].name).toBe("Anastasiya")
})

test("should delete correct user", () => {
    delete users['1']
    expect(users['1']).toBeUndefined()
})