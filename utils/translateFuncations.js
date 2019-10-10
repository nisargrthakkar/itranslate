// retun Key of object value match
export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key].toLowerCase() === value.toLowerCase());
}

// Return string based on input and search Obj and result Obj
export const translate = (value, searchLngObj, resultLngobj) => {
    const searchText = value.trim().split(' ');
    let resultString = ''
    for (let index = 0; index < searchText.length; index++) {
        const searchkey = getKeyByValue(searchLngObj, searchText[index]);
        resultString += searchkey && resultLngobj[searchkey] ? resultLngobj[searchkey] : searchText[index];
        resultString += index < searchText.length - 1 ? ' ' : '';
    }
    return resultString;
}

