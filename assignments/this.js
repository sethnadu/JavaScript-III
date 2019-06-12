/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. (Global Binding)the simpliest function that a this statement can be used.
* 2. (Implicit Binding) a function/function(s) that uses multiple this statements that are the object to the left of the dot.
* 3. (New binding) Constructor Functions come in to play, the objects creator, that this is used. Using the new keyword you can replace this with a const.
* 4. (Explicit Binding) Call and Apply get introduced, can override Constructor Functions.
*
* write out a code example of each explanation above
*/

// Principle 1

  function totalPay(pay) {
    console.log (this);
    return pay;
}

    totalPay("$", 50000)

// Principle 2

const myPay = {
    salary: 50000,
    total: function(name) {
        console.log (`${name} made $${this.salary} this year.`);
        console.log (this);
    }
};

myPay.total("Seth");

// Principle 3

function myTotalPay(firstName) {
    this.salaryTotal = 50000;
    this.bonus = 3000;
    this.totalPay = this.salaryTotal + this.bonus;
    this.firstName = firstName;
    this.speak = function() {
        console.log(`${firstName} made $${this.salaryTotal} with a bonus of $${this.bonus} for a total of $${this.totalPay} `);
    };
};
    const seth = new myTotalPay('seth');
    
    seth.speak();

// Principle 4

const familyMembers = {
    lastName: "Nadu",
    born: "Lancaster",
}

const namesOfFamily = ['Andrew','Matthew','Jon', 'Brittany', 'Maria', 'Seth', 'Isaac', 'Elijah', 'Alexis', 'Diana', 'Frank']

function thisIsMyFamily(member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, member11) {
    return `My family consist of ${member1}, ${member2}, ${member3}, ${member4}, ${member5}, ${member1}, ${member6}, ${member7}, ${member8}, ${member9}, ${member10}, ${member11} and we share the last name ${this.lastName} and we were born in ${this.born}.`
};

console.log(thisIsMyFamily.call(familyMembers,...namesOfFamily));
console.log(thisIsMyFamily.apply(familyMembers, namesOfFamily));