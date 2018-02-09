module.exports = [
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
];