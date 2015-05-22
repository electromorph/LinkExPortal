Ext.define("LinkExPortal.view.applicationAcceptance.ApplicationAcceptance",{
    extend: "Ext.window.Window",
    requires: [
        'LinkExPortal.view.applicationAcceptance.ApplicationAcceptanceController',
        'LinkExPortal.view.applicationAcceptance.ApplicationAcceptanceModel'
    ],
    alias: 'widget.applicationacceptance',
    controller: "applicationacceptance-applicationacceptance",
    title: 'Process Application',
    height: 400,
    width: 400,
    autoShow: true,
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px',
        autoScroll: true
    },
    layout: {
        type: 'card',
        titleCollapse: false
    },
    modal : true,
    viewModel: {
        type: "applicationacceptance-applicationacceptance"
    },
    store: 'submittedApplicationForms',
    items: [{
        title: 'Application Summary',
        xtype: 'panel',
        items: [{
                xtype: 'displayfield',
                id: 'fldName',
                name: 'Surname',
                fieldLabel: 'Name',
                bind: {
                    value: '{currentRecord.TitleText} {currentRecord.Firstname} {currentRecord.Lastname}'
                }
            },{
                xtype: 'displayfield',
                id: 'fldCourse',
                name: 'Course',
                fieldLabel: 'Course',
                bind: {
                    value: '{currentRecord.CourseCode} ({currentRecord.CourseText})'
                }
            },{
                xtype: 'displayfield',
                id: 'fldCourseSession',
                name: 'Session',
                fieldLabel: 'Session',
                bind: {
                    value: '{currentRecord.CourseSessionText}'
                }
            },{
                xtype: 'displayfield',
                id: 'fldInstitution',
                name: 'Institution',
                fieldLabel: 'Institution',
                bind: {
                    value: '{currentRecord.HEIText}'
                }
            },{
                xtype: 'displayfield',
                id: 'fldChargeNurse',
                name: 'ChargeNurse',
                fieldLabel: 'Charge Nurse',
                bind: {
                    value: '{currentRecord.ChargeNurse}'
                }
            },{
                xtype: 'displayfield',
                id: 'fldCode',
                name: 'Cost',
                fieldLabel: 'Cost',
                bind: {
                    value: '&pound;{currentRecord.Fee}'
                }
            }
        ],
        bbar: {
            items: [{
                xtype: 'button',
                text: '<< Back',
                disabled: true,
                formBind: true,
                listeners: {
                    click: 'backClicked'
                }
            },{
                xtype: 'button',
                text: 'Next >>',
                formBind: true,
                listeners: {
                    click: 'nextClicked'
                }
            },{
                xtype: 'tbfill'
            },{
                xtype: 'button',
                text: 'Close',
                listeners: {
                    click: 'closeClicked'
                }
            }]
        }
    },{
        title: 'Commission Information',
        xtype: 'panel',
        items: [{

        }],
        bbar: {
            items: [{
                xtype: 'button',
                text: '<< Back',
                formBind: true,
                listeners: {
                    click: 'backClicked'
                }
            },{
                xtype: 'button',
                text: 'Next >>',
                formBind: true,
                listeners: {
                    click: 'nextClicked'
                }
            },{
                xtype: 'tbfill'
            },{
                xtype: 'button',
                text: 'Close',
                listeners: {
                    click: 'closeClicked'
                }
            }]
        }
    },{
        title: 'Funding',
        xtype: 'panel',
        items: [{
            xtype: 'checkbox',
            fieldLabel: 'CPD Contract',
            id: 'CPDContract',
            bind: {
                value: '{currentRecord.HasTrustConfirmedCPDFunded}'
            }
        },{
            xtype: 'checkbox',
            fieldLabel: 'Invoice',
            id: 'Invoice',
            bind: {
                value: '{currentRecord.isAnInvoice}'
            }
        },{
            xtype: 'textfield',
            id: 'PONumber',
            disabled: true,
            fieldLabel: 'PO Number',
            bind: {
                value: '{currentRecord.PONumber}',
                disabled: '{!currentRecord.isAnInvoice}'
            }
        }],
        bbar: {
            items: [{
                xtype: 'button',
                text: '<< Back',
                formBind: true,
                listeners: {
                    click: 'backClicked'
                }
            },{
                xtype: 'button',
                text: 'Approve',
                formBind: true,
                listeners: {
                    click: 'approveClicked'
                }
            },{
                xtype: 'button',
                text: 'Decline',
                formBind: true,
                listeners: {
                    click: 'declineClicked'
                }
            },{
                xtype: 'tbfill'
            },{
                xtype: 'button',
                text: 'Close',
                listeners: {
                    click: 'closeClicked'
                }
            }]
        }
    }]
});
