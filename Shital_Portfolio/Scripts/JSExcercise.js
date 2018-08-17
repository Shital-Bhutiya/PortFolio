document.addEventListener('DOMContentLoaded', function () {
    // math calculation
    $('#calculate').click(() => {
        var num1 = Number($('#number1').val());
        var num2 = Number($('#number2').val());
        var num3 = Number($('#number3').val());
        var num4 = Number($('#number4').val());
        var num5 = Number($('#number5').val());
        var sum, avarage, product, greatest, least;
        if (num1 != null && num2 !== 0 && num3 !== 0 && num4 != 0 && num5 != 0) {
            sum = num1 + num2 + num3 + num4 + num5;
            avarage = sum / 5;
            product = num1 * num2 * num3 * num4 * num5;
            greatest = Math.max(num1, num2, num3, num4, num5);
            least = Math.min(num1, num2, num3, num4, num5);

            $('#sum').text("The Sum of the numbers is " + sum);
            $('#average').text("The Avarage of the numbers is " + avarage);
            $('#product').text("The product of the numbers is " + product);
            $('#least').text("The least of the numbers is " + least);
            $('#gretest').text("The Greatest of the numbers is " + greatest);
        }
        else {
            $('#least').text("Please enter all numbers");
            $('#average').text("");
            $('#product').text("");
            $('#sum').text("");
            $('#gretest').text("")
        }
    })

    //Syntax highlighter for math function
    $('#MathCode').hide();
    $('#scMath').click(() => {
        $('#MathCode').toggle();
    })

    // factorial calculation
    $('#factCalculate').click(() => {
        var num = Number($('#factorialnum').val())
        var fact = 1;
        console.log(num);
        if (num >= 0) {
            for (let i = 1; i <= num; i++) {
                fact = fact * i;
            }
            $('#factorialtext').text('The factorial of ' + num + " is " + fact);
        }
        else {
            $('#factorialtext').text("Enter a number");
        }
    })

    // syntax highlighter for factorial
    $('#factCode').hide();
    $('#scFact').click(() => {
        $('#factCode').toggle();
    })

    // fizzbuzz calculation
    $('#FizzTheBuzz').click(() => {
        var fizz = Number($('#fizzvalue').val());
        var buzz = Number($('#buzzvalue').val());
        var htmlString = "";
        if (fizz > 0 && buzz > 0) {
            for (let i = 1; i <= 100; i++) {
                if (i % fizz == 0 && i % buzz == 0) {
                    htmlString += "FizzBuzz, ";
                } else if (i % fizz == 0) {
                    htmlString += "Fizz, ";

                } else if (i % buzz == 0) {
                    htmlString += "Buzz, ";

                } else {
                    htmlString += i + ", ";
                }
            }
            $("#fizzbuzztext").html(htmlString.substring(0, htmlString.length - 2));
        }
        else {
            $("#fizzbuzztext").text("Enter numbers");
        }
    })

    //Syntax highlighter for fizzbuzz
    $('#fizzCode').hide();
    $('#scFizzBuzz').click(() => {
        $('#fizzCode').toggle();
    })

    // Palindrome calculation
    $('#findpalindrome').click(() => {
        var str = $('#palindromvalue').val();
        if (str != "") {
            var reverse = str.split("").reverse().join("");
            if (reverse === str)
                $('#palindrometext').text(str + ' is palindrome');
            else
                $('#palindrometext').text(str + ' is not palindrome');
        }
        else {
            $('#palindrometext').text("Enter a String");
        }
    })

    // syntaxhighlighter for palindrome
    $('#paliCode').hide();
    $('#scPali').click(() => {
        $('#paliCode').toggle();
    })

    // closing events
    $('#close').click(() => {
       close();
    })
    $('modal').click(() => {
        close();
    });

    // Showing work 
    $("#btnViewPort").click(function () {
        $(".click-work").click();
    });
})

function close() {
    $('.modal-body').find('input[type=text], input[type=number]').val("");
    $('.modal-body .tab-content .tab-pane div div').find('label').text("");
}
