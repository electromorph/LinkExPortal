Ext.define('LinkExPortal.model.AcademicYearsList', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'ListItemId', type: 'int' },
        { name: 'Description', type: 'string' },
        { name: 'ListOrder', type: 'int' }
    ],
    schema: {
        id: 'academicYears',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            //url: 'http://linkexwebapi.azurewebsites.net/application/Refs/academicyears',
            url: LinkExPortal.global.Vars.defaultUrl + '/application/Refs/academicyears',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
