// প্রশ্ন ২: অবজেক্ট ডেস্ট্রাকচারিং এবং রিনামিং
// আপনার কাছে একজন ইউজারের ডেটা এই অবজেক্টে আছে:

//todo JavaScript

const userProfile = {
  firstName: 'jsihan',
  age: 28,
  contact: {
    email: 'mdjishanprodhan132@gmail.com',
    phone: '12345'
  }
};
const {firstName:userName , contact:{email: userEmail}} = userProfile ;
console.log(userName , userEmail)
// আপনার প্রশ্ন: ES6 ডেস্ট্রাকচারিং ব্যবহার করে মাত্র একটি লাইনে নিম্নলিখিত ভ্যারিয়েবলগুলো কীভাবে তৈরি করবেন?

// firstName কে নতুন ভ্যারিয়েবল userName নামে পেতে হবে।

// contact অবজেক্টের মধ্যে থাকা email কে নতুন ভ্যারিয়েবল userEmail নামে পেতে হবে।

// প্রয়োজনীয় কোড লিখুন।