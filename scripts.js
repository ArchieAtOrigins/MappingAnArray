const peeps = [
	{firstName: 'Edgar', lastName: 'Winter', job: 'Musician', birthyear: 1946},
	{firstName: 'Herman', lastName: 'Melville', job: 'Author', birthyear: 1819},
	{firstName: 'Antonio', lastName: 'Vivaldi', job: 'Composer', birthyear: 1678},
	{firstName: 'Arthur', lastName: 'Schopenhauer', job: 'Philosopher', birthyear: 1788},
	{firstName: 'Mohatma', lastName: 'Gandi', job: 'Activist', birthyear: 1869},
	{firstName: 'Theodor', lastName: 'Geisel', job: 'Author', birthyear: 1904},
	{firstName: 'Guy', lastName: 'Fawkes', job: 'Activist', birthyear: 1570},
	{firstName: 'Rachel', lastName: 'Carsen', job: 'Biologist', birthyear: 1907},
];

// the function will take in each item in the array as its parameter. Here 'x' = the current item in the array bring mapped.
// by putting using the arrow function and template literals, you get a nice, concise statement.

const nameArray = peeps.map((x) => `${x.firstName} ${x.lastName} ${x.birthyear}`);

console.log(nameArray);