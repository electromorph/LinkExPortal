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
        store: '{commissionedcourses}'/*,
         selection: '{selectedApplicationView}'*/
    },
    height: 250,
    width: 600,
    scrollable: true,
    columns: [
        {
            text     : 'Course Code',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseCode'
        },{
            text     : 'Course',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseName'
        },{
            text     : 'Academic Year',
            flex     : 1,
            sortable : true,
            dataIndex: 'AcademicYearName'
        },
        {
            text     : 'Institution',
            flex     : 1,
            sortable : true,
            dataIndex: 'HEIName'
        }
    ]
});
