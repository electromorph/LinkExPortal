Ext.define("LinkExPortal.view.applicationForm.ApplicationForm",{
    extend: "Ext.form.Panel",
    requires: [
        'LinkExPortal.view.applicationForm.ApplicationFormController',
        'LinkExPortal.view.applicationForm.ApplicationFormModel',
        'LinkExPortal.view.qualificationsGrid.QualificationsGrid',
        'LinkExPortal.view.experienceGrid.ExperienceGrid',
        'LinkExPortal.view.referencesGrid.ReferencesGrid',
        'LinkExPortal.view.fromTrust.FromTrust'
    ],
    alias: 'widget.applicationForm',
    controller: "applicationform-applicationform",
    viewModel: {
        type: "applicationform-applicationform"
    },
    bind: {
        title: 'You are applying for the following course: {CourseName}'
    },
    fieldDefaults: {
        msgTarget: 'side',
        autoFitErrors: false
    },
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:15px',
        autoScroll: true
    },
    listeners: {
        focus: 'onGotFocus'
    },
    layout: {
        type: 'card', //'accordion',
        titleCollapse: false
    },
    store: 'applicationForm',
    items: [{
        title: 'Select Sponsored or Self-funded',
        layout:{
            type: 'vbox'
            //align: 'center'
        },
        items: [{
            xtype: 'button',
            width: 200,
            height: 100,
            text: 'A health trust is funding my study',
            handler: 'onTrustFundedClicked',
            //ui: 'round',
            flex: 1,
            margin: '40px 40px 0 40px'
        },{
            xtype: 'button',
            text: 'I will fund my own study',
            width: 200,
            height:100,
            handler: 'onSelfFundingClicked',
            //ui: 'round',
            flex: 1,
            margin: '40px 40px 0 40px'
        }]
    },{
        title: 'Choose sponsor',
        items: [{
                xtype: 'fromtrust'
        }],
        bbar: {
            items: [{
                xtype: 'button',
                text: 'Back',
                listeners: {
                    click: 'onBackOneWithoutSaving'
                }
            },{
                xtype: 'button',
                text: 'Continue',
                listeners: {
                    click: 'onSelectSponsorClicked'
                }
            },{
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                listeners: {
                    click: 'onSubmit'
                }
            }]
        }
    },{
        title: 'Choose commissioned course',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'commissionedcourses'
        }],
        listeners: {
            activate: 'onActivateCommissionedCourses',
            RowClick: 'onRowClick'
        },
        bbar: {
            items: [{
                xtype: 'button',
                text: 'Back',
                listeners: {
                    click: 'onBackOneWithoutSaving'
                }
            },{
                xtype: 'button',
                text: 'Save and continue',
                listeners: {
                    click: 'onCommissionedCourseClicked'
                }
            },{
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                listeners: {
                    click: 'onSubmit'
                }
            }]
        }
    },{
        title: 'Search for course',
        items: [{
            xtype: 'searchcourses'
        }],
        bbar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackFromSearchCoursesClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Continue',
                    listeners: {
                        click: 'onTrustFundedClicked'  //this method moves forward one
                    }
                },{
                    xtype: 'button',
                    text: 'Submit',
                    formBind: true,
                    listeners: {
                        click: 'onSubmit'
                    }
                }
            ]
        }
    },{
        title: 'Personal Details',
        xtype: 'form',
        items: [{
            xtype: 'combobox',
            id: 'fldTitleID',
            fieldLabel: 'Title',
            queryMode: 'local',
            editable: false,
            flex: 1,
            allowBlank: false,
            forceSelection: true,
            displayField: 'Description',
            valueField: 'ListItemID',
            name: 'Title',
            bind: {
                store: '{titleList}',
                value: '{currentRecord.TitleID}'
            }
        },{
            xtype: 'textfield',
            id: 'fldFirstname',
            name: 'Forename',
            flex: 2,
            fieldLabel: 'Forename(s)',
            allowBlank: false,
            bind: {
                value: '{currentRecord.Firstname}'
            }
        },{
            xtype: 'textfield',
            id: 'fldLastname',
            flex: 2,
            name: 'Surname',
            fieldLabel: 'Surname',
            allowBlank: false,
            bind: {
                value: '{currentRecord.Lastname}'
            }
        },{
            xtype: 'textfield',
            id: 'fldEmail',
            name: 'Email',
            fieldLabel: 'Email',
            allowBlank: false,
            bind: {
                value: '{currentRecord.Email}'
            }
        },{
            xtype: 'textfield',
            id: 'fldConfirmEmail',
            vtype: 'email',
            initialEmailField: 'fldEmail',
            name: 'ConfirmEmail',
            fieldLabel: 'Confirm Email',
            allowBlank: false
        }],
        bbar: {
            items: [{
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackFromPersonalInfoClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Save and continue',
                    formBind: true,
                    listeners: {
                        click: 'onSaveClicked'
                    }
                }
            ]
        }
    },{
        title: 'Select Course Session',
        autoScroll: true,
        listeners: {
            activate: 'onActivateCourseSessionCard'
        },
        items: [{
            xtype: 'gridpanel',
            title: 'Course Sessions',
            scrollable: true,
            bubbleEvents: [
                'select'
            ],
            listeners: {
                select: 'onSelectCourseSession',
                activate: 'loadCourseSessions'
            },
            bind: {
                store: '{courseSessionList}',
                selection: '{selectedcoursesession}'
            },
            columns: [
                { text: 'Description',  dataIndex: 'SessionDescription', flex: 2 },
                { text: 'StartDate', dataIndex: 'StartDate' },
                { text: 'Status', dataIndex: 'Status' }
            ]
        }],
        bbar: {
            items: [{
                xtype: 'button',
                text: 'Back',
                listeners: {
                    click: 'onBackClicked'
                }
            },{
                xtype: 'button',
                text: 'Save and continue',
                listeners: {
                    click: 'onSaveClicked'
                }
            },{
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                listeners: {
                    click: 'onSubmit'
                }
            }]}
        },{
            bind: {
                title: 'Personal Information (Current application - {currentRecord.CourseSessionText})'
            },
            items: [{
                layout: {
                    type: 'hbox',
                    align: 'left'
                },
                items: [{
                    xtype: 'label',
                    margin: '0 0 0 10',
                    bind: {
                        text: 'Have you studied at {currentRecord.HEIText} before?'
                    }
                },{
                    xtype: 'checkbox',
                    id: 'fldHEITextCheckbox',
                    bind: {
                        value: '{currentRecord.StudedAtHEIBefore}'
                    }
                }]
            },{
                xtype: 'textfield',
                id: 'fldStudentID',
                name: 'StudentID',
                fieldLabel: 'What was your student ID?',
                bind: {
                    value: '{currentRecord.PreviousStudentIDAtHEI}',
                    visible: '{currentRecord.StudedAtHEIBefore}'
                }
            }],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },{
            bind: {
                title: 'Personal Information (Current application - {currentRecord.CourseSessionText})'
            },
            items: [
                ,
                {
                    xtype: 'textfield',
                    id: 'fldMobileNumber',
                    name: 'Mobile',
                    fieldLabel: 'Mobile',
                    bind: {
                        value: '{currentRecord.MobileNumber}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldPreviousSurname',
                    name: 'PreviousSurname',
                    fieldLabel: 'Previous Surname',
                    bind: {
                        value: '{currentRecord.PreviousSurname}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldKnownAs',
                    name: 'KnownAs',
                    fieldLabel: 'Known as',
                    bind: {
                        value: '{currentRecord.KnownAs}'
                    }
                },
                {
                    xtype: 'datefield',
                    id: 'fldDOB',
                    anchor: '100%',
                    fieldLabel: 'DOB',
                    allowBlank: false,
                    name: 'DOB',
                    format: 'd m Y',
                    maxValue: new Date(),  //Today or earlier.
                    submitFormat: 'd m Y',
                    bind: {
                        value: '{currentRecord.DOB}'
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },{
            bind: {
                title: 'Other information (Current application - {currentRecord.CourseSessionText})'
            },
            items: [
                {
                    xtype: 'textfield',
                    id: 'fldNationality',
                    allowBlank: false,
                    name: 'Nationality',
                    fieldLabel: 'Nationality',
                    bind: {
                        value: '{currentRecord.Nationality}'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldCountryOfBirthID',
                    editable: false,
                    fieldLabel: 'Country of Birth',
                    queryMode: 'local',
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'CountryOfBirth',
                    bind: {
                        store: '{countryList}',
                        value: '{currentRecord.CountryOfBirthID}'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldGenderID',
                    editable: false,
                    fieldLabel: 'Gender',
                    queryMode: 'local',
                    forceSelection: true,
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Gender',
                    bind: {
                        store: '{gendersList}',
                        value: '{currentRecord.GenderID}'
                    }
                },
                {
                    xtype: 'label',
                    id: 'lblEthnicity',
                    text: 'Please note that ethnicity information is required for equal opportunities monitoring only',
                    style: {
                        'font-style': 'italic'
                    }
                },
                {
                    xtype: 'combobox',
                    id: 'fldEthnicityID',
                    editable: false,
                    fieldLabel: 'Ethnicity',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    name: 'Ethnicity',
                    forceSelection: true,
                    bind: {
                        store: '{ethnicityList}',
                        value: '{currentRecord.EthnicityID}'
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        formBind: true,
                        text: 'Submit',
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },
        {
            bind: {
                title: 'Professional Body Details (Current application - {currentRecord.CourseSessionText})'
            },
            items: [
                {
                    xtype: 'combobox',
                    id: 'fldProfessionalBodyID',
                    editable: false,
                    fieldLabel: 'Professional Body',
                    queryMode: 'local',
                    displayField: 'Description',
                    valueField: 'ListItemID',
                    forceSelection: true,
                    allowBlank: true,
                    name: 'ProfessionalBody',
                    bind: {
                        store: '{professionalBodyList}',
                        value: '{currentRecord.ProfessionalBodyID}'
                    }
                },
                {
                    xtype: 'textfield',
                    id: 'fldMembershipNumber',
                    name: 'MembershipNumber',
                    fieldLabel: 'Membership Number',
                    allowBlank: true,
                    bind: {
                        value: '{currentRecord.MembershipNumber}',
                        hidden: '{!currentRecord.ProfessionalBodyID}'
                    }
                },
                {
                    xtype: 'datefield',
                    id: 'fldMembershipExpiry',
                    anchor: '100%',
                    fieldLabel: 'Expiry Date',
                    name: 'MembershipExpiry',
                    format: 'd/m/Y',
                    minValue: new Date(),  //Today or later.
                    bind: {
                        value: '{currentRecord.MembershipExpiry}',
                        hidden: '{!currentRecord.ProfessionalBodyID}'
                    }
                }
            ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
        },
        {
            bind: {
                title: 'Home details (Current application - {currentRecord.CourseSessionText})'
            },
            items: [
            {
                xtype: 'textfield',
                id: 'fldHomeAddress1',
                name: 'HomeAddress1',
                fieldLabel: 'Address',
                bind: {
                    value: '{currentRecord.HomeAddress1}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomeAddress2',
                name: 'HomeAddress2',
                hideEmptyLabel: false,
                bind: {
                    value: '{currentRecord.HomeAddress2}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomeCity',
                name: 'HomeCity',
                fieldLabel: 'City',
                bind: {
                    value: '{currentRecord.HomeCity}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldHomePostCode',
                name: 'HomePostcode',
                fieldLabel: 'Postcode',
                bind: {
                    value: '{currentRecord.HomePostCode}'
                }
            },
            {
                xtype: 'combobox',
                id: 'fldHomeCountryID',
                fieldLabel: 'Country',
                editable: false,
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                name: 'HomeCountry',
                forceSelection: true,
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.HomeCountryID}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldTelephone',
                name: 'Telephone',
                fieldLabel: 'Telephone',
                bind: {
                    value: '{currentRecord.Telephone}'
                }
            }
        ],
        bbar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Save and continue',
                    listeners: {
                        click: 'onSaveClicked'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    formBind: true,
                    listeners: {
                        click: 'onSubmit'
                    }
                }
            ]
        }
    },
    {
        bind: {
            title: 'Work details (Current application - {currentRecord.CourseSessionText})'
        },
        items: [
            {
                xtype: 'textfield',
                id: 'fldWorkAddress1',
                name: 'WorkAddress1',
                fieldLabel: 'Address',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress1}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkAddress2',
                name: 'WorkAddress2',
                hideEmptyLabel: false,
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkAddress2}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkCity',
                name: 'WorkCity',
                fieldLabel: 'City',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkCity}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkPostcode',
                name: 'WorkPostcode',
                fieldLabel: 'Postcode',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkPostcode}'
                }
            },
            {
                xtype: 'combobox',
                id: 'fldWorkCountryID',
                fieldLabel: 'Country',
                editable: false,
                queryMode: 'local',
                displayField: 'Description',
                valueField: 'ListItemID',
                forceSelection: true,
                name: 'WorkCountry',
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.WorkCountryID}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWorkEmail',
                vtype: 'email',
                name: 'WorkEmail',
                fieldLabel: 'Email',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WorkEmail}'
                }
            },
            {
                xtype: 'textfield',
                id: 'fldWardDept',
                name: 'WardDept',
                fieldLabel: 'Ward/Dept',
                allowBlank: true,
                bind: {
                    value: '{currentRecord.WardDept}'
                }
            }
        ],
        bbar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Save and continue',
                    listeners: {
                        click: 'onSaveClicked'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    formBind: true,
                    listeners: {
                        click: 'onSubmit'
                    }
                }
            ]
        }
    },{
        bind: {
            title: 'Eligibility (Current application - {currentRecord.CourseSessionText})'
        },
        items: [
            {
                xtype: 'combobox',
                id: 'fldCountryOfResidenceID',
                fieldLabel: 'Country Of Residence',
                queryMode: 'local',
                editable: false,
                forceSelection: true,
                displayField: 'Description',
                valueField: 'ListItemID',
                name: 'CountryOfResidence',
                bind: {
                    store: '{countryList}',
                    value: '{currentRecord.CountryOfResidenceID}'
                }
            },
            //BEGINBAZOOKA!!
            {
                //title: 'Were you born in the European Union?'
                items: [{
                    layout: {
                        type: 'hbox',
                        align: 'left'
                    },
                    items: [{
                        xtype: 'label',
                        margin: '0 0 0 10',
                        bind: {
                            text: 'Were you born in the European Union?'
                        }
                    },{
                        xtype: 'checkbox',
                        id: 'fldBornInTheEU',
                        value: true,
                        bind: {
                            value: '{currentRecord.BornInTheEU}'
                        }
                    }]
                },{
                    xtype: 'panel',
                    bind: {
                        hidden: '{currentRecord.BornInTheEU}'
                    },
                    items: [{
                        layout: {
                            type: 'hbox',
                            align: 'left'
                        },
                        items: [{
                            xtype: 'label',
                            text: 'Have you been granted permanent residence in the EU / Indefinite leave to remain in the UK?',
                            forId: 'fldIsPermanentResident',
                            margin: '0 0 0 10'
                        },{
                            xtype: 'checkbox',
                            id: 'fldIsPermanentResident',
                            bind: {
                                value: '{currentRecord.IsPermanentResident}'
                            }
                        }]
                    },{
                        xtype: 'datefield',
                        id: 'fldDateOfFirstEntryToUK',
                        anchor: '100%',
                        fieldLabel: 'Date of First Entry to UK',
                        name: 'DateOfFirstEntryToUK',
                        format: 'd/m/Y',
                        maxValue: new Date(),  //Today or earlier.
                        bind: {
                            value: '{currentRecord.DateOfFirstEntryToUK}',
                            hidden: '{!currentRecord.IsPermanentResident}'
                        }
                    },{
                        xtype: 'datefield',
                        id: 'fldDateOfGrantedResidency',
                        anchor: '100%',
                        fieldLabel: 'Date residency was granted',
                        name: 'DateOfGrantedResidency',
                        format: 'd/m/Y',
                        maxValue: new Date(),  //Today or earlier.
                        bind: {
                            value: '{currentRecord.DateOfGrantedResidency}',
                            hidden: '{!currentRecord.IsPermanentResident}'
                        }
                    }]
                }]
            }
        ],
        bbar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        click: 'onBackClicked'
                    }
                },{
                    xtype: 'button',
                    text: 'Save and continue',
                    listeners: {
                        click: 'onSaveClicked'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    formBind: true,
                    listeners: {
                        click: 'onSubmit'
                    }
                }
            ]
        }
     },{
        bind: {
            title: 'Qualifications (Current application - {currentRecord.CourseSessionText})'
        },
        listeners: {
            activate: 'onActivateQualificationsCard'
        },
        items: [
            {
                xtype: 'qualificationsgrid'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveQualificationsClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        bind: {
            title: 'Experience (Current application - {currentRecord.CourseSessionText})'
        },
        listeners: {
            activate: 'onActivateExperienceCard'
        },
        items: [
            {
                xtype: 'experiencegrid'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        bind: {
            title: 'References (Current application - {currentRecord.CourseSessionText})'
        },
        listeners: {
            activate: 'onActivateReferencesCard'
        },
        items: [
            {
                xtype: 'referencesgrid'
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },{
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        bind: {
            title: 'Personal Statement (Current application - {currentRecord.CourseSessionText})'
        },
        items: [
            {
                html: '<p><strong>Please give your reasons for choosing this particular programme of study.</strong></p><p><i>You may wish to alter this section according to which programme of study you are applying for.</i></p>'
            },
            {
                xtype: 'textarea',
                id: 'fldPersonalStatement',
                name: 'PersonalStatement',
                fieldLabel: 'Personal Statement',
                height: 200,
                allowBlank: true,
                emptyText: 'Personal statement...',
                bind: {
                    value: '{currentRecord.PersonalStatement}'
                }
            }
        ],
            bbar: {
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        listeners: {
                            click: 'onBackClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Save and continue',
                        listeners: {
                            click: 'onSaveClicked'
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Submit',
                        formBind: true,
                        listeners: {
                            click: 'onSubmit'
                        }
                    }
                ]
            }
    },{
        bind: {
            title: 'Declaration (Current application - {currentRecord.CourseSessionText})'
        },
        items: [
        {
            xtype: 'label',
            text: 'Because of the nature of the programmes for which you are applying, they are exempt from the provision of Section 4 (2) of the Rehabilitation of Offenders Act 1974. By virtue of the Rehabilitation of Offenders Act 1974 (Exemptions) Order 1975 and the Children Act 1989, applicants are, therefore, not entitled to withhold information about convictions which for other purposes are "spent" under the provisions of the Act.'
        },
        {
            xtype: 'label',
            text: 'As you are applying for a programme in health or social work which may involve children or vulnerable adults, you must tell us about any criminal convictions, including spent sentences and cautions (including verbal cautions) and bind-over orders.'
        },{
                xtype: 'fieldcontainer',
                fieldLabel: 'Please tick if you have any of the following:',
                //labelWidth: 100,
                defaultType: 'checkboxfield',
                items: [{
                    boxLabel: 'Criminal conviction?',
                    id: 'fldHasCriminalConviction',
                    bind: {
                        value: '{currentRecord.HasCriminalConviction}'
                    }
                },{
                    boxLabel: 'Caution (including verbal)?',
                    id: 'fldHasCaution',
                    bind: {
                        value: '{currentRecord.HasCaution}'
                    }
                },{
                    boxLabel: 'Spent criminal conviction?',
                    id: 'fldHasSpentCriminalConviction',
                    bind: {
                        value: '{currentRecord.HasSpentCriminalConviction}'
                    }
                }, {
                    boxLabel: 'Bind-over order',
                    id: 'fldHasBindOverOrder',
                    bind: {
                        value: '{currentRecord.HasBindOverOrder}'
                    }
                }/*,{
                    boxLabel  : 'I agree to the above declararation',
                    name      : 'ConfirmedAgreement',
                    inputValue: '1',
                    id        : 'fldConfirmedAgreement'
                }*/]
        },{
                xtype: 'panel',
                layout: {
                    type: 'hbox'
                },
                items: [{
                    xtype: 'label',
                    text: ''
                },{
                    xtype: 'checkbox',
                    boxLabel: 'Please tick if you have been through the Criminal Records Bureau Enhanced Disclosure process in relation to your current employment',
                    id: 'fldIsCRBChecked',
                    bind: {
                        value: '{currentRecord.IsCRBChecked}'
                    }
                }]
        },{
            xtype: 'datefield',
            id: 'fldCRBCheckDate',
            anchor: '100%',
            fieldLabel: 'Date of Check',
            name: 'CRBCheckDate',
            format: 'd/m/Y',
            maxValue: new Date(),  //Today or earlier.
            bind: {
                value: '{currentRecord.CRBCheckDate}',
                hidden: '{!currentRecord.IsCRBChecked}'
            }
        },{
            xtype: 'textfield',
            id: 'fldCRBCheckRefNo',
            name: 'CRBCheckRefNo',
            fieldLabel: 'CRB Reference No',
            allowBlank: true,
            bind: {
                value: '{currentRecord.CRBCheckRefNo}',
                hidden: '{!currentRecord.IsCRBChecked}'
            }
        },{
            xtype: 'checkbox',
            boxLabel  : 'I agree to the above declararation',
            validation: true,
            name      : 'ConfirmedAgreement',
            inputValue: '1',
            id        : 'fldConfirmedAgreement'
        }],
        bbar: {
            items: [{
                xtype: 'button',
                text: 'Back',
                listeners: {
                    click: 'onBackClicked'
                }
            },{
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                listeners: {
                    click: 'onSubmit'
                }
            }]
        }
    }]
});
