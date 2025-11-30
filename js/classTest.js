// ❓ প্রশ্ন ৫: ক্লাস মেথড (Class Methods)
// আপনার ওয়েবসাইট প্রজেক্টের কোডকে আরও কাঠামোগত (Structural) করতে আমরা ক্লাস ব্যবহার করব।

// আপনি একটি VideoManager ক্লাস তৈরি করতে চান। এই ক্লাসের একটি কনস্ট্রাক্টর (constructor) থাকবে যা একটি channelName আর্গুমেন্ট নেবে। এছাড়াও, এই ক্লাসে একটি মেথড (logChannelName) থাকবে যা চ্যানেলের নামটি কনসোলে প্রিন্ট করবে।

// আপনার প্রশ্ন: এই VideoManager ক্লাসটির এবং তার মেথডগুলোর প্রয়োজনীয় কোড লিখুন।

// (ক্লাস তৈরি করা এবং তারপর তার একটি ইনস্ট্যান্স তৈরি করে মেথডটি কল করা পর্যন্ত সম্পূর্ণ কোড লিখুন।)
// todo ans 
class VideoManager{
    constructor(channelName){
        this.channelName = channelName ;
    }
    logChannelManager(){
        console.log(`Channel name is : ${this.channelName}`);
    }

}

const Channel1 = new VideoManager('ATN Bangla');
const Channel2 = new VideoManager('Somoy TV');
const Channel3 = new VideoManager('Jummuna TV');

console.log(Channel1.logChannelManager());
console.log(Channel2.logChannelManager());
console.log(Channel3.logChannelManager());