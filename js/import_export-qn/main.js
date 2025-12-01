// main.js

// ডিফল্ট এক্সপোর্ট হওয়ায়, আমরা এটিকে extractVideoId নামে ইমপোর্ট করছি
import extractVideoId from './utils.js'; 

const link = "https://youtube.com/watch?v=123";

const id = extractVideoId(link);

console.log(`Video ID is: ${id}`);