function checkBrackets(str){
    let chars = str.trim().split(''),// обрезаем пробелы с двух сторон у строки и разбиваем строку на массив символов
        stack = [],  //стек для индексов открывающих скобок
        open = ['{', '(', '['],
        close = ['}', ')', ']'],
        closeIndex,
        openIndex;

    if (chars.length === 0) return false;

    for (let i = 0, len = chars.length; i < len; i++) { //Проверяем каждый символ строки, ищем открывающие и закрывающие скобки
        openIndex = open.indexOf(chars[i]);
        if (openIndex !== -1) { // Нашли открывающую скобку, добавляем ее в стек
            stack.push(openIndex);
            continue;
        }

        closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) { // Нашли закрывающую скобку
            openIndex = stack.pop(); // Удаляем последнее значение из стека и запоминаем его для открывающей скобки

            if (closeIndex !== openIndex) { //Проверяем закрывающую скобку на соответствие открывающей
                return false;
            }
        }
    }

    if (stack.length !== 0) return false; // Если в конце стек не пуст, то открывающих скобок больше, чем закрывающих
    return true;
}

export {checkBrackets}