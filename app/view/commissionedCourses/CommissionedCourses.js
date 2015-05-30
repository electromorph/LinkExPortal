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
    frame: false,
    header: false,
    height: 250,
    width: 800,
    title: 'Commissioned courses',
    iconCls: 'icon-user',
    bind: {
        store: '{commissionedcourses}'/*,
        selection: '{selectedApplicationView}'*/
    },
    bubbleEvents: [ 'RowClick' ],
    /*listeners: [
        {
            rowdblClick: function(grid, record, tr, rowIndex, e, eOpts) {
                //var rec = grid.getStore().getAt(rowIndex);
                LinkExPortal.global.Vars.courseID = { value: record.get('CourseID'), present: true};
                alert(LinkExPortal.global.Vars.courseID.value);
                this.fireEvent('RowClick', LinkExPortal.global.Vars.courseID);
            }
        }
    ],*/
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
            bubbleEvents: [ 'RowClick' ],
            items: [{
                icon: 'app/images/add.png',
                tooltip: 'Apply for this course',
                bubbleEvents: [ 'click' ],
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    LinkExPortal.global.Vars.courseID = { value: rec.get('CourseID'), present: true};
                    this.fireEvent('RowClick', LinkExPortal.global.Vars.courseID);
                }
            }]
        }
    ]
});
