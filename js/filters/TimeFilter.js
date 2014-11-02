app.filter('timeFilter', function() {
    return function(time) {
        var arr = time.substring(11, 16).split(':');
        var hour = '12';
        var designation = 'am';

        if (arr[0] >= 12) {
            designation = 'pm';
        }

        if (arr[0] > 12) {
            hour = (parseInt(arr[0]) - 12).toString();
        } else {
            hour = arr[0].toString();
        }

        return hour + ':' + arr[1] + ' ' + designation;
    };
});
