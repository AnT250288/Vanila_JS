import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesGovernmentsBuildings, getStreetsTitlesOfHouses} from "./05_02";
import {createMessage} from "../03/03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1, builtAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2, builtAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3, builtAt: 2020, repaired: false,
                address: {
                    number: 101, street: {title: "Happy street"}
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE - STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }

        ],
        citizensNumber: 1000000
    }
})

test ("list of steers titles of governments buildings", () => {
    let streetNames = getStreetsTitlesGovernmentsBuildings(city.governmentBuildings)

    expect(streetNames.length).toBe(2)
    expect(streetNames[0]).toBe("Central Str")
    expect(streetNames[1]).toBe("South Str")

})

test ("list of steers titles of houses", () => {
    let streetNames = getStreetsTitlesOfHouses(city.houses)

    expect(streetNames.length).toBe(3)
    expect(streetNames[0]).toBe("White street")
    expect(streetNames[1]).toBe("Happy street")
    expect(streetNames[2]).toBe("Happy street")
})


test("create greeting messages for streets", () => {
    let messages = createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello citizens from White street")
    expect(messages[1]).toBe("Hello citizens from Happy street")
    expect(messages[2]).toBe("Hello citizens from Happy street")

})
