/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
//Вариант так себе - кривой, в комента через eval
  export     function createGetter(path) {
  // debugger;
  return (obj) =>{
    if (Object.keys(obj).length === 0) return;
    return  path.split(`.`)
      .reduce((acc,elem)=>{
          if(acc!==undefined){
           // console.log("Block acc[elem]",acc[elem]);
            return acc[elem];
          }
          else
          {
           // console.log("Block elem",elem);
            return elem;
          }
        }
        ,obj);
  }
};
