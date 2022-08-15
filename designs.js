// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function makeGrid(ev) {
    ev.preventDefault();
    let row = $('#inputHeight').val();
    let column = $('#inputWidth').val();
    $('tr').remove();
    
    // Your code goes here!
    for (let i = 1; i <= row; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <= column; j++) {
            $('#table' + i).append('<td></td>');
            $('td').attr("class", 'cells');
        }
    }

    // Add color with click event
    $('.cells').click(function cellColor(event) {
        let color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
        
    });
})


