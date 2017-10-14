var current = {
    lastOp : 'a',
    digits: '',
    operand1 : 0,
    operand2: 0,
    operands : []
}

$('.operator').click(function(){
    var oper = $(this).text();
    console.log("In .operator: " + oper);
    if(oper == 'C'){
        $('#display').text('');
        console.log("Clearing");
        current.digits = '';
        current.operands = [];
    }
    else if (oper == '='){
        current.operand2 = parseInt( current.digits);
        current.operands.push(current.operand2);
        console.log("operands: " + current.operands);
        current.digits = '';
        console.log("Setting operand2: " + current.operand2);
        if(current.operands.length > 3) {
            console.log(processArray(current.operands));
        }
        var answer = calculate();
        $('#display').text(answer);
        current.digits = '';
    }
    else {
        current.lastOp = oper;
        console.log("I'm setting lastOp: " + current.lastOp);
        current.operand1 = parseInt( current.digits );
        current.operands.push(current.operand1);
        current.operands.push(current.lastOp);
        console.log("operands: " + current.operands);
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

var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}

var divide = function(num1, num2) {
    return num1/num2;
}

var multiply = function(num1, num2) {
    return num1*num2;
}

var processArray = function(arr) {
    var total = 0;
    var operation;
    for(var i = 0; i < arr.length; i++) {
        if(i%2 == 0) {
            if(operation==undefined || operation=='+') {
                total += parseInt(arr[i]);
                console.log("first if, total: " + total);
            }
            else if(operation=='-') {
                total -= parseInt(arr[i]);
                console.log("second if, total: " + total);
            }
            else if(operation=='*') {
                total *= parseInt(arr[i]);
                console.log("third if, total: " + total);
            }
            else if(operation=='/') {
                total = total/arr[i];
                console.log("last if, total: " + total);
            }
        }
        else {
            console.log("in else: i=" + i);
            operation = arr[i];
            console.log("operation: " + operation);
        }
    }
    console.log('returning total: ' + total);
    return total;
}
