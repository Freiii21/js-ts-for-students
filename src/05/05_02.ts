import {GovernmentBuildingType, HouseType} from './../04-filter/04'

export const getSteetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingType[]) => {
    return buildings.map(b => b.address.street.title)
}

export const getSteetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title)
}

export const creatingGreetingMessages = (streets: HouseType[]) => {
    return streets.map(s => `Hello citizens of ${s.address.street.title}! How was your elections?`)
}