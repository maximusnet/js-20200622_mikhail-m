/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
//Вариант так себе - кривой, в комента через eval
export     function createGetter(path) {
  const patharr = path.split(`.`);
  return (obj) =>{
    if (Object.keys(obj).length === 0) return;
    return  patharr.reduce((acc,elem)=>{
        if(acc!==undefined){

          return acc[elem];
        }
        else
        {

          return elem;
        }
      }
      ,obj);
  }
};
