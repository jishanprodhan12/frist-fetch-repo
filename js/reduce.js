//* প্রশ্ন ৪: অ্যারে মেথড: reduce (Reduce)
// ধরুন, আপনার কাছে ব্যবহারকারীদের স্কোর আছে: const scores = [80, 95, 70, 85];

// আপনার প্রশ্ন: reduce() মেথড ব্যবহার করে এই স্কোরগুলির মোট যোগফল (Total Sum) কীভাবে বের করবেন? একটি সিঙ্গেল লাইনে প্রয়োজনীয় কোড লিখুন।

// (এটি map এবং filter এর চেয়ে একটু জটিল, কারণ এটির একটি অ্যাকুমুলেটর (accumulator) আছে।)

const scores = [80, 95, 70, 85];
const sum = scores.reduce((accumulator, current) => accumulator + current, 0);
console.log(`sum using reduce function : ${sum}`);

// way 2 
const rum3 = scores.reduce((accumulator, current) => {
    accumulator + current;
    console.log(accumulator , current);
    return accumulator + current ;
}, 0);
console.log(`rum using reduce function : ${rum3}`);
