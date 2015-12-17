'use strict';

app.converter = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_converter
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_converter
(function(parent) {
    var converterModel = kendo.observable({
        fields: {
            result: '',
            kgs: '',
        },
        submit: function() {}
    });

    parent.set('converterModel', converterModel);
})(app.converter);

// START_CUSTOM_CODE_converterModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
var model = app.converter.converterModel;
model.set("submit", function() {
    var lbs = model.get("fields.kgs") * 2.2046;
    model.set("fields.result", lbs + " lbs");
});
// END_CUSTOM_CODE_converterModel