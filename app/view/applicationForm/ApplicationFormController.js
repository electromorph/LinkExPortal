var active = 0;
Ext.define('LinkExPortal.view.applicationForm.ApplicationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.applicationform-applicationform',
    rowEditing: Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToEdit: 1
    }),
    init: function() {
        var myStore = this.getStore('applicationForm');
        if (LinkExPortal.global.Vars.applicationID.present) {
            myStore.on({ load: { fn: this.finishedLoading, scope: this, single: true } })
        }
        myStore.on({ write: { fn: this.storeWrite, scope:  this } });
        this.on({ gotRecord: { fn: this.onGotRecord, scope: this } });
        //this.createNewRecordIfRequired();
        //this.saveCurrentRecord();
        var applicationStore = Ext.StoreManager.lookup('allCourses');
        applicationStore.on({ load: { fn: this.getCourseNameFromCourseID, scope: this, single: true } });
        //Set the right application form page depending on params supplied.
        if (LinkExPortal.global.Vars.applicationID.value > 0) {
            active = 4;
            var appForm = this.getView();
            var layout = appForm.getLayout();
            layout.setActiveItem(active);
        } else {
            this.inferCourseIdIfCorrectParamsSupplied(
                LinkExPortal.global.Vars.HEIID.value,
                LinkExPortal.global.Vars.courseCode,
                LinkExPortal.global.Vars.academicYear,
                LinkExPortal.global.Vars.applicationID).then({
                    success: this.setRightCardOnInit(this),
                    failure: this.setRightCardOnInit(this)
                }).always(function () {
                }).done();
        }
        if (LinkExPortal.global.Vars.HEIID.value > 0) {
            this.updateHEIImage(LinkExPortal.global.Vars.HEIID.value, this);
        }
    },
    setRightCardOnInit: function(controller) {
        if (LinkExPortal.global.Vars.trustID.value > 0) {
            var appForm = controller.getView();
            var layout = appForm.getLayout();
            if (LinkExPortal.global.Vars.courseID.value > 0) {
                //We already have a trust & course - no need to select either.
                active = 4;
                layout.setActiveItem(active);
            } else {
                //We already have the trust - only select the course
                active = 2;
                layout.setActiveItem(active);
            }
        }
    },
    inferCourseIdIfCorrectParamsSupplied: function(HEIID, CourseCode, AcademicYear, ApplicationID) {
        var deferred = Ext.create('Deft.Deferred');
        var url = LinkExPortal.global.Vars.defaultUrl + '/application/courses/getcoursebyheiidandcoursecode?heiid=' + HEIID + "&coursecode=" + CourseCode + '&academicyear=' + AcademicYear;
        if (LinkExPortal.global.Vars.HEIID.present && LinkExPortal.global.Vars.courseCode != '' && LinkExPortal.global.Vars.academicYear != '') {
            Ext.Ajax.request({
                url: url,
                async: false,   //We want this to be synchronous - because its result governs which screen is rendered.
                method: 'GET',
                success: function (responseObject) {
                    var obj = Ext.decode(responseObject.responseText);
                    var courseID = obj.data.CourseID;
                    LinkExPortal.global.Vars.courseID.value = courseID;
                    LinkExPortal.global.Vars.courseID.present = true;
                    deferred.resolve(obj.data);
                },
                failure: function (responseObject) {
                    obj = Ext.decode(responseObject.responseText);
                    deferred.reject("Could not get session information");
                }
            });
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    },
    updateHEIImage: function(courseSessionId, controller) {
        var deferred = Ext.create('Deft.Deferred');
        Ext.Ajax.request({ url: LinkExPortal.global.Vars.defaultUrl + '/api/HEIs/' + courseSessionId,
            method: 'GET',
            success: function(responseObject) {
                var obj = Ext.decode(responseObject.responseText);
                if (obj) {
                    var image = Ext.getCmp('UniLogoImage');
                    if (image) {
                        image.setSrc(obj.LogoUrl);
                        image.update();
                    }
                }
                deferred.resolve(obj.data);
            },
            failure: function(responseObject) {
                deferred.reject("Could not get session information");
            }
        });
        return deferred.promise;
    },
    getCourseNameFromCourseID: function(store) {
        //Populate name if an ID exists but no name.
        if (LinkExPortal.global.Vars.courseID.present && LinkExPortal.global.Vars.courseID.name == '') {
            if (store) {
                var myRecord = store.findRecord('CourseID', LinkExPortal.global.Vars.courseID.value);
                if (myRecord) {
                    var data = myRecord.getData();
                    LinkExPortal.global.Vars.courseID.name = data.CourseName;
                    this.getViewModel().set('CourseName', LinkExPortal.global.Vars.courseID.name);
                }
            }
        }
    },
    createNewRecordIfRequired: function() {
        //Checks if an application id was supplied. If it was, then no need for a new record.
        //Then checks if a courseid is present - if so, then create the application form - if not, don't.
        //Create form record and add it to the store, then set it as the ViewModel's currentRecord.
        if (!LinkExPortal.global.Vars.applicationRecordExists) {
            var myStore = this.getStore('applicationForm');
            if (LinkExPortal.global.Vars.courseID.present) {
                var newRecord = LinkExPortal.model.CPDHealthApplicationForm.create();
                newRecord.data.Email = Ext.getCmp('fldEmail').getValue();
                newRecord.data.TitleID = Ext.getCmp('fldTitleID').getValue();
                newRecord.data.Firstname = Ext.getCmp('fldFirstname').getValue();
                newRecord.data.Lastname = Ext.getCmp('fldLastname').getValue();
                newRecord.data.PreviousSurname = Ext.getCmp('fldPreviousSurname').getValue();
                newRecord.data.PreviousSurname = Ext.getCmp('fldPreviousSurname').getValue();
                newRecord.data.MobileNumber = Ext.getCmp('fldMobileNumber').getValue();
                newRecord.data.KnownAs = Ext.getCmp('fldKnownAs').getValue();
                newRecord.data.DOB = Ext.getCmp('fldDOB').getValue();
                if (LinkExPortal.global.Vars.trustID.present) {
                    newRecord.data.SponsorID = LinkExPortal.global.Vars.trustID.value;
                }
                LinkExPortal.global.Vars.applicationRecordExists = true;
                //Create new record in temp table.
                myStore.add(newRecord);
                var newRecords = myStore.getNewRecords();
                if (newRecords.length > 0) {
                    var myViewModel = this.getViewModel();
                    if (myViewModel) {
                        newRecords[0].phantom = true;
                        newRecords[0].set('BornInTheEU', true);
                        myViewModel.set('currentRecord', newRecords[0]);
                    }
                }
            }
        }
    },
    //This is called from the store on load completion. It executes in a Store context, which is useless.
    //So we just use it to fire a new event that gets picked up by in controller context.
    finishedLoading: function(me, myViewModel, successful) {
        this.fireEvent('gotRecord');
    },
    storeWrite: function(me, operation) {
        var iRecord = operation.response.result.data;
        console.log(iRecord.id);
    },
    //This is the event we really want to run after the store has loaded.
    onGotRecord: function() {
        var myStore = this.getStore('applicationForm');
        if (myStore) {
            var myRecord = myStore.findRecord('CPDHealthApplicationFormTempID', LinkExPortal.global.Vars.applicationID.value);
            if (myRecord) {
                var myViewModel = this.getViewModel();
                if (myViewModel) {
                    myViewModel.set('currentRecord', myRecord);
                    LinkExPortal.global.Vars.applicationRecordExists = true;
                }
            }
            else {
                Ext.Msg.alert('Could not find the specified applicationid - this will be treated as a new application');
                LinkExPortal.global.Vars.applicationID = { value: -1, present: false};
            }
        }
    },
    onActivateQualificationsCard: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        if (qualificationsStore) {
            if (LinkExPortal.global.Vars.applicationID.value > 0) {
                qualificationsStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentqualifications/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                if (LinkExPortal.global.Vars.applicationID.present) {
                    qualificationsStore.on({
                        load: {
                            fn: this.changeQualificationsStoreProxy,
                            scope: this,
                            single: true
                        }
                    })
                }
                qualificationsStore.load();
            }
        }
    },
    changeQualificationsStoreProxy: function(storeid) {
        storeid.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentqualifications';
    },
    onActivateExperienceCard: function() {
        var experienceStore = this.getStore('studentExperience');
        if (experienceStore) {
            if (LinkExPortal.global.Vars.applicationID.value > 0) {
                experienceStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentexperiences/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                if (LinkExPortal.global.Vars.applicationID.present) {
                    experienceStore.on({
                        load: {
                            fn: this.changeExperienceStoreProxy,
                            scope: this,
                            single: true
                        }
                    })
                }
                experienceStore.load();
            }
        }
    },
    changeExperienceStoreProxy: function(storeid) {
        storeid.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentexperiences';
    },
    onActivateReferencesCard: function() {
        var referencesStore = this.getStore('studentReferences');
        if (referencesStore) {
            if (LinkExPortal.global.Vars.applicationID.value > 0) {
                referencesStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/studentreferences/unsubmittedforapplication/' + LinkExPortal.global.Vars.applicationID.value;
                if (LinkExPortal.global.Vars.applicationID.present) {
                    referencesStore.on({
                        load: {
                            fn: this.changeReferencesStoreProxy,
                            scope: this,
                            single: true
                        }
                    })
                }
                referencesStore.load();
            }
        }
    },
    changeReferencesStoreProxy: function(storeid) {
        storeid.proxy.url = LinkExPortal.global.Vars.defaultUrl + '/api/studentreferences';
    },
    onActivateCourseSessionCard: function() {
        var myViewModel = this.getViewModel();
        var currRecord, courseSessionId, courseID, data;
        /*if (myViewModel) {
            alert('got viewmodel');
            currRecord = myViewModel.get('currentRecord');
        }
        if (currRecord) {
            alert('got current record');
            data = currRecord.getData();
            if (data) {
                alert('got data');
                courseSessionId = data.CourseSessionID;
            }
        }*/
        var sessionListStore = this.getStore('courseSessionList');
        if (sessionListStore) {
            /*sessionListStore.addFilter({
                property: 'CourseID',
                value: LinkExPortal.global.Vars.courseID.value
            });*/
            sessionListStore.proxy.url = 'https://localhost:44306/coursesessions/getsessionsforcourse/' + LinkExPortal.global.Vars.courseID.value;
            sessionListStore.load();
        }
    },
    onSelectCourseSession: function(rowModel, record, index, eOpts) {
        var myViewModel = this.getViewModel();
        if (myViewModel) {
            var rec = myViewModel.get('currentRecord');
            var clickedSessionID = (record.get('CourseSessionID'));//.replace(/\D/g,'');
            rec.set('CourseSessionID', clickedSessionID);
            this.getCourseSessionText(clickedSessionID).then({
                success: function(courseSessionText) {
                    rec.set('CourseSessionText', courseSessionText.StrapLine);
                    rec.set('CourseText', courseSessionText.Course);
                    rec.set('HEIText', courseSessionText.HEI);
                    rec.set('SessionText', courseSessionText.SessionText);
                },
                failure: function(error) {
                }
            }).always(function() {
                // Do something whether call succeeded or failed
            }).done();
        }
    },
    getCourseSessionText: function(courseSessionId) {
        var deferred = Ext.create('Deft.Deferred');
        Ext.Ajax.request({
            url: 'https://localhost:44306/application/Refs/coursesessiontext/' + courseSessionId,
            method: 'GET',
            success: function(responseObject) {
                var obj = Ext.decode(responseObject.responseText);
                deferred.resolve(obj.data);
            },
            failure: function(responseObject) {
                var obj = Ext.decode(responseObject.responseText);
                //Ext.Msg.alert('Status', obj);
                deferred.reject("Could not get session information");
            }
        });
        return deferred.promise;
    },
    onActivateCommissionedCourses: function(card, eOpts) {
        var commissionedCoursesStore = this.getStore('commissionedcourses');
        commissionedCoursesStore.proxy.url = 'https://localhost:44306/application/courses/commissioned/' + LinkExPortal.global.Vars.trustID.value;
        commissionedCoursesStore.load();
    },
    onRowClick: function(button, record, tr, rowIndex, e, eOpts) {
        this.updateHEIImage(record.data.HEIID, this).then({
            success: this.move2Tabs(this, record),
            failure: function() {}
        }).always(function() {}).done();
    },
    move2Tabs: function(controller, record) {
        var courseID = record.getData().CourseID;
        LinkExPortal.global.Vars.courseID = { value: courseID, present: true }
        var appForm = controller.getView();
        var layout = appForm.getLayout();
        ++active;++active;
        layout.setActiveItem(active);
    },
    onTrustFundedClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },
    onBackFromSearchCoursesClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        active = 0;
        layout.setActiveItem(0);
    },
    onSelfFundingClicked: function() {
        LinkExPortal.global.Vars.trustID = {value: 0, present: true}
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;++active;++active;
        if (LinkExPortal.global.Vars.courseID.present) {
            ++active
        }
        layout.setActiveItem(active);
    },
    onCommissionedCourseClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;++active;
        layout.setActiveItem(active);
    },
    onSelectSponsorClicked: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        if (LinkExPortal.global.Vars.courseID.value > 0) {
            active = 4;
            layout.setActiveItem(4);
        } else {
            ++active;
            layout.setActiveItem(active);
        }
    },
    onBackOneWithoutSaving: function() {
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },
    saveCurrentRecord: function() {
        this.createNewRecordIfRequired();
        var myViewModel = this.getViewModel();
        var myRecord = myViewModel.get('currentRecord');
        if (myRecord) {
            myRecord.save();
            var applicationID = myRecord.getData().CPDHealthApplicationFormTempID;
            LinkExPortal.global.Vars.applicationID =  { value: applicationID, present: true };
        }
        else {
            Ext.Msg.alert('An error occurred whilst saving data');
        }
    },
    onSaveClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },
    onBackClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },
    onBackFromPersonalInfoClicked: function() {
        this.saveCurrentRecord();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        if (LinkExPortal.global.Vars.trustID.value > 0) {
            --active;
        }
        layout.setActiveItem(active);
    },
    onSaveQualificationsClicked: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        qualificationsStore.commitChanges();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        ++active;
        layout.setActiveItem(active);
    },
    onBackQualificationsClicked: function() {
        var qualificationsStore = this.getStore('studentQualifications');
        qualificationsStore.commitChanges();
        var appForm = this.getView();
        var layout = appForm.getLayout();
        --active;
        layout.setActiveItem(active);
    },
    loadCourseSessions: function() {
        var myStore = this.getStore('courseSessionList');
        if (myStore) {
            myStore.proxy.url = LinkExPortal.global.Vars.defaultUrl + 'api/CourseSessions/' + LinkExPortal.global.Vars.courseID.value;
            myStore.load();
        }
    },
    onSubmit: function() {
        //Save current record
        this.saveCurrentRecord();
        Ext.Ajax.request({
            url: 'https://localhost:44306/application/' + LinkExPortal.global.Vars.applicationID.value + '/submit',
            timeout: 30000,
            method: 'GET',
            //params: {param1:LinkExPortal.global.Vars.applicationID.value},
            success: function(responseObject) {
                var obj;
                if (responseObject.responseText != "") {
                    obj = Ext.decode(responseObject.responseText);
                } else {
                    obj = ""
                }
                if (obj.SubmittedApplicationId == -1) {
                    Ext.Msg.alert('Status', 'Your application could not be submitted because ' + obj.Information + '.');
                } else {
                    LinkExPortal.global.Vars.applicationFormSubmitted = true;
                    location.href = "/LinkExPortal/ApplicationSubmitted.html";
                }
            },
            failure: function(responseObject){
                Ext.Msg.alert('Status', "An error occurred whilst submitting your form. You may retrieve it by logging into the student portal at http://www.linkexstudentportal.com");
            }
        });
    }
});
