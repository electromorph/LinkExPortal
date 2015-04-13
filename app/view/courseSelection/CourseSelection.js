Ext.define("LinkExPortal.view.courseSelection.CourseSelection",{
    extend: "Ext.grid.Panel",
    alias: 'widget.courseSelection',
    requires: [
        'LinkExPortal.view.courseSelection.CourseSelectionController',
        'LinkExPortal.view.courseSelection.CourseSelectionModel'
    ],
    controller: "courseselection-courseselection",
    viewModel: {
        type: "courseselection-courseselection"
    },

    html: "Hello, World!!"
});
