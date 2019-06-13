const objectToMysqlSet = (obj) => {
    const entries = Object.entries(obj);

    let set = '';

    for (const [key, value] of entries) {
        if (typeof value === 'string')
        set = set.concat(`${key}="${value}", `);
        else
        set = set.concat(`${key}=${value}, `);
    }

    set = set.slice(0, -2);
    return set;
};

module.exports = objectToMysqlSet;
