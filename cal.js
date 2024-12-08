const resultElement = document.getElementById('result')

// Append value to the input
function append(value){
    resultElement.value += value;
}

// Clear the input
function clearResult(){
    resultElement.value= '';
}

//cal the result
function calculateResult(){
    if(resultElement){
        resultElement.value = eval(resultElement.value)
    }else{
        resultElement.val = 'Error'
    }
}
