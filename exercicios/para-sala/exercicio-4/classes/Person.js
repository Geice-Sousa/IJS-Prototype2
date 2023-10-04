export class Person {
    name;
    age;
    #amount = 0;
    
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    get amount(){
        return this.#amount
    }

    set amount(newAmount){
        return this.#amount = newAmount;
    }

    static numberOfPersons(persons){
        return persons.length; // partindo do princípio que persons é uma array
    }

    static ageAverage(persons){
        const totalOfPersons = persons.length;

        if (totalOfPersons === 0) return 0;

        const ageSum = persons.reduce((total, person)=> total + person.age, 0);

        const ageAverage = (ageSum / totalOfPersons)
        return ageAverage.toFixed(2)
    }

}