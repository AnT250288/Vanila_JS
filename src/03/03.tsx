import {student, StudentType} from "../02/02";
import {CityType, GovermentBuildingType, HouseType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLivesIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovermentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export function toFireStaff(building: GovermentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export function toHireStaff(buildings: GovermentBuildingType, staffCountToHire: number) {
    buildings.staffCount += staffCountToHire
}

export function createMessage(props: CityType) {
    return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber  + " men"
}