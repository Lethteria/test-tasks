import React, {useState} from "react";
import InputText from "../inputText";
import {checkBrackets} from "./bracketsHelpFunctions";

export default function Brackets(){

    const [inputVal,setInputVal] = useState("");
    const [checkedBrackets, setCheckedBrackets] = useState(false);

    function onChangeHandle(e){
        setInputVal(e.target.value)
        let checked = checkBrackets(e.target.value);
        setCheckedBrackets(checked);
    }

    return (
        <section>
            <h2>Задача 4</h2>

            <div>
                <InputText onChangeHandle={onChangeHandle}
                           inputValue={inputVal}
                />
                <p>
                    { checkedBrackets
                      ? "Все скобки закрыты"
                      : ( Boolean(inputVal.length) ?  "Скобки не закрыты" : null)
                    }
                </p>
            </div>
        </section>
    )
}