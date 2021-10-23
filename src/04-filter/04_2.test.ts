import {CityType, demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './04'

let city: CityType;

beforeEach(() => {
    city = {
        title: "NewYork",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"},
                },
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"},
                },
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"},
                },
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: {street: {title: "Central Str"}, number: 12},
                budget: 200000, staffCount:200
            },
            {
                type: "FIRE-STATION",
                address: {street: {title: "South Str"}, number: 12},
                budget: 500000, staffCount:1000
            },
        ],
        citizensNumber: 1000000
    }
})

test("Houses should be destroyed", ()  => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)

})

test("Buildings with enough staff count", ()  => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")

})