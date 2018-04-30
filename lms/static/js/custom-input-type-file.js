$(document).ready(function() {

    (function () {
        $(document).on('change', $('#browseBtn-bulk-csv'), function(e){
            var fileName = e.target.value.split( '\\' ).pop();
            var label = $('#bulk-exception-upload');
            if (fileName) {
                label.html(fileName);
            } else {
                label.html('');
            }
        });
    }());

});
