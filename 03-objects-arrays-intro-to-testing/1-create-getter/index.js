/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

//Вариант так себе - кривой, в комента через eval
export function createGetter(path) {
  let patharr = path.split("."); //путь
  let fooGetter = function (obj){
    if (Object.keys(obj).length){ //пустой или нет
    switch (patharr.length){ выбираем по пути
      case 1 :
        return obj[patharr[0]];
      case 2 :
        return obj[patharr[0]][patharr[1]];
      case 3 :
        return obj[patharr[0]][patharr[1]][patharr[2]];
    }}
  };
  return fooGetter;
}
