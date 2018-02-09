module.exports = [
    {
        type: 'pattern',
        id: 'grid-template-columns',
        name: 'grid-template-columns',
        matcher: 'Gtc',
        allowParamToValue: true,
        styles: {
            'grid-template-columns': '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11',
        }
    },
    {
        type: 'pattern',
        id: 'grid-template-rows',
        name: 'grid-template-rows',
        matcher: 'Gtr',
        allowParamToValue: true,
        styles: {
            'grid-template-rows': '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11',
        }
    },
];