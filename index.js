let display =document.getElementById('display');

document.querySelectorAll('.button').forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.textContent ==='AC'){
            button.ondblclick = ()=>{
                clearAll();
            }
            deleteChar();
        }else if(button.textContent === '='){
            evaluateExp();
        }else{
            appendDigit(button.textContent);
        }
    });
})


function appendOp(op){
   if(display.value === 'syntax error...'){
     display.value = op;
   }else{
     display.value += op;
   }
}

function appendDigit(digit){
    if(display.value === 'syntax error...'){
    display.value = digit;
   }else{
     display.value += digit;
   }
    
}

function deleteChar(){
    if(display.value === 'syntax error...'){
        display.value = '';
    }else{
        display.value = display.value.slice(0,-1);
    }
}

function clearAll(){
    display.value = '';
}



function evaluateExp(){
    let exp = display.value;
    if(exp !== ''){
        let result = 'syntax error...';
        let myX = document.getElementById('product').textContent;
        exp = exp.split(myX).join('*');
        
        if(exp.includes('//') || exp.includes('/*'))
            exp = 'syntax error';

        try{
             result = eval(exp);

        }catch(e){
            display.value = 'syntax error...';
        }
        if(result === undefined || result === Infinity || result === -Infinity){
            display.value = 'syntax error...';
        }else{
            display.value = result;
        }
    }
}