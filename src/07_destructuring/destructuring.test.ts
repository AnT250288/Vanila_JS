import {ManTypeProps} from "./Destructuring";

let props: ManTypeProps;
beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Judro"
            }
        }
    }
})

test("", () => {


    /*const age = props.age;
    const lessons = props.lessons;*/
    const {age, lessons} = props;
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Judro")
})

test("lessons should be", () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [ls1, ls2] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})

