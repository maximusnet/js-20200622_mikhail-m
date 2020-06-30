/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  return [...arr].sort((a,b)=>{
    //Обычная сортировка
    if(param==="asc"){
      return a.localeCompare(b, 'ru', { sensitivity: 'case',caseFirst : "upper" })
    }
    //Обратная вручную
    if(a.localeCompare(b, 'ru')>0) return -1;
    else return 1


  });

}
