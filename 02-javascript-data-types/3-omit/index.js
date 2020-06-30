/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const objectWithout = {...obj};
  for (let arg of fields){
    if(obj.hasOwnProperty(arg)){
      objectWithout[arg]=null; //Сначала обнуляем чтобы убрать ссылки и потом удаляем.
      delete objectWithout[arg];
    }

  }
  return objectWithout;
};
