import {CityType, GovermentBuildingType} from "../02/02_02";

export function demolishedHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getBuildingsWithStaffcountMoreThan = (buildings: Array<GovermentBuildingType>, number: number) => {
    return buildings.filter(building => building.staffCount > number)
}
