//Objects in JavaScript
var suresh = {
    name: ['Suresh', 'Subramaniam'],
    age: 27,
    hobbies: ['Coding', 'Gaming', 'Music'],
    spouse: 'Aneesha',
    parents:['Subramaniam', 'Shanthi'],
    kids: ['Aadir', 'Love'],
    bio : function() {
        alert('Hello, I\'m ' + this.name[0] + ' ' + this.name[1] + '.' + 'I am ' + this.age + ' years old and I am married to ' + this.spouse +'. My parents are ' + this.parents[0] + ' and ' + this.parents[1] + '. I have'+ this.kids.length +' kids, ' + this.kids[0] +' and ' + this.kids[1])
    }
};
