$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseInt($('#hours').val());
        var rate = parseInt($('#rate').val().substring(1)); // Remove '$' and parse as integer
        if (!isNaN(hours) && hours > 0) {
            var total = hours * rate;
            $('#total').val('$' + total);
        } else {
            alert('Please enter a valid positive number of hours.');
        }
    });
});
