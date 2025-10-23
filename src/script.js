$('#form1').on('click', function () {
    event.stopPropagation();
    $('#liveAlertPlaceholder').html('');
    let str = '';
    let res = '';
    let charactersAndNumbers = {
        numeric: '0123456789',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        lowercase: 'abcdefghijklmnopqrstuvwxyz', 
        symbols: '~!@#$%^&*<>' 
    }
    let count = parseInt($('#chCount').val());
    if (isNaN(count)){
        appendAlert(`Input error: ${$('#chCount').val()}. Enter a number`, 'danger');
    }
    if (count > 50) {
        appendAlert('Only <= 50 is possible', 'danger');
    };
    if (count < 1) {
        appendAlert('Only > 0 is possible', 'danger');
    };
    if (  !($('#uppercase').is(':checked') ||
            $('#lowercase').is(':checked') ||
            $('#numeric').is(':checked') ||
            $('#symbols').is(':checked') ) ) {
        appendAlert('Select at last one checkbox', 'danger');
    }
    if ($('#liveAlertPlaceholder').html() == '') {
        if ($('#numeric').is(':checked')) {
            str += charactersAndNumbers.numeric;
        }
        if ($('#uppercase').is(':checked')) {
            str += charactersAndNumbers.uppercase;
        }
        if ($('#lowercase').is(':checked')) {
            str += charactersAndNumbers.lowercase;
        }
        if ($('#symbols').is(':checked')) {
            str += charactersAndNumbers.symbols;
        }
        for (i = 0; i < count; i++) {
            res += str.charAt(random(str.length));
        }
        $('#basic-addon3').text(res);
    }
})

function appendAlert(message, type) {
    $('#liveAlertPlaceholder').append($('<div>')
        .append(`<div class="alert alert-${type} alert-dismissible" role="alert">
                    <div>${message}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`));
}

//Функция для случайного выбора значений (не включая max)
function random(max) {
    return Math.floor(Math.random() * max)
}