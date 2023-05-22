import React from "react";
import styles from "./inputText.module.scss";

export default function InputText(props){
    const {inputValue, onChangeHandle} = props;
    return (
        <input type="text"
               className={styles.input}
               placeholder="Введите текст"
               value={inputValue}
               onChange={onChangeHandle}
        />
    )
}