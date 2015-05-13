Ext.define('LinkExPortal.model.coursesession', {
    extend: 'Ext.data.Model',
    idProperty: 'CourseSessionID',
    fields: [
        { name: 'CourseSessionID', type: 'int' },
        { name: 'SessionDescription', type: 'string' },
        { name: 'CourseDescription', type: 'string'},
        { name: 'StartDate', type: 'date' },
        { name: 'Status', type: 'string' },
        { name: 'CourseID', type: 'int' },
        { name: 'Capacity', type: 'int' },
        { name: 'PlacesTaken', type: 'int' },
        { name: 'PlacesRemaining', type: 'int', persist:false,
            convert:function(v, record){
                var data = record.getData();
                return (data.Capacity + data.PlacesTaken);
            }
        }
    ],
    schema: {
        id: 'coursesessions',
        namespace: 'LinkExPortal.model',
        proxy: {
            type: 'rest',
            url: 'https://localhost:44306/api/CourseSessions',
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            noCache: false
        }
    }
});
