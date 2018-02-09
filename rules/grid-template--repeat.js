module.exports = [
    {
        type: 'pattern',
        id: 'grid-template-columns-repeat',
        name: 'grid-template-columns-repeat',
        matcher: 'GtcRepeat',
        allowParamToValue: true,
        styles: {
            'grid-template-columns': 'repeat($0, $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11)',
        }
    },
    {
        type: 'pattern',
        id: 'grid-template-rows-repeat',
        name: 'grid-template-rows-repeat',
        matcher: 'GtrRepeat',
        allowParamToValue: true,
        styles: {
            'grid-template-rows': 'repeat($0, $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11)',
        }
    },
];