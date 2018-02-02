// Example https://github.com/acss-io/atomizer/blob/master/examples/example-config.js

const custom = {
    a: 'auto',
    g: 'grid',
    span_2: 'span 2'
};

const gridLineNames = [
    'col1-start',
    'col2-start',
    'col3-start',
    'col3-end',
    'row1-start',
    'row2-start',
    'row2-end',
];

const gridLineNamesObj = gridLineNames.reduce(function (acc, cur) {
    acc[cur] = cur;
    acc[`_${cur}_`] = `[${cur}]`; // _name_: '[name]'
    return acc;
}, {});

module.exports = {
    custom: Object.assign(
        custom,
        gridLineNamesObj
    )
};
