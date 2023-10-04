import { Person } from "./Person.js";
export class Driver extends Person {
	numberOfRides = 0;

  	static drivers = [];

	constructor(name, age) {
		// super(name, age); 
		if (age < 18) {
			return new Error(
				'É necessário ter mais de 18 anos para ser um motorista'
				);
			}
			
		super(name, age); // o super tem que ser a primeira informação passada dentro do construtor, mas se tiver uma condição antes, pode ser chamado depois
    	this.constructor.drivers.push({ name: name, age: age });

	}

	runDrive(amount) {
		this.amount += amount; // não precisa de #amount pq em person é privado e para acessar é preciso Person.amount
		this.numberOfRides++;
	}

  	static numberOfDrivers() {
		const numberOfDrivers = super.numberOfPersons(this.drivers) // podemos colocar o nome direto do atributo ou o Driver.drivers
		console.log(`O total de motoristas cadastradas é: ${numberOfDrivers}`);
	}

	static ageAverage() {
		const ageAverageDrivers = super.ageAverage(this.drivers);

		console.log(`A média de idade das motoristas é de: ${ageAverageDrivers}`);
	}

}
