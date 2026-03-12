let user = {
    name: "Mohammed",
    age: 16,
    country: "Egypt",
    job: "Student"
};

console.log("User Information:");
console.log(user);

console.log("-------------------");

// عرض بيانات محددة
console.log("Name:", user.name);
console.log("Age:", user.age);

console.log("-------------------");

// تعديل العمر
user.age = 17;

console.log("Updated Age:");
console.log(user.age);

console.log("-------------------");

// إضافة خاصية جديدة
user.email = "mohammed@example.com";

console.log("After Adding Email:");
console.log(user);

console.log("-------------------");

// حذف خاصية
delete user.job;

console.log("After Deleting Job:");
console.log(user);

console.log("-------------------");

// البحث عن خاصية
let property = "country";

if(property in user){
    console.log("Property exists:", user[property]);
}else{
    console.log("Property not found");
}