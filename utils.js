const debounce = (func, delay = 1000 ) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId != null){
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

