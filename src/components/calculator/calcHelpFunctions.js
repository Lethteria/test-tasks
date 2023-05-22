function calcNumbers(x,y,currentOperation){
    if (currentOperation === "+") return x+y;
    if (currentOperation === "-") return x-y;
    if (currentOperation === "*") return x*y;
    if (currentOperation === "/") return x/y;
}

function calcMathOperations(val,operation, currentOperation, arr){
    const [firstOperation, setFirstOperation, setInputVal, setCurrentOperation, firstNum, setFirstNum, secondNum, setSecondNum] = arr;
    //Если знак операции нажат первый раз, то просто выводим на экран калькулятора те данный, что были и плюс операция
    if (firstOperation) {
        setInputVal((prev) => prev+val);
        setFirstOperation(false);
        setCurrentOperation(val); // запоминаем операцию для дальнейших вычислений
    } else {
        if ( currentOperation === "="){ // если перед операций было равно, то выводим результат предыдущего вычисления
            setInputVal(firstNum + operation)// и текущюу операцию
        } else {
            // если это повторная оперция - делаем вычисления предыдущей и выводим результат вычисления и текущюу операцию
            let result = calcNumbers(Number(firstNum),Number(secondNum),currentOperation).toString();
            setFirstNum(result);
            setSecondNum('0');
            setInputVal ( result + operation );
        }

        setCurrentOperation(operation);
    }

}

export {calcNumbers, calcMathOperations}