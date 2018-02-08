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
    },
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
    {
        type: 'pattern',
        id: ' grid-column-start',
        name: ' grid-column-start',
        matcher: 'Gcs',
        allowParamToValue: true,
        styles: {
            'grid-column-start': '$0',
        }
    },
    {
        type: 'pattern',
        id: ' grid-column-end',
        name: ' grid-column-end',
        matcher: 'Gce',
        allowParamToValue: true,
        styles: {
            'grid-column-end': '$0',
        }
    },
    {
        type: 'pattern',
        id: ' grid-row-start',
        name: ' grid-row-start',
        matcher: 'Grs',
        allowParamToValue: true,
        styles: {
            'grid-row-start': '$0',
        }
    },
    {
        type: 'pattern',
        id: ' grid-row-end',
        name: ' grid-row-end',
        matcher: 'Gre',
        allowParamToValue: true,
        styles: {
            'grid-row-end': '$0',
        }
    },
    {
        type: 'pattern',
        id: ' grid-column',
        name: ' grid-column',
        matcher: 'Gc',
        allowParamToValue: true,
        styles: {
            'grid-column': '$0 / $1',
        }
    },
    {
        type: 'pattern',
        id: ' grid-row',
        name: ' grid-row',
        matcher: 'Gr',
        allowParamToValue: true,
        styles: {
            'grid-row': '$0 / $1',
        }
    },
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
