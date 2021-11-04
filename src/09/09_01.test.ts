export function increaseAge (u: UserType){
    u.age++
}
type UserType = {
    name: string
    age: number
    address: {title: string}
}

/*test('reference type test', () => {
    let user22: UserType = {
        name: "Dimych",
        age: 32,
    }
    increaseAge(user22);
    expect(user22.age).toBe(33)
    const superman = user22;
    superman.age = 1000;
    expect(user22.age).toBe(1000)
})
test('array reference test', () => {
    let users: UserType[] = [
        {
            name: "Dimych",
            age: 32,
        },
        {
            name: "Dimych",
            age: 32,
        }
    ];
    let admins = users;
    admins.push({name: "gangster", age: 10})
    expect(users[2]).toEqual({name: "gangster", age: 10});
})*/
test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;
    adminsCount++;

    expect(usersCount).toBe(100);
})
test('reference type test2', () => {
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: {
            title: 'Minsk'
        },
    }

    //let addr = user.address

    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: user.address,
    }

    user2.address.title = "Kanary";

    expect(user.address.title).toBe('Kanary')
})
test('reference type array test', () => {
    const address = {
        title: "Minsk",
    }
    let user: UserType = {
        name: "Dimych",
        age: 32,
        address: address,
    }
    let user2: UserType = {
        name: "Natasha",
        age: 30,
        address: address,
    }

    const users = [user, user2, {name: "Katya", age: 18, address: address}]
    const admins = [user, user2];
    admins[0].name = 'Dmitry';

    expect(users[0].name).toBe('Dmitry');
    expect(user.name).toBe('Dmitry');
})

test('sort array test', () => {
    const letters = ['c','d','a','z','e']
    letters.sort();

    expect(letters).toEqual(['a','c','d','e','z']);
})