export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptop = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

export type CompanyType = {
    id: number
    title: string
}

export type CompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    // userCopy.hair = u.hair /power
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptop, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
    /* userCopy.address = {...userCopy.address, city: city}*/
}

export function moveUserToOtherHouse(u: UserWithLaptop & UserWithBooks, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    /* userCopy.address = {...userCopy.address, city: city}*/
}

export function upgradeUserLaptop(u: UserWithLaptop, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: laptop
        }
    }
}

export function addBooksToUSer(u: UserWithLaptop & UserWithBooks, newBooks: string) {
    return {
        ...u,
        books: [...u.books, newBooks]
    }
}

export function updateBook(u: UserWithLaptop & UserWithBooks,
                           oldBook: string,
                           newBooks: string) {
    return {
        ...u,
        books: u.books.map(b => b === oldBook ? newBooks : oldBook)
    }
}

export const removeBook = (u: UserWithLaptop & UserWithBooks, removedBook: string) => ({
    ...u,
    books: u.books.filter(b => b !== removedBook)
})

export const updateCompanyTitle = (user: CompaniesType,
                                   companyId: number,
                                   newCompanyTitle: string) => {
    const copyUser: CompaniesType = {
        ...user,
        companies: user.companies.map(c => c.id === companyId ?
            {...c, title: newCompanyTitle}
            : c)
    }
    return copyUser
}

const updateTitle = (user: CompaniesType,
                     companyId: number,
                     newTitle: string) => {
    const userCopy: CompaniesType = {
        ...user,
        companies: user.companies.map(company => {
            if (company.id === companyId) {
                return {...company, title: newTitle}
            } else {
                return company
            }
        })
    }
}

export const updateTitleOfCompany = (companies: { [key: string]: Array<CompanyType> },
                              userName: string,
                              companyId: number,
                              newTitle: string) => {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(company =>
        company.id === companyId ? {...company, title: newTitle} : company)

    return companyCopy
}