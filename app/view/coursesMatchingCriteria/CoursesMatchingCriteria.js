Ext.define("LinkExPortal.view.coursesMatchingCriteria.CoursesMatchingCriteria",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.coursesMatchingCriteria.CoursesMatchingCriteriaController',
        'LinkExPortal.view.coursesMatchingCriteria.CoursesMatchingCriteriaModel'
    ],
    alias: 'widget.coursesmatchingcriteria',
    controller: "coursesmatchingcriteria-coursesmatchingcriteria",
    viewModel: {
        type: "coursesmatchingcriteria-coursesmatchingcriteria"
    },
    bind: {
        store: '{allCourses}'
    },
    height: 250,
    width: 800,
    scrollable: true,
    bubbleEvents: ['rowclick'],
    listeners : {
        rowclick: function(grid, rec, tr, rowIndex, e, eOpts) {
            LinkExPortal.global.Vars.courseID = { value: rec.get('CourseID'), present: true, name: rec.get('CourseName')};
        }
    },
    columns: [{
            text     : 'Course Code',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseCode'
        },{
            text     : 'Description',
            flex     : 2,
            sortable : true,
            dataIndex: 'CourseName'
        },{
            text     : 'Academic Year',
            flex     : 1,
            sortable : true,
            dataIndex: 'AcademicYear'
        },{
            text     : 'Institution',
            flex     : 1,
            sortable : true,
            dataIndex: 'HEIName'
        }
    ]
});
