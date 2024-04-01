$(document).ready(function () {
    $('#summary').hide();
    $('#sbmt').click(function () {
        $('#summary').show()
        var item1 = parseInt($('#tv').val()) || 0;
        var item2 = parseInt($('#vcr').val()) || 0;
        var item3 = parseInt($('#remote').val()) || 0;
        var item4 = parseInt($('#cd').val()) || 0;
        var item5 = parseInt($('#tape').val()) || 0;
        var price1 = parseFloat($('#pTV').text());
        var price2 = parseFloat($('#pVCR').text());
        var price3 = parseFloat($('#premote').text());
        var price4 = parseFloat($('#pCD').text());
        var price5 = parseFloat($('#ptape').text());
        var result1 = item1 * price1;
        var result2 = item2 * price2;
        var result3 = item3 * price3;
        var result4 = item4 * price4;
        var result5 = item5 * price5;
        var subtotal = result1 + result2 + result3 + result4 + result5;
        var tax = subtotal * 0.0825;
        var total = tax + subtotal;

        
        $('#bills').empty();
        if (item1 > 0) {
            $('#bills').append('<tr><td>' + item1 + '</td><td>' + $('#itm1').text() + '</td><td>' + price1 + '</td><td>' + result1.toFixed(2) + '</td></tr>');

        }
        if (item2 > 0) {
            $('#bills').append('<tr><td>' + item2 + '</td><td>' + $('#itm2').text() + '</td><td>' + price2 + '</td><td>' + result2.toFixed(2) + '</td></tr>');

        }
        if (item3 > 0) {
            $('#bills').append('<tr><td>' + item3 + '</td><td>' + $('#itm3').text() + '</td><td>' + price3 + '</td><td>' + result3.toFixed(2) + '</td></tr>');

        }
        if (item4 > 0) {
            $('#bills').append('<tr><td>' + item4 + '</td><td>' + $('#itm4').text() + '</td><td>' + price4 + '</td><td>' + result4.toFixed(2) + '</td></tr>');

        }
        if (item5 > 0) {
            $('#bills').append('<tr><td>' + item5 + '</td><td>' + $('#itm5').text() + '</td><td>' + price5 + '</td><td>' + result5.toFixed(2) + '</td></tr>');


        }


        $('#bills').append('<tr><td></td><td></td><th>SUBTOTAL:</td><td>' + subtotal.toFixed(2) + '</td></tr>');
        $('#bills').append('<tr><td></td><td></td><th>TAX:</td><td>' + tax.toFixed(2) + '</td></tr>');
        $('#bills').append('<tr><td></td><td></td><th>TOTAL:</td><td>' + total.toFixed(2) + '</td></tr>');
        alert('The Total amount you will pay is ' + total.toFixed(2))
    });


});