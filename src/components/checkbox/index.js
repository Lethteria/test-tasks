import React from "react";
import styles from "./checkbox.module.scss";

export default function Checkbox(props){
    const {id, value, isCheckedHandle, onChangeHandle, className} = props;

    return (
        <div className={className}>
            <input type="checkbox"
                   id={id}
                   value={value}
                   checked={isCheckedHandle}
                   onChange={onChangeHandle}
            />
            <label htmlFor={id}> Повернуть </label>
        </div>

    )
}