/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  //явный возврат undifiend для задачи
  if(!obj) { return; }
  //Проверка на пустой и разворот
  if (Object.keys(obj).length !==0 ) {
    return Object.fromEntries(Object.entries(obj).map((elem)=>
    {
      return elem.reverse();
    }));

  } else { return {}; }
}
