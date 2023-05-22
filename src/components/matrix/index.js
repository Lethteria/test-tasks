import React, {useState} from "react";
import styles from "./matrix.module.scss";
import Checkbox from "../checkbox";
import {rightMatrixRotate, leftMatrixRotate} from "./matrixHelpFunctions";


export default function Matrix(){
    const matrix = [[1,2,3],
                    [1,2,3],
                    [1,2,3]
                   ];

    function displayMatrix(arr){
        return arr.map( (item, index) =>
                   <div key={index}>
                        {item.map((item, index) =>
                            <span key={index} className={styles.span}>{item}</span>
                        )}
                   </div>
               )
    }

    const [result, setResult] = useState(null);
    const [resultLeft, setResultLeft] = useState(null);

    const [isCheckedRight, setIsCheckedRight] = useState(false);
    const [isCheckedLeft, setIsCheckedLeft] = useState(false);

    function onChangeRight(e){
        setIsCheckedRight(e.target.checked);
        let r = rightMatrixRotate(matrix);
        setResult(r)
    }
    function onChangeLeft(e){
        setIsCheckedLeft(e.target.checked);
        let r = leftMatrixRotate(matrix);
        setResultLeft(r);
    }

    return (
        <section>
            <h2>Задача 2</h2>

            <div className={styles.wrap}>
                <Checkbox id="rightRotate"
                          value="rightRotate"
                          isCheckedHandle={isCheckedRight}
                          onChangeHandle={onChangeRight}
                          className={styles.column}
                />

                <Checkbox id="leftRotate"
                          value="leftRotate"
                          isCheckedHandle={isCheckedLeft}
                          onChangeHandle={onChangeLeft}
                          className={styles.column}
                />
            </div>

            <div className={styles.wrap}>

                <div className={styles.column}>
                    <h5>Исходная матрица</h5>
                    {displayMatrix(matrix)}
                </div>

                <div className={styles.column}>
                    <h5>Результат поверота</h5>
                    {isCheckedRight ? displayMatrix(result) : null}
                </div>

                <div className={styles.column}>
                    <h5>Результат поверота влево</h5>
                    {isCheckedLeft ? displayMatrix(resultLeft) : null}
                </div>

            </div>

        </section>
    )
}