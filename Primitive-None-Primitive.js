// Primitive Data Types (মৌলিক ডেটা টাইপ):

// 1. String (স্ট্রিং): টেক্সট ডেটা রাখার জন্য।
// 2. Number (নাম্বার): সংখ্যা ডেটা রাখার জন্য, যেমন পূর্ণসংখ্যা, দশমিক সংখ্যা।
// 3. Boolean (বুলিয়ান): সত্য বা মিথ্যা মান রাখার জন্য, সেটা হতে পারে true অথবা false।
// 4. Undefined (অপরিভাজ্য): এটি যখন কোনো ভেরিয়েবল ডিফাইন না করা থাকে তখন সেটি অপরিভাজ্য মান ধারণ করে।
// 5. Null (শূন্য): মান বা রেফারেন্স না থাকলে এটি শূন্য মান ধারণ করে।
// 6. Symbol (সিম্বল): ES6 এ যুক্ত হয়েছে, যা অনন্য, অবিচ্ছিন্ন, অদৃশ্য, অপার্থক্যপূর্ণ মান তৈরি করতে ব্যবহৃত হয়।


// Non-Primitive Data Types (অমৌলিক ডেটা টাইপ):
// Object (অবজেক্ট): অবজেক্ট ডেটা হলো অনেক ধরনের ডেটা মিশ্রণ, যেমন অ্যারে, ফাংশন, বস্তুর অবজেক্ট।


//                                          পার্থক্য:
// 1. প্রাইমিটিভ ডেটা টাইপ মৌলিক, অর্থাৎ এগুলি অমৌলিক ডেটা টাইপের একটি সিদ্ধান্তকে ধারণ করে এবং এগুলি মুটামুটি immutable (অপরিবর্তনীয়)।
// 2. নন-প্রাইমিটিভ ডেটা টাইপ অমৌলিক, এগুলি রেফারেন্স ভিত্তিক, অর্থাৎ অমুক্তিমূলক এবং এগুলি mutable (পরিবর্তনশীল)।


// মৌলিক ডেটা টাইপের মান ডেটা ডিরেক্টলি ভেরিয়েবলে স্টোর হয়, যেখানে অমৌলিক ডেটা টাইপের মান ডেটা স্টোর হয় না, বরং অবজেক্ট ভেরিয়েবলের পুনরাবৃত্তির মাধ্যমে অ্যাক্সেস করা হয়।