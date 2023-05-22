import React, {useState} from 'react';
import InputText from "../inputText";

export default function Palindrome(){
    const [inputVal,setInputVal] = useState("");
    const [palindrome, setPalindrome] = useState(false);


    function Palindrome(str){
        str = str.trim().toLowerCase(); // обрезаем пробелы с двух сторон у строки и приводим ее в нижний регистр
        if (str.length) return (str === str.split('').reverse().join('')); // разбиваем строку на массив символов, разворачиваем и соединяем заново в строку
    }

    function onChangeHandle(e){
        setInputVal(e.target.value)
        let result = Palindrome(e.target.value);
        setPalindrome(result);
    }

    return (
        <section>
            <h2>Задача 1</h2>

            <div>
                <InputText inputValue={inputVal}
                           onChangeHandle={onChangeHandle}

                />
                <p>
                    { palindrome
                      ? "Строка является палиндромом!"
                      : ( Boolean(inputVal.length) ?  "Строка не является палиндромом!" : null)
                    }
                </p>
            </div>
        </section>
    )
}