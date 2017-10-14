var current = {
    lastOp : 'a',
    digits: '',
    operands : []
}

$('.operator').click(function(){
    var oper = $(this).text();
    if(oper == 'C'){
        $('#display').text('');
        current.digits = '';
        current.operands = [];
    }
    else if (oper == '='){
        current.operands.push(parseInt(current.digits));
        //console.log("operands: " + current.operands);
        var answer = processArray(current.operands);
        $('#display').text(answer);
        current.digits = '';
        current.digits += answer
        current.operands = [];
    }
    else {
        current.lastOp = oper;
        current.operands.push(parseInt( current.digits ));
        current.operands.push(current.lastOp);
        current.digits = '';
        }

});

$('td.number').click(function(e){
    current.digits += ($(this).text());
    $('#display').text(current.digits);
});

var processArray = function(arr) {
    var total = 0;
    var operation;
    for(var i = 0; i < arr.length; i++) {
        if(i%2 == 0) {
            if(operation==undefined || operation=='+') {
                total += parseInt(arr[i]);
            }
            else if(operation=='-') {
                total -= parseInt(arr[i]);
            }
            else if(operation=='X') {
                total *= parseInt(arr[i]);
            }
            else if(operation=='/') {
                total = total/arr[i];
            }
        }
        else {
            operation = arr[i];
        }
    }
    return total;
}
