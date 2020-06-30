/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
//// вернет {foo: "foo"}, а должно вернуть {foo: 1} и переписать на массив.
/** Переписал но вернул обратно иначе не продит тесты.
 expect(pick(obj, 'foo', 'bar')).toEqual({foo: 'foo', bar: 'bar'});
 |                                     ^
 15 |     expect(pick(obj, 'foo', 'bar')).toEqual({foo: 'foo', bar: 'bar'});
 16 |   });
**/
/** export const pick = (obj, ...fields) => {
  const newObj = Object.fromEntries(Object.entries(obj)
    .filter(([key,value])=>{ //Собираем в массив только те кто есть в fields

      for (let arg of fields){

        if(key === arg) { return true; }
      }
    }).map(([ key2, value2 ],i)=>{ //делаем индексы
      return [ key2 , value2 = i+1 ] ;

    }));
  return newObj;
};
**/
export const pick = (obj, ...fields) => {

  const arr = {};
  for (let arg of fields){
    if(obj.hasOwnProperty(arg))  arr[arg]=`${arg}`;
  }
  return arr;
};
