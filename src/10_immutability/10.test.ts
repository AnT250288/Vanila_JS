import {
    addBooksToUSer, CompaniesType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateTitleOfCompany,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithLaptop
} from "./10";

test('reference type test', () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
    expect(user.laptop).toBe(movedUser.laptop)

})

test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptop = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userWithNewLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithNewLaptop)
    expect(user.address).toBe(userWithNewLaptop.address)
    expect(user.laptop).not.toBe(userWithNewLaptop.laptop)
    expect(userWithNewLaptop.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")
})

test('upgrade user address', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.address.house).not.toBe(userCopy.address.house)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addBooksToUSer(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)
})

test('update js to ts', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js from books', () => {
    let user: UserWithLaptop & UserWithBooks = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address.house).toBe(userCopy.address.house)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).toBe('react')
})

test('update company title', () => {
    let user: UserWithLaptop & CompaniesType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        companies: [{id: 1, title: 'Epammmm'}, {id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptop & CompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {

    let companies = {
        'Dimych' : [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem' : [{id: 2, title: 'IT-INCUBATOR'}],
    }

    const copy = updateTitleOfCompany(companies, 'Dimych', 1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})