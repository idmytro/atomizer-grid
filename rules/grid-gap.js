module.exports = [
    {
        type: 'pattern',
        id: 'grid-column-gap',
        name: 'grid-column-gap',
        matcher: 'Gcg',
        allowParamToValue: true,
        styles: {
            'grid-column-gap': '$0',
        }
    },
    {
        type: 'pattern',
        id: 'grid-row-gap',
        name: 'grid-row-gap',
        matcher: 'Grg',
        allowParamToValue: true,
        styles: {
            'grid-row-gap': '$0',
        },
    },
    {
        type: 'pattern',
        id: 'grid-gap',
        name: 'grid-gap',
        matcher: 'Gg',
        allowParamToValue: true,
        styles: {
            'grid-gap': '$0 $1',
        }
    }
];