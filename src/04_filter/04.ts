export type CourseType = {
    title: string,
    price: number
}

const ages = [18, 20, 22, 100, 90, 14]

const predicate = (age: number) => {
    return age > 90
}

const oldAges = [100];

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 150},
    {title: "React", price: 200}
]

const cheapPredicate = (course: CourseType) => {
    return course.price
}

const cheapCourses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 150}
]