// JavaScript এবং অন্যান্য অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিং ভাষাতে, এনক্যাপসুলেশন (Encapsulation) হলো একটি কনসেপ্ট যা ডেটা এবং তার সম্পর্কিত মেথডগুলির ক্লাস বা অবজেক্টের একটি সীমাবদ্ধ ইউনিট সৃষ্টি করে। এনক্যাপসুলেশনের মূল উদ্দেশ্য হলো ডেটা এবং মেথডগুলির অন্তর্ভুক্ততা বা প্রাইভেসি সংরক্ষণ করা, যাতে তারা কেবল অন্তর্নিহিত ফাংশনগুলির মাধ্যমে এক্সেস করা যায়।

// এনক্যাপসুলেশন সাধারণত ক্লাস এবং অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিংয়ে ব্যবহৃত হয়, তবে জাভাস্ক্রিপ্টে এই কনসেপ্টটি প্রোটোটাইপ-বেসড প্রোগ্রামিংয়েও ব্যবহার করা যায়।

// একটি সাধারণ উদাহরণ দেখা যাক:

// Encapsulation using Constructor Function
function Car(make, model, year) {
    // Private variables
    let _make = make;
    let _model = model;
    let _year = year;

    // Public methods to access private variables
    this.getMake = function() {
        return _make;
    };

    this.getModel = function() {
        return _model;
    };

    this.getYear = function() {
        return _year;
    };

    // Public method to update private variable
    this.setYear = function(newYear) {
        _year = newYear;
    };
}

// Create a new Car object
let myCar = new Car('Toyota', 'Camry', 2020);

// Accessing properties using public methods
console.log(myCar.getMake()); // Output: Toyota
console.log(myCar.getModel()); // Output: Camry
console.log(myCar.getYear()); // Output: 2020

// Updating a property using public method
myCar.setYear(2021);
console.log(myCar.getYear()); // Output: 2021


// উপরের উদাহরণে, একটি Car কনস্ট্রাক্টর ফাংশন তৈরি করা হয়েছে যা কোনও বাহ্যিক ফাংশন থেকে সরাসরি অ্যাক্সেস করা যায় না। এই ফাংশনের ভেতরে তিনটি গোপন ভেরিয়েবল _make, _model, এবং _year ডিফাইন করা হয়েছে। এই গোপন ভেরিয়েবলগুলির মান প্রাইভেট হিসেবে সংরক্ষণ করা হয়েছে। এছাড়াও, বাহ্যিক মেথড getMake(), getModel(), getYear(), এবং setYear() তৈরি করা হয়েছে যা প্রাইভেট ভেরিয়েবলগুলির মান প্রকাশ এবং আপডেট করার জন্য ব্যবহার করা হয়েছে। এই মেথডগুলি ব্যবহার করে ক্লায়েন্ট কোড ক্লাসের মেথড এবং প্রোপার্টির সাথে অন্তর্ভুক্ত নেই, তারা শুধুমাত্র পাবলিক মেথড দ্বারা অ্যাক্সেস করা যায়। এই সব মেথড এনক্যাপসুলেশনের একটি উদাহরণ।