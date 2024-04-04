// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
// 1700. Number of Students Unable to Eat Lunch

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let hungry=0;
    // if hungry=students.length, means there's an infinite-loop
    while(hungry<students.length && students.length>0){
        if(students[0]==sandwiches[0]){
            hungry=0;
            // CASE1: student gets a sandwich and leaves.
            students.shift();
            sandwiches.shift();
        }else{
            hungry++;
            // CASE2: student goes to queue's end.
            students.push(students.shift());
        }
    }
    return students.length;
};

var countStudentsEx = function(students, sandwiches) {
    let cnt=[0,0];
    for(let i=0; i<students.length; i++){
        cnt[students[i]]++;
    }
    // each sandwich needs to find a student who wants it.
    for(let j=0; j<sandwiches.length; j++){
        // if cnt[x]<0, means nobody wants this sandwich anymore (i.e. everyone in queue prefers another).
        if(--cnt[sandwiches[j]]<0){
            // So they can't have lunch now :(
            return cnt[sandwiches[j] ^ 1];
        }
    }
    return 0;
};

console.log(countStudents([1,1,0,0], [0,1,0,1]));
// Output: 0 
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));
// Output: 3
console.log(countStudents([0,0,0,1,1,0], [1,0,0,0,1,1]));
// Output: 1
console.log(countStudents([0,0,0,1,1,0], [0,1,1,1,0,0]));
// Output: 3

console.log(countStudentsEx([1,1,0,0], [0,1,0,1]));
// Output: 0 
console.log(countStudentsEx([1,1,1,0,0,1], [1,0,0,0,1,1]));
// Output: 3
console.log(countStudentsEx([0,0,0,1,1,0], [1,0,0,0,1,1]));
// Output: 1
console.log(countStudentsEx([0,0,0,1,1,0], [0,1,1,1,0,0]));
// Output: 3
