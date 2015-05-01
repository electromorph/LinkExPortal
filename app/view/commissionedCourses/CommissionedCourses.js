Ext.define("LinkExPortal.view.commissionedCourses.CommissionedCourses",{
    extend: "Ext.grid.Panel",
    requires: [
        'LinkExPortal.view.commissionedCourses.CommissionedCoursesController',
        'LinkExPortal.view.commissionedCourses.CommissionedCoursesModel'
    ],
    alias: 'widget.commissionedcourses',
    controller: "commissionedcourses-commissionedcourses",
    viewModel: {
        type: "commissionedcourses-commissionedcourses"
    },
    frame: true,
    title: 'Commissioned courses',
    iconCls: 'icon-user',
    bind: {
        store: '{commissionedcourses}'/*,
        selection: '{selectedApplicationView}'*/
    },
    bubbleEvents: [ 'click' ],
    height: 250,
    width: 600,
    scrollable: true,
    columns: [
        {
            text     : 'Course ID',
            flex     : 1,
            sortable : true,
            dataIndex: 'CourseID'
        },{
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
        },
        {
            xtype:'actioncolumn',
            width:50,
            bubbleEvents: [ 'click' ],
            items: [{
                icon: 'app/images/information.png',  // Use a URL in the icon config
                tooltip: 'View details',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('CourseName'));
                }
            },{
                icon: 'app/images/add.png',
                tooltip: 'Apply for this course',
                bubbleEvents: [ 'click' ],
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    LinkExPortal.global.Vars.courseID = { value: rec.get('CourseID'), present: true};
                    this.fireEvent('click');
                }
            }]
        }
    ]
});
