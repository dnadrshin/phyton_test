var data = [1,10,11,12];

class Animal{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log('My name is '+this.name)
    }
}

let exportObj = {
    data: data,
    getNew: function(name){
        return new Animal(name);
    }
}

exports.data = data;
exports.getNew = function(name){
    return new Animal(name);
}
// exports.getAge = function(i){
//     if(i<data.length)return data[i];
//     else return 'error';
// }