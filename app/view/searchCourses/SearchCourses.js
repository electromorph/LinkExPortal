Ext.define("LinkExPortal.view.searchCourses.SearchCourses",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.searchCourses.SearchCoursesController',
        'LinkExPortal.view.searchCourses.SearchCoursesModel'
    ],
    alias: 'widget.searchcourses',
    controller: "searchcourses-searchcourses",
    viewModel: {
        type: "searchcourses-searchcourses"
    },
    items: [
        {
            xtype: 'combobox',
            id: 'searchType',
            fieldLabel: 'Type',
            queryMode: 'local',
            forceSelection: true,
            displayField: 'Description',
            valueField: 'CourseTypeID',
            name: 'searchType',
            bind: {
                store: '{courseTypeList}',
                value: '{currentRecord.CourseTypeID}'
            }
        },{
            xtype: 'combobox',
            id: 'searchAcademicYear',
            fieldLabel: 'Academic Year',
            queryMode: 'local',
            forceSelection: true,
            displayField: 'Description',
            valueField: 'listitemid',
            name: 'academicyear',
            bind: {
                store: '{academicYearsList}',
                value: '{currentRecord.academicyearid}'
            }
        },{
            xtype: 'combobox',
            id: 'searchInstitution',
            fieldLabel: 'Institution',
            queryMode: 'local',
            forceSelection: true,
            displayField: 'Name',
            valueField: 'HEIID',
            name: 'institution',
            bind: {
                store: '{HEIList}',
                value: '{currentRecord.HEIID}',
                hidden: '{!showHEIBox}'
            }
        },{
            xtype: 'combobox',
            id: 'searchFTPT',
            fieldLabel: 'FT/PT',
            queryMode: 'local',
            forceSelection: true,
            displayField: 'Description',
            valueField: 'ListItemID',
            name: 'FTPT',
            bind: {
                store: '{FTPTList}',
                value: '{currentRecord.FTPT}'
            }
        },{
            xtype: 'textfield',
            fieldLabel: 'keywords',
            id: 'searchKeywords'
        },
        {
            xtype: 'button',
            text: 'Search'
        }
    ]
});
