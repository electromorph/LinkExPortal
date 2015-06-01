
Ext.define("LinkExPortal.view.sponsorApplications.SponsorApplications",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.sponsorApplications.SponsorApplicationsController',
        'LinkExPortal.view.sponsorApplications.SponsorApplicationsModel',
        'LinkExPortal.view.submittedApplications.SubmittedApplications',
        'LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApproved',
        'LinkExPortal.view.applicationsPendingHEI.ApplicationsPendingHEI',
        'LinkExPortal.view.applicationsRejected.ApplicationsRejected'
    ],
    controller: "sponsorapplications-sponsorapplications",
    viewModel: {
        type: "sponsorapplications-sponsorapplications"
    },
    alias: 'widget.sponsorapplications',
    reference: 'applications',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'center',
            split: true,
            xtype: 'tabpanel',
            flex: 1,
            title: 'Course Applications',
            items:[{
                title: 'Applications',
                layout: {
                    type: 'fit'
                },
                items: [{
                    xtype: 'submittedapplications'
                }]
            },{
                title: 'HEI Pending',
                layout: {
                    type: 'fit'
                },
                items: [{
                    xtype: 'applicationspendinghei'
                }]
            },{
                title: 'HEI Approved',
                layout: {
                    type: 'fit'
                },
                items: [{
                    xtype: 'applicationsheiapproved'
                }]
            },{
                title: 'Rejected',
                layout: {
                    type: 'fit'
                },
                items: [{
                    xtype: 'applicationsrejected'
                }]
            }]
        },{
            region: 'east',
            split: true,
            flex: 1,
            xtype: 'panel',
            items: [{
                xtype: 'applicationsummary'
            }]
        }

    ]
});
