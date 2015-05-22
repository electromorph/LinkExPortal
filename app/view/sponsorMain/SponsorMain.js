Ext.define('LinkExPortal.view.sponsorMain.SponsorMain', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'LinkExPortal.view.sponsorMain.SponsorMainController',
        'LinkExPortal.view.sponsorMain.SponsorMainModel',
        'LinkExPortal.view.submittedApplications.SubmittedApplications',
        'LinkExPortal.view.applicationsHEIApproved.ApplicationsHEIApproved',
        'LinkExPortal.view.applicationsPendingHEI.ApplicationsPendingHEI',
        'LinkExPortal.view.applicationsRejected.ApplicationsRejected'
    ],
    alias: 'widget.sponsormain',
    controller: 'sponsormain-sponsormain',
    viewModel: {
        type: 'sponsormain-sponsormain'
    },
    layout: {
        type: 'border'
    },
    listeners: {
        select: 'onSelectApplication'
    },
    items: [{
        region: 'center',
        split: true,
        xtype: 'tabpanel',
        flex: 1,
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
    }]
});
