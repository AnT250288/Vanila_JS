test("Should take old men older than 90", () => {
    const ages = [18, 20, 22, 100, 90, 14]

    const oldAges = ages.filter((age) => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})

test("should take courses cheaper than 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 150},
        {title: "React", price: 200}
    ]

    const cheapestCourses = courses.filter(course => course.price < 160)

    expect(cheapestCourses.length).toBe(2)
    expect(cheapestCourses[0].title).toBe("CSS")
    expect(cheapestCourses[1].title).toBe("JS")

})


test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Milk", isDone: true},
        {id: 2, title: "Beer", isDone: false},
        {id: 3, title: "Bread", isDone: true},
        {id: 4, title: "Sugar", isDone: false},
        {id: 5, title: "Water", isDone: true}
    ]
    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(3)
    expect(completedTasks[0].id).toBe(1)
    expect(completedTasks[1].id).toBe(3)
    expect(completedTasks[2].id).toBe(5)
})

test("get only uncompleted tasks", () => {
    const tasks = [
        {id: 1, title: "Milk", isDone: true},
        {id: 2, title: "Beer", isDone: false},
        {id: 3, title: "Bread", isDone: true},
        {id: 4, title: "Sugar", isDone: false},
        {id: 5, title: "Water", isDone: true}
    ]
    const uncompletedTasks = tasks.filter(task => !task.isDone)

    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(2)
    expect(uncompletedTasks[1].id).toBe(4)
})