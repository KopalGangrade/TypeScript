// const num:number = 10;
// console.warn(num)

// ANY type 

// let data: any = 2; try use this less.

// -------------------------------------UNKNOWN TYPE --------------------------------------------------------
// unknown - no idea of data type

// let info: any;
// info =20;
// info ="hello";

// let item: string;
// item = info

// let info: unknown;
// info =20;
// info ="hello";

// let item: string;
// if (typeof info ==="string"){
//     item = info;
// }


// unknown dose not allow to access varible as 
// unknown type se declare karte hain, to us variable me koi bhi value assign kar sakte hain, lekin us value ka type pata nahi hota.
// unknown type variables ko use karne se type safety maintain hoti hai
// lekin aapko pehle value ka type explicitly check karna hota hai.



// -----------------------never type --------------------------
// can use never or void / also can posible using try catch

function apiError(msg,code):never{
    throw {msg,code};
}
console.log(apiError("server side error",500));

