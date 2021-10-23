import {CityType} from './../04-filter/04'
import {creatingGreetingMessages, getSteetsTitlesOfGovernmentBuildings, getSteetsTitlesOfHouses} from './05_02';
import {GovernmentBuildingType} from './../04-filter/04'

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

test("Lidt of street titles of government buildings", () => {
    const streetNames = getSteetsTitlesOfGovernmentBuildings (city.governmentBuildings);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe("Central Str");
    expect(streetNames[1]).toBe("South Str");
})

test("Lidt of street titles of houses", () => {
    const streetNames = getSteetsTitlesOfHouses (city.houses);

    expect(streetNames.length).toBe(3);
    expect(streetNames[0]).toBe("White street");
    expect(streetNames[1]).toBe("Happy street");
    expect(streetNames[2]).toBe("Happy street");
})

test("create a greeting messages for streets", () => {
    const messages = creatingGreetingMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello citizens of White street! How was your elections?")
    expect(messages[1]).toBe("Hello citizens of Happy street! How was your elections?")
    expect(messages[2]).toBe("Hello citizens of Happy street! How was your elections?")

})