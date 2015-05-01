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
                    xtype: 'radiogroup',
                    fieldLabel: 'Are you:',
                    bubbleEvents: ['change'],
                    columns: 2,
                    vertical: true,
                    defaults: {
                        name: 'fromTrust'
                    },
                    bind: {
                        value: '{fromTrustValue}'
                    },
                    items: [{
                        boxLabel: 'Funded (in full or partly) by an NHS trust?',
                        inputValue: false
                    },{
                        boxLabel: 'Completely self-funded?',
                        inputValue: true
                    }],
                    listeners: {
                        change: 'onClickedSelfFunded'
                    }
                },
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
                    hidden: true,
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
