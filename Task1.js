class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Name: ${this.name} and age: ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }

    greet() {
        return `Student name: ${this.name}, age: ${this.age} and grade: ${this.grade}`;
    }

    study(hours) {
        return `Student ${this.name} studied for ${hours} hours`;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    greet() {
        return `Teacher name: ${this.name}, age: ${this.age} and subject: ${this.subject}}`;
    }

    teacher(hours) {
        return `Teacher ${this.name} has taught for ${hours} hours`;
    }    
}

const person1 = new Person("Walsidon", 29);
const student1 = new Student("Marlowe", 26, 11);
const teacher1 = new Teacher("Hitch", 26, 30);
console.log(person1.greet());
console.log(student1.greet());
console.log(student1.study(5));
console.log(teacher1.teach(25));





