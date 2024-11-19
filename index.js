function toUpper(string) {
    return string.toUpperCase();
}

const cats = ["Leopard","serval","Jaguar","Tiger","Caracal","Lion"];
const upperCats = cats.map(toUpper);
console.log(upperCats);