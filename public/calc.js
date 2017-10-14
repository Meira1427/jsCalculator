var current = {
    lastOp : 'a',
    digits: '',
    operand1 : 0,
    operand2: 0
}

$('.operator').click(function(){
    var oper = $(this).text();
    console.log("In .operator: " + oper);
    if(oper == 'C'){
        $('#display').text('');
        console.log("Clearing");
        current.digits = '';
    }
    else if (oper == '='){
        current.operand2 = parseInt( current.digits);
        current.digits = '';
        console.log("Setting operand2: " + current.operand2);
        var answer = calculate();
        $('#display').text(answer);
        current.digits = '';
    }
    else {
        current.lastOp = oper;
        console.log("I'm setting lastOp: " + current.lastOp);
        current.operand1 = parseInt( current.digits );
        console.log("Setting operand1: " + current.operand1);
        current.digits = '';
        }

});

$('td.number').click(function(e){
    current.digits += ($(this).text());
    $('#display').text(current.digits);
});

var calculate = function() {
    var answer;
    switch(current.lastOp) {
        case '+':
            answer = current.operand1 + current.operand2;
            break;
        case '-':
            answer = current.operand1 - current.operand2;
            break;
        case '/':
            answer = current.operand1/current.operand2;
            break;
        case 'X':
            answer = current.operand1 * current.operand2;
            break;
        default:
            break;
    }
    console.log("Answer is: " + answer);
    return answer;
}

// var displayNumber = function(num) {
//     $('#display').text(num);
// } // didn't end up using this I guess
