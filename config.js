// Example https://github.com/acss-io/atomizer/blob/master/examples/example-config.js

const custom = {
    a: 'auto',
    g: 'grid',
    span_2: 'span 2',
    span_3: 'span 3',
    span_4: 'span 4',
    col_2: 'col 2',
    col_3: 'col 3',
    col_4: 'col 4',
    row_2: 'row 2',
    row_3: 'row 3',
    row_4: 'row 4',
};

const gridLineNames = [
    'col',
    'row',
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
