function rightMatrixRotate(arr){
    return arr[0].map((col, i) => // выбираем первый елемент массива (массив ), его индексы будут номерами строкам новой матрицы
        arr.map(row => row[i]) //заполняем новую матрицу построчно
    );
}

function leftMatrixRotate(arr){
    let revArr = arr.map(row => // развернуть массив в обратную сторону
        row.reverse()
    )
    return revArr[0].map((col, i) =>
        arr.map(row =>
            row[i]
        )
    );
}

export {rightMatrixRotate, leftMatrixRotate}