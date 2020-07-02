/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  let Sum = [];
  const initValuel=0;
  const objSymbol={};
  const size = 2;
  if(!arr) { return []; }

  arr.map((elem)=>{
    if(elem in objSymbol) {objSymbol[elem] +=1;}
    else {objSymbol[elem]=1;}
    if(objSymbol[elem]<size){
      return Sum.push(elem);
    }
    else{
      return Sum;
    }
  },initValuel);
 // console.log(Sum);
  return Sum;
}
