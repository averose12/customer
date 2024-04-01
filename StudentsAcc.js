$(document).ready(function () {
    $('#amounts').hide()
    $('table').hide()
    var AmountTendered;
    var results;
    var AmountPayed;
    $("#btnclck").click(function () {
        var idnum = parseInt($('#id').val());
        var lstname = $('#lname').val();
        var frstname = $('#fname').val();
        var Gender = $("input[name='gender']:checked").val();
        var code = $('#course').val();
        var years = $('#yr').val();
        var subjcts = parseInt($('#sub').val());
        var assessments = $("input[name='assessment']:checked").val();
        var Gens = "";

        //for gender
        if (Gender == "1") {
            Gens = "Female";
        }
        else if (Gender == "2") {
            Gens = "Male";
        }
        else if (Gender == "3") {
            Gens = "Others"
        }
        else {
            Gens = "None"
        }
        //for course,totalUnit,Fees
        var Course;
        var Tuition;
        var Registration;
        var Misc;
        var lab;
        var Units = 3;
        var totalCourse;
        var TuitionPerUnit;


        var totalUnits = subjcts * Units;
        if (code === '1') {
            Course = "C1";
            Tuition = 356.75;
            Registration = 545.00;
            Misc = 1000.45;
            lab = 1900.75;
        }
        else if (code == "2") {
            Course = "C2";
            Tuition = 387.75;
            Registration = 550.00;
            Misc = 1050.35;
            lab = 1920.20;
        }
        else if (code == '3') {
            Course = "C3";
            Tuition = 345.94;
            Registration = 555.00;
            Misc = 1100.25;
            lab = 1939.65;
        }
        else if (code == '4') {
            Course = "C4";
            Tuition = 351.26;
            Registration = 560.00;
            Misc = 1150.15;
            lab = 1959.10;
        }
        else if (code == '5') {
            Course = "C5";
            Tuition = 378.44;
            Registration = 565.00;
            Misc = 1200.05;
            lab = 1978.55;
        }
        else if (code == '6') {
            Course = "C6";
            Tuition = 326.11;
            Registration = 570.00;
            Misc = 1249.05;
            lab = 1998.00;
        }
        else if (code == '7') {
            Course = "C7";
            Tuition = 310.45;
            Registration = 610.00;
            Misc = 1299.85;
            lab = 2017.45;

        }
        else {
            Course = "C8";
            Tuition = 399.79;
            Registration = 624.00;
            Misc = 1349.75;
            lab = 2036.90;
        }
        TuitionPerUnit = Tuition * totalUnits;
        totalCourse = TuitionPerUnit + Registration + Misc + lab;

        var balance;
        var totalFee;
        var assess;

        //for installment
        if (assessments == '1') {
            assess = 'Prelim'
            totalFee = totalCourse * .53;
        }
        else if (assessments == '2') {
            assess = 'Midterm'
            totalFee = totalCourse * .64;
            ;
        }
        else if (assessments == '3') {
            assess = 'Semi-Final'
            totalFee = totalCourse * .75;

        }
        else {
            assess = 'Finals'
            totalFee = totalCourse * 1;

        }
        balance = totalCourse - totalFee;

        if (totalFee >= 8000) {
            $('#cash').show();
            $('#credit').hide();
            $('#check').hide();
        }
        else if (totalFee >= 5000) {
            $('#cash').hide();
            $('#check').show();
            $('#credit').hide();
        }
        else {
            $('#cash').hide();
            $('#check').hide();
            $('#credit').show();
        }

       

        //convertion to numbers to words
        // var totalFee = 6598.09


        var ones = Math.floor(totalFee) % 10;
        var tens = Math.floor(totalFee / 10) % 10;
        var hundreds = Math.floor(totalFee / 100) % 10;
        var thousands = Math.floor(totalFee / 1000) % 10;
        var tenthousands = Math.floor(totalFee / 10000) % 10;
        var hundredthousands = Math.floor(totalFee / 100000) % 10;
        var cents = totalFee % 1;
        var centsInteger = Math.round(cents * 100); // Convert cents to an integer
        var tenscnts = Math.floor(centsInteger / 10);
        var rem = centsInteger % 10;

        //console.log(centsInteger);
        //console.log(tenscnts);
        //console.log(rem);

        var centsword = "";
        var words = "";

        // Convert ones place to words
        switch (ones) {
            case 1:
                words = 'one';
                break;
            case 2:
                words = 'two';
                break;
            case 3:
                words = 'three';
                break;
            case 4:
                words = 'four';
                break;
            case 5:
                words = 'five';
                break;
            case 6:
                words = 'six';
                break;
            case 7:
                words = 'seven';
                break;
            case 8:
                words = 'eight';
                break;
            case 9:
                words = 'nine';
                break;
        }

        // Convert tens place to words
        switch (tens) {
            case 1:
                switch (ones) {
                    case 0:
                        words = 'Ten';
                        break;
                    case 1:
                        words = 'Eleven';
                        break;
                    case 2:
                        words = 'Twelve';
                        break;
                    case 3:
                        words = 'Thirteen';
                        break;
                    case 4:
                        words = 'Fourteen';
                        break;
                    case 5:
                        words = 'Fifteen';
                        break;
                    case 6:
                        words = 'Sixteen';
                        break;
                    case 7:
                        words = 'Seventeen';
                        break;
                    case 8:
                        words = 'Eighteen';
                        break;
                    case 9:
                        words = 'Nineteen';
                        break;
                }
                break;
            case 2:
                words = 'Twenty ' + words;
                break;
            case 3:
                words = 'Thirty ' + words;
                break;
            case 4:
                words = 'Forty ' + words;
                break;
            case 5:
                words = 'Fifty ' + words;
                break;
            case 6:
                words = 'Sixty ' + words;
                break;
            case 7:
                words = 'Seventy ' + words;
                break;
            case 8:
                words = 'Eighty ' + words;
                break;
            case 9:
                words = 'Ninety ' + words;
                break;
        }

        // Convert hundreds place to words
        switch (hundreds) {
            case 1:
                words = 'One Hundred ' + words;
                break;
            case 2:
                words = 'Two Hundred ' + words;
                break;
            case 3:
                words = 'Three Hundred ' + words;
                break;
            case 4:
                words = 'Four Hundred ' + words;
                break;
            case 5:
                words = 'Five Hundred ' + words;
                break;
            case 6:
                words = 'Six Hundred ' + words;
                break;
            case 7:
                words = 'Seven Hundred ' + words;
                break;
            case 8:
                words = 'Eight Hundred ' + words;
                break;
            case 9:
                words = 'Nine Hundred ' + words;
                break;
        }

        // Convert thousands place to words
        var thousandsWords = ""; // New variable to store thousands place words
        switch (thousands) {
            case 1:
                thousandsWords = 'One Thousand ';
                break;
            case 2:
                thousandsWords = 'Two Thousand ';
                break;
            case 3:
                thousandsWords = 'Three Thousand ';
                break;
            case 4:
                thousandsWords = 'Four Thousand ';
                break;
            case 5:
                thousandsWords = 'Five Thousand ';
                break;
            case 6:
                thousandsWords = 'Six Thousand ';
                break;
            case 7:
                thousandsWords = 'Seven Thousand ';
                break;
            case 8:
                thousandsWords = 'Eight Thousand ';
                break;
            case 9:
                thousandsWords = 'Nine Thousand ';
                break;
        }

        // Convert tenthousands place to words
        switch (tenthousands) {
            case 1:
                if (thousands == 0) {
                    thousandsWords = 'Ten Thousand ';
                } else if (thousands == 1) {
                    thousandsWords = 'Eleven Thousand ';
                } else if (thousands == 2) {
                    thousandsWords = 'Twelve Thousand ';
                } else if (thousands == 3) {
                    thousandsWords = 'Thirteen Thousand ';
                } else if (thousands == 4) {
                    thousandsWords = 'Fourteen Thousand ';
                } else if (thousands == 5) {
                    thousandsWords = 'Fifteen Thousand ';
                } else if (thousands == 6) {
                    thousandsWords = 'Sixteen Thousand ';
                } else if (thousands == 7) {
                    thousandsWords = 'Seventeen Thousand ';
                } else if (thousands == 8) {
                    thousandsWords = 'Eighteen Thousand ';
                } else if (thousands == 9) {
                    thousandsWords = 'Nineteen Thousand ';
                }
                break;

            case 2:
                thousandsWords += 'Twenty Thousand ';
                break;
            case 3:
                words = 'Thirty Thousand';
                break;
            case 4:
                words = 'Forty Thousand';
                break;
            case 5:
                words = 'Fifty Thousand';
                break;
            case 6:
                words = 'Sixty Thousand';
                break;
            case 7:
                words = 'Seventy Thousand';
                break;
            case 8:
                words = 'Eighty Thousand';
                break;
            case 9:
                words = 'Ninety Thousand';
                break;

        }

        // Append thousands words to the existing words
        words = thousandsWords + words;


        // Convert hundredthousands place to words
        switch (hundredthousands) {
            case 1:
                words = 'One Hundred Thousand ' + words;
                break;
        }

        switch (tenscnts) {
            case 1:
                if (rem == 0) {
                    centsword = 'Ten';
                } else if (rem == 1) {
                    centsword = 'Eleven';
                } else if (rem == 2) {
                    centsword = 'Twelve';
                } else if (rem == 3) {
                    centsword = 'Thirteen';
                } else if (rem == 4) {
                    centsword = 'Fourteen';
                } else if (rem == 5) {
                    centsword = 'Fifteen';
                } else if (rem == 6) {
                    centsword = 'Sixteen';
                } else if (rem == 7) {
                    centsword = 'Seventeen';
                } else if (rem == 8) {
                    centsword = 'Eighteen';
                } else if (rem == 9) {
                    centsword = 'Nineteen';
                }
                break;
            case 2:
                centsword = 'Twenty';
                break;
            case 3:
                centsword = 'Thirty';
                break;
            case 4:
                centsword = 'Forty';
                break;
            case 5:
                centsword = 'Fifty';
                break;
            case 6:
                centsword = 'Sixty';
                break;
            case 7:
                centsword = 'Seventy';
                break;
            case 8:
                centsword = 'Eighty';
                break;
            case 9:
                centsword = 'Ninety';
                break;
            default:
                break;
        }
        if (tenscnts >= 2) {
            // Handling ones place for multiples of 10
            switch (rem) {
                case 1:
                    centsword += ' One';
                    break;
                case 2:
                    centsword += ' Two';
                    break;
                case 3:
                    centsword += ' Three';
                    break;
                case 4:
                    centsword += ' Four';
                    break;
                case 5:
                    centsword += ' Five';
                    break;
                case 6:
                    centsword += ' Six';
                    break;
                case 7:
                    centsword += ' Seven';
                    break;
                case 8:
                    centsword += ' Eight';
                    break;
                case 9:
                    centsword += ' Nine';
                    break;
                default:
                    break;
            }
        }
        if (tenscnts == 0) {
            switch (rem) {
                case 1:
                    centsword = 'One';
                    break;
                case 2:
                    centsword = 'Two';
                    break;
                case 3:
                    centsword = 'Three';
                    break;
                case 4:
                    centsword = 'Four';
                    break;
                case 5:
                    centsword = 'Five';
                    break;
                case 6:
                    centsword = 'Six';
                    break;
                case 7:
                    centsword = 'Seven';
                    break;
                case 8:
                    centsword = 'Eight';
                    break;
                case 9:
                    centsword = 'Nine';
                    break;
                default:
                    break;
            }
        }
        // $('#displaywords').text(' ' + words + ' dollar and ' + centsword + ' cents');


       


        $('table').show()
        $('#all-info').append('<tr><th>I.D Number:</th><td>' + idnum + '</td></tr>');
        $('#all-info').append('<tr><th>Last Name:</th><td>' + lstname + '</td></tr>');
        $('#all-info').append('<tr><th>First Name:</th><td>' + frstname + '</td></tr>');
        $('#all-info').append('<tr><th>Gender:</th><td>' + Gens + '</td></tr>');
        $('#all-info').append('<tr><th>Course Code:</th><td>' + code + '</td></tr>');
        $('#all-info').append('<tr><th>Course:</th><td>' + Course + '</td></tr>');
        $('#all-info').append('<tr><th>Year:</th><td>' + years + '</td></tr>');
        $('#all-info').append('<tr><th>Subjects:</th><td>' + subjcts + '</td></tr>');

        $('#fees-info').append('<tr><th>Total Units:</th><td>' + totalUnits.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Tuition Per Unit:</th><td>' + Tuition.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Total Tuition:</th><td>' + TuitionPerUnit.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Registration:</th><td>' + Registration.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Miscellaneous:</th><td>' + Misc.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Lab Fees:</th><td>' + lab.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Total Fees:</th><td>' + totalCourse.toFixed(2) + '</td></tr>');
        $('#fees-info').append('<tr><th>Assessment:</th><td>' + assess + '</td></tr>');
        $('#fees-info').append('<tr><th>Fee Base on Assessment:</th><td>' + totalFee.toFixed(2) + '</td></tr>');
        if (centsword != 0) {
            $('#fees-info').append('<tr><th>Fee Base on Assessment:</th><td>' + words + ' Pesos and ' + centsword + ' Centavos</td></tr>');
        }
        else {
            $('#fees-info').append('<tr><th>Fee Base on Assessment:</th><td>' + words + ' Pesos</td></tr>');
        }
        $('#fees-info').append('<tr><th>Balance:</th><td>' + balance.toFixed(2) + '</td></tr>');
        $('#amounts').show()
        $.post('../Home/SystemController', {
            IDnum: idnum,
            LastName: lstname,
            FrstName: frstname,
            Gnder: Gender,
            CodeCourse: code,
            Years: years,
            Subjects: subjcts,
            TotalUnits: totalUnits,
            TuitionPerUnit: Tuition,
            TotalTuition: TuitionPerUnit,
            Registration: Registration,
            Miscellaneous: Misc,
            LabFees: lab,
            TotalFeesCourse: totalCourse,
            Assessment: assessments,
            TotalFee: totalFee,
            Balance: balance,
            Pesos: words,
            Centavos: centsword,
            Results: results,
            AmountPay: AmountPayed

        },function (data) {
            
            if (data[0].mess == 1) {
                alert('Successfully Saved!');
            }
            else {
                alert('Something are missing!');
            }
            $('#Save').click(function () {

                AmountTendered = parseInt($('#tendered').val());
                results = (AmountTendered / 100).toFixed(2)
                AmountPayed = results - totalFee;
                $('#fees-info').append('<tr><th>Amount Tendered:</th><td>' + results + '</td></tr>');
                $('#fees-info').append('<tr><th>Change:</th><td>' + AmountPayed.toFixed(2) + '</td></tr>');
                $('#amounts').hide();

            })
            
            
        });



    });

});