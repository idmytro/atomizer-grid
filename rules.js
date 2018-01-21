module.exports = [
    {
        type: 'pattern',
        id: 'grid-gap',
        name: 'grid-gap',
        matcher: 'Gg',
        allowParamToValue: true,
        styles: {
            'grid-gap': '$0',
        }
    },
    {
        type: 'pattern',
        id: 'grid-template-columns',
        name: 'grid-template-columns',
        matcher: 'Gtc',
        allowParamToValue: true,
        styles: {
            'grid-template-columns': '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11',
        }
    }
];