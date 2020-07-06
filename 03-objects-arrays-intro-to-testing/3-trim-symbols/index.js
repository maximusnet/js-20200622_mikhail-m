/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size=1111) {
  const initValuel=0;
  let stringSum = "";
  const objSymbol={};

  if(string){
    string.split("").map((elem)=>{
      if(elem in objSymbol) {objSymbol[elem] +=1;}
      else {objSymbol[elem]=1;}
      if(objSymbol[elem]<=size){
        return stringSum+=elem;
      }
      else{
        return stringSum+="";
      }
    },initValuel);
    return stringSum;
  }
  else return ""
}
