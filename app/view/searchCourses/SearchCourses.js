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
    bubbleEvents: ['rowclick'],
    items: [
        {
            xtype: 'combobox',
            id: 'searchType',
            fieldLabel: 'Type',
            queryMode: 'local',
            editable: false,
            forceSelection: true,
            displayField: 'Description',
            valueField: 'CourseTypeID',
            name: 'searchType',
            listeners: {
                //select: 'onSearch'
            },
            bind: {
                store: '{courseTypeList}',
                value: '{currentRecord.CourseTypeID}'
            }
        },{
            xtype: 'combobox',
            id: 'searchAcademicYear',
            fieldLabel: 'Academic Year',
            queryMode: 'local',
            editable: false,
            forceSelection: true,
            displayField: 'Description',
            valueField: 'ListItemid',
            name: 'academicyear',
            listeners: {
                //select: 'onSearch'
            },
            bind: {
                store: '{academicYearsList}',
                value: '{currentRecord.AcademicYearID}'
            }
        },{
            xtype: 'combobox',
            id: 'searchInstitution',
            fieldLabel: 'Institution',
            queryMode: 'local',
            editable: false,
            forceSelection: true,
            displayField: 'Name',
            valueField: 'HEIID',
            name: 'institution',
            listeners: {
                //select: 'onSearch'
            },
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
            editable: false,
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
            fieldLabel: 'Keywords',
            id: 'searchKeywords',
            bind: {
                value: '{currentRecord.keywords}'
            }
        },{
            xtype: 'button',
            id: 'btnSearchCourses',
            text: 'Search',
            handler: 'onSearch'
        },{
            xtype: 'coursesmatchingcriteria',
            bubbleEvents: ['rowclick']
        }
    ]
});
