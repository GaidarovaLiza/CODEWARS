function joinStrings(string1, string2) {
	return `${string1} ${string2}`;// code here
}

const grow = x => x.reduce((a, b) => a * b); //Beginner - Reduce but Grow.js

return s.replace(/!/g, ''); //Remove exclamation marks.js 

const min = (list) => Math.min(...list); //Find Maximum and Minimum Values of a List
const max = (list) => Math.max(...list);

function shortcut(string) {
	return string.replace(/[aeiou]/g, '')
}

function isPalindrome(x) {
	x = x.toLowerCase()
	return x === x.split``.reverse().join``// is it palindrom
}

const humanYearsCatYearsDogYears = humanYears => [
	humanYears,
	(humanYears - 1 ? 16 : 11) + 4 * humanYears,
	(humanYears - 1 ? 14 : 10) + 5 * humanYears,
];

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

const summation = n => n * (n + 1) / 2;

switchItUp = n => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n]

String.prototype.toAlternatingCase = function () {
	return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}


const hotpo = (n, acc = 0) =>
	n <= 1 ? acc : hotpo(n % 2 === 0 ? n / 2 : 3 * n + 1, acc + 1)