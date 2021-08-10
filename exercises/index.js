

const words = (str) => {
    return str.split(' ');
}
// console.log(words('takes one argument a string'));

const pad = (str, length) => {
    let beginning = ' ', ending = ' ';
    if(str.length > length){
        return str
    }else{
        let totalPadding = length - str.length;
        if(totalPadding % 2 === 0){
            beginning = beginning.repeat(totalPadding / 2);
            ending = ending.repeat(totalPadding / 2);            
        }else {
            beginning = beginning.repeat(Math.floor(totalPadding / 2))
            ending = ending.repeat(Math.floor(totalPadding / 2)+ 1) 
            console.log(ending)
        }
        
    }
    return `${beginning}${str}${ending}`

}
let m = { a : 1, b : 3}

const mapper = (obj) => {
    for(const [key, value] of Object.entries(obj)){
        return {
            key : `${key}`
        }
    }
}
const findKey = (obj, predicate) =>{
    for (const key in obj){
      let value = obj[key]
      let predicateReturnValue = predicate(value)
      if(predicateReturnValue){
        return key
      }
    }
    return undefined
  }
console.log(mapper(m))