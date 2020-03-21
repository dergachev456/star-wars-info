export const getId = (url) => {
    const array = url.split('/');
    return array[array.length - 2];
}

export const getEntity = (url) => {
    const array = url.split('/');
    return array[array.length - 3];
}

export const sortBy = (arr, param, orderToHight) => {
    let obj = [...arr];
    if (orderToHight === false) {
        obj.sort((a, b) => a[param] < b[param] ? 1 : -1);
    } else {
        obj.sort((a, b) => a[param] > b[param] ? 1 : -1);
    }
    return obj;
}

export const filterBy = (arr, param, value) => {
    const result = arr.filter(elem => {
        return elem[param].toLowerCase().includes(value.toLowerCase())
    })
    return result;
}

