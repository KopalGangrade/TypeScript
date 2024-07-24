// let data:"abc" | 123 = 12;

function union(a:number | string , b:number | string , type:"as-number" | "as-string"){
    if (type === "as-number"){
        return (+a) + (+b);
    }else{
        return a.toString() + b.toString();
    }
    
}

console.log(union(10,20,"as-number"));
console.log(union("kopal","manu","as-string"));