module.exports = [
    {
        type: 'pattern',
        id: 'grid-auto-columns',
        name: 'grid-auto-columns',
        matcher: 'Gac',
        allowParamToValue: true,
        styles: {
            'grid-auto-columns': '$0',
        },
        arguments: [{
            'a': 'auto',
            'maxc': 'max-content',
            'minc': 'min-content',
        }]
    },
    {
        type: 'pattern',
        id: 'grid-auto-rows',
        name: 'grid-auto-rows',
        matcher: 'Gar',
        allowParamToValue: true,
        styles: {
            'grid-auto-rows': '$0',
        },
        arguments: [{
            'a': 'auto',
            'maxc': 'max-content',
            'minc': 'min-content',
        }]
    },
];