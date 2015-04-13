Ext.define("LinkExPortal.view.searchCourses.SearchCourses",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.searchCourses.SearchCoursesController',
        'LinkExPortal.view.searchCourses.SearchCoursesModel'
    ],
    alias: 'widget.searchCourses',
    controller: "searchcourses-searchcourses",
    viewModel: {
        type: "searchcourses-searchcourses"
    },
    title: 'Select a course',
    defaults: {
        bodyStyle: 'padding:15px'
    },
    layout: 'vbox',
    items: [
        {
            xtype: 'combobox',
            name: 'Academic year',
            fieldLabel: 'Academic year',
            queryMode: 'local',
            forceSelection: true,
            displayField: 'Description',
            valueField: 'ListItemID',
            bind: {
                store: '{academicYearsList}'
            }
        },
        {
            xtype: 'combobox',
            name: 'Institution',
            fieldLabel: 'Institution',
            allowBlank: true
        },
        {
            xtype: 'combobox',
            name: 'profession',
            fieldLabel: 'Profession',
            allowBlank: true
        },
        {
            layout: {
                type: 'hbox',
                align: 'left'
            },
            items: [
                {
                    xtype: 'label',
                    text: 'Full Time or Part Time?',
                    forId: 'IsFullTime',
                    margin: '0 0 0 10'
                },{
                    xtype: 'segmentedbutton',
                    bind: {
                        value: '{IsFullTime}'
                    },
                    items: [
                        {
                            name: 'isFullTime',
                            inputValue: 'true',
                            text: 'Full Time'
                        },
                        {
                            name: 'isPartTime',
                            inputValue: 'false',
                            text: 'Part Time'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'textfield',
            name: 'credits',
            fieldLabel: 'Credits',
            allowBlank: true
        },
        {
            xtype: 'textfield',
            name: 'keywords',
            fieldLabel: 'Keywords',
            allowBlank: true
        }

    ]
});
