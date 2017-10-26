'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average


function more_candies(student) {
        let sum = [];
        student.forEach(function(e) {
            if (e.candies > 4) {
                sum.push(e.name);
            }
        });
        return sum
      }
      
      console.log(more_candies(students))
      