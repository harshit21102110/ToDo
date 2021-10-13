$("input:checkbox").change(function() {
    var someObj = {};
    someObj.fruitsGranted = [];
    someObj.fruitsDenied = [];

    $("input:checkbox").each(function() {
        if ($(this).is(":checked")) {
            someObj.fruitsGranted.push($(this).attr("id"));
        } else {
            someObj.fruitsDenied.push($(this).attr("id"));
        }
    });
});


