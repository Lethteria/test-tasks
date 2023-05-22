import React, {useState} from "react";
import styles from "./calculator.module.scss";
import {calcNumbers, calcMathOperations} from "./calcHelpFunctions";

// При вводе числа разбиваются на первое и второе, а затем вычисляются в зависимости от операции.
// Флаг firstOperation показывает, была ли нажата кнопка с операцией.
// В зависимости от него числа записываются в firstNum и secondNum
// После нажатия знака равно результат записывается в firstNum для дальнейших вычислений

export default function Calculator(){
    const buttonData = [ {val: "clear",
                          styles: true},
                         {val: "del",
                          styles: true},
                         {val: 7},
                         {val: 8},
                         {val: 9},
                         {val: "/"},
                         {val: 4},
                         {val: 5},
                         {val: 6},
                         {val: "*"},
                         {val: 1},
                         {val: 2},
                         {val: 3},
                         {val: "-"},
                         {val: 0,
                          styles: true},
                         {val: "="},
                         {val: "+"}
                        ]

    const [inputVal, setInputVal] = useState('0');
    const [firstNum, setFirstNum] = useState('0');
    const [secondNum, setSecondNum] = useState('0');
    const [firstOperation, setFirstOperation] = useState(true); //
    const [currentOperation, setCurrentOperation] = useState("");

    const arr = [firstOperation, setFirstOperation, setInputVal, setCurrentOperation, firstNum, setFirstNum, secondNum, setSecondNum];

    function setStates(inputVal, firstNum, secondNum, operation){ // Вспомогательная функия чтоб не дублировать код
        setInputVal(inputVal);
        setFirstNum(firstNum);
        setSecondNum(secondNum);
        setCurrentOperation(operation);
    }

    function onClickHandle(val){

        return function (){

            switch (typeof(val)){ // определяем, нажата была кнопка с числом или операцией
                case "number":
                    //если цифра нажата после операции "=", то обнуляем калькулятор и начинаем расчет заново
                    if ( currentOperation === "=") {
                        setFirstOperation(true);
                        setStates(val.toString(), val.toString(), '0', "");
                        return;
                    }

                    if ( inputVal === "0" ) setInputVal(""); // убираем первый нажатый 0 с экрана калькулятора

                    setInputVal((prev) => prev+val); // вывод на экран калькулятора

                    //пока вводятся числа, разбиваем их на первое и второе для дальнейших вычислений
                    (firstOperation) ? setFirstNum((prev) => prev+val) : setSecondNum((prev) => prev+val)
                    return;

                case "string":

                    switch (val){

                        case "clear": // очистка калькулятора, обнуляем все значения
                            setStates('0', '0', '0', "");
                            setFirstOperation(true);
                            return;

                        case "del":
                            let cutVal = inputVal.substring(0, inputVal.length-1); // удаляем последний символ
                            setInputVal(cutVal);
                            // в зависимости от того, были ли перед "del" другие операции определяем,
                            // удалять последний символ с первого или второго числа
                            ( firstOperation ) ? setFirstNum(cutVal) : setSecondNum(secondNum.substring(0, secondNum.length-1));
                            // если перед "del" было равно, то результат вычисления - это первое число,
                            // удалять последний символ с первого числа
                            if ( !firstOperation && currentOperation === '=')  setFirstNum(cutVal);
                            return;

                        case "+":
                            calcMathOperations(val,"+", currentOperation, arr);
                            return;

                        case "-":
                            calcMathOperations(val,"-", currentOperation, arr);
                            return;

                        case "*":
                            calcMathOperations(val,"*", currentOperation, arr);
                            return;

                        case "/":
                            calcMathOperations(val,"/", currentOperation, arr);
                            return;

                        case "=":
                            if ( firstNum !== "0" && secondNum !== "0") {
                                //вычисляем результат на основе сохраненных двух чисел
                                let result = calcNumbers(Number(firstNum),Number(secondNum),currentOperation);
                                //записываем результат в первое число и обнуляем второе
                                setStates(result.toString(), result, '0', "=");
                            }
                            return
                    }
            }

            setInputVal(val) // вывод на экран калькулятора
        }
    }

    return(
        <section>
            <h2>Задача 3</h2>

            <div className={styles.wrap}>

                <div className={styles.resultInput}>
                    <span>{inputVal}</span>
                </div>


                <div>
                    {buttonData.map( (item, index) => {

                        return <button className={ item.styles ? `${styles.button} ${styles.bigBtn}` : `${styles.button}`}
                                       onClick={onClickHandle(item.val)}
                                       key={index}
                                >
                                    {item.val}
                               </button>
                        }
                    )}
                </div>

            </div>
        </section>
    )
}
