export type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingType[]
    citizensNumber: number
}

export function demolishHousesOnTheStreet (city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen (buildings: GovernmentBuildingType[], number: number){
    return buildings.filter (b => b.staffCount > number);
}