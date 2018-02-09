var rules = [
    require('./rules/grid-gap'),

    require('./rules/grid-auto-'),

    require('./rules/grid-template-'),

    require('./rules/grid-template--repeat'),

    require('./rules/grid-'),

    require('./rules/grid-area'),
];

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

module.exports = flatten([rules]);
