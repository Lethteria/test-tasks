import React from "react";
import styles from "./tasksPage.module.scss";
import Palindrome from "../components/palindrome";
import Matrix from "../components/matrix";
import Brackets from "../components/brackets";
import Calculator from "../components/calculator";

export default function TasksPage(){
    return (
        <div className={styles.wrap}>
            <Palindrome/>
            <Matrix />
            <Brackets />
            <Calculator />
        </div>
    )
}