Ext.define('LinkExPortal.model.CourseType', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'CourseTypeID', type: 'string' },
        { name: 'Description', type: 'string' }

    ],
    schema: {
        id: 'coursetype',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: LinkExPortal.global.Vars.defaultUrl + '/api/CourseTypes',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
