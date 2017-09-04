
// // 2) Клонирование объекта. Реализовать функцию, которая выполняет поверхностное или полное клонирование объекта
// // (под полным клонированием понимается такое клонирование,
// // когда все свойста объекта тоже клонируются в соответствующие свойства нового объекта,
// // под поверхностным - клонирование только базового объекта, тогда как все его свойста просто переносятся в новый объект)
//


var dog = {
    name: 'varg',
    doBark: function(){
        console.log('bow-wow');
    },
    dogHabit: {
        barkingTime: 23,
        mode: 'active'
    }
};


/**
 * хуй знает какой js doc
 *
 * @param obj
 * @returns {{}}
 */
function deepCloning(obj){
    var cloneObject = {};
    for (var prop in obj){
        var innerObject = {};
        var cloneObjectProperty = obj[prop];
        if (typeof cloneObjectProperty === "object"){
            for (var key in cloneObjectProperty){
                innerObject[key] = cloneObjectProperty[key];
            }
        }
        else{
            innerObject = cloneObjectProperty;
        }
        cloneObject[prop] = innerObject;
    }
    return cloneObject;
}

deepCloning(dog);





