const objFlattener = (obj, prefix, currentObj) => {
    
    prefix = prefix || [];
    currentObj = currentObj || {};
    if (obj === null) {
        return {};
    }
      // null is also an object
    if (typeof (obj) === "object" && obj !== null) {
        Object.keys(obj).forEach(key => {
            objFlattener(obj[key], prefix.concat(key), currentObj);
        });
    } else {
        currentObj[prefix.join(".")] = obj;
    }
    return currentObj;
};

module.exports = objFlattener;
