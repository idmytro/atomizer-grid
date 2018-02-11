module.exports = [
    {
        type: 'pattern',
        id: 'grid-auto-flow',
        name: 'grid-auto-flow',
        matcher: 'Gaf',
        allowParamToValue: true,
        styles: {
            'grid-auto-flow': '$0',
        },
        arguments: [{
            'a': 'auto',
            'r': 'row',
            'c': 'column',
            'd': 'dense',
            'rd': 'row dense',
            'cd': 'column dense',
        }]
    },
];