const user = {
  name: "Olha",
  age: 21,
  gender: "female",
};

const jsonStringify = JSON.stringify(user);
console.log(jsonStringify);

const parsedUser = JSON.parse(jsonStringify);
console.log(parsedUser.name);
console.log(parsedUser.age);

//!==============================================

const oneDirection = {
  name: "One Direction",
  formedYear: 2010,
  disbanded: 2016,
  onHiatus: true,
  members: [
    {
      name: "Harry Styles",
      birthYear: 1994,
      soloCareer: true,
      popularSongs: ["Watermelon Sugar", "As It Was", "Sign of the Times"],
    },
    {
      name: "Niall Horan",
      birthYear: 1993,
      soloCareer: true,
      popularSongs: ["Slow Hands", "This Town"],
    },
    {
      name: "Louis Tomlinson",
      birthYear: 1991,
      soloCareer: true,
      popularSongs: ["Back to You", "Miss You"],
    },
    {
      name: "Liam Payne",
      birthYear: 1993,
      soloCareer: true,
      popularSongs: ["Strip That Down", "For You"],
    },
    {
      name: "Zayn Malik",
      birthYear: 1993,
      leftBand: 2015,
      soloCareer: true,
      popularSongs: ["Pillowtalk", "Dusk Till Dawn"],
    },
  ],
  albums: [
    "Up All Night",
    "Take Me Home",
    "Midnight Memories",
    "Four",
    "Made in the A.M.",
  ],
  biggestHits: [
    "What Makes You Beautiful",
    "Story of My Life",
    "Night Changes",
    "Drag Me Down",
  ],
  xFactorPosition: "Third place",
  totalRecordSales: "70 million+",
};

const jsonString = JSON.stringify(oneDirection, null, 2);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

console.log(`Назва гурту: ${parsedObject.name}`);
console.log(`Кількість альбомів: ${parsedObject.albums.length}`);
console.log(`Перший учасник: ${parsedObject.members[0].name}`);
console.log(
  `Найпопулярніша пісня ${parsedObject.members[0].name}: ${parsedObject.members[0].popularSongs[0]}`
);
//!---------------------------------------

// Перетворіть user на JSON, після цього зробіть з нього знову об’єкт і запишіть його в іншу змінну.

let user2 = {
  name: "Іван Іванов",
  age: 35,
};

const json = JSON.stringify(user2);
const obj = JSON.parse(json);
console.log(obj.name);
console.log(obj.age);

//!-----------------------------------------

// Напишіть функцію replacer, щоб серіалізувати все, але видалити властивості, які посилаються на meetup:
/* результат повинен бути:
{
  "title":"Конференція",
  "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
  "place":{"number":23}
}
*/
let room = {
  number: 23,
};

let meetup = {
  title: "Конференція",
  occupiedBy: [{ name: "Іван" }, { name: "Аліса" }],
  place: room,
};

// циклічне посилання
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value === meetup ? undefined : value;
  })
);
