Ext.define("LinkExPortal.view.fromTrust.FromTrust",{
    extend: "Ext.panel.Panel",
    requires: [
        'LinkExPortal.view.fromTrust.FromTrustController',
        'LinkExPortal.view.fromTrust.FromTrustModel'
    ],
    alias: 'widget.fromtrust',
    controller: "fromtrust-fromtrust",
    viewModel: {
        type: "fromtrust-fromtrust"
    },
    items:[
        {
            xtype: 'panel',
            bubbleEvents: ['select', 'change'],
            items: [
                {
                    xtype: 'combobox',
                    id: 'fldSponsor',
                    fieldLabel: 'Select Sponsoring Trust',
                    queryMode: 'local',
                    bubbleEvents: ['select'],
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'sponsorid',
                    name: 'sponsor',
                    bind: {
                        store: '{sponsorList}',
                        value: '{currentRecord.sponsorid}',
                        hidden: '{fromTrustValue.fromTrust}'
                    },
                    listeners: {
                        select: 'onTrustSelection'
                    }
                }
            ]
        }
    ]
});
