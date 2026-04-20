//Question 1

function gradeTest(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;  
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }
    console.log(`Grade: ${grade}`);
    let result = (score >= 60) ? "Pass" : "Fail";
    console.log(`Result: ${result}`);
}

//Question 2

function typeConversion(value) {
    
    let value = prompt("Enter a value:");
    let numberValue = Number(value);

    const testValues = [0, "", "hello", null, undefined, NaN];

    testValues.forEach( i => {
        if (i) {
            console.log(`Value: ${i} is truthy`);
        } else {
            console.log(`Value: ${i} is falsy`);
        }
});
}

//Question 3

function greetingBot(name, isMorning) {
    return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
}

console.log(greetingBot("Alice", true)); // Output: Good morning, Alice!
console.log(greetingBot("Bob", false));  // Output: Hello, Bob! 

//Question 4

const post = {
    username: "john_doe",
    caption: "Enjoying the sunny day!",
    likes: 150,
    comments: ["Nice photo!", "Looks fun!", "Wish I was there!"],

    addLike: function() {
        this.likes += 1;
        console.log('Post liked! Total likes: ' + this.likes);
    }
};

console.log('Likes before:$post.likes');
post.addLike(); // Output: Post liked! Total likes: 151
console.log('Likes after:$post.likes');

const { username, caption} = post;
console.log(`Username: ${username}, Caption: ${caption}`);

//Question 5

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

let rows = 5;
for (let i = 1; i <= rows; i++) {
    let spaces = ' '.repeat(rows - i);
    let stars = '*'.repeat(i);
    console.log(spaces + stars);
}

let num = 10;
while (num >= 1) { 
    console.log(num);
    num--;
}