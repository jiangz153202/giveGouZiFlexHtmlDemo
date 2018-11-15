let obj = { "r" : 1 ,"g":10,"b":22};
let action = { "type":"r", "value":10}
console.log('更改前',JSON.stringify(obj));
for (const key in obj) {
    if (obj.hasOwnProperty(action.type)) {
        obj[action.type] = action.value
    }
}
console.log('更改后',JSON.stringify(obj));

