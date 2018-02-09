module.exports = [
    {
        type: 'pattern',
        id: ' grid-area',
        name: ' grid-area',
        matcher: 'Ga',
        allowParamToValue: true,
        styles: {
            // row-start/column-start/row-end/column-end
            'grid-area': '$0 / $1 / $2 / $3',
        }
    },
];