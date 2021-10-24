import {CityType} from "./04"
//the import is not used, but WebStorm yelled at me due to I have not used any import\export

test("should take men older 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const oldAges = ages.filter(age => age > 91);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses cheaper 160", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150},
        ];

/*    type coursesType = {
        title: string
        price: number
    }*/

    const cheapCourses = courses.filter(course => course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe("CSS");
    expect(cheapCourses[1].title).toBe("React");
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true},
    ]

    const completedTasks = tasks.filter(task => !task.isDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].id).toBe(1);
    expect(completedTasks[1].id).toBe(3);

})