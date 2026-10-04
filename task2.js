function GeneratingMatrix(rows, cols, min, max) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            let random = Math.floor(Math.random() * (max - min + 1)) + min;
            row.push(random);
        }
        matrix.push(row);
    }
    return matrix;
}
function ShowMatrix(matrix) {
    if (!matrix || matrix.length === 0) return;

    const rows = matrix.length;
    const cols = matrix[0].length;

    let header = "".padEnd(12);
    for (let j = 0; j < cols; j++) {
        header += `стовпець ${j + 1}`.padEnd(15);
    }
    console.log(header);

    for (let i = 0; i < rows; i++) {
        let rowStr = `рядок ${i + 1}`.padEnd(12);
        for (let j = 0; j < cols; j++) {
            rowStr += String(matrix[i][j]).padEnd(15);
        }
        console.log(rowStr);
    }
}

function changePos(matrix, changeRight, changeUp){
    if (!matrix || matrix.length === 0){
        return []
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    const Up = changeUp % rows
    const Right = changeRight % cols 

    const changed = matrix.slice(Up).concat(matrix.slice(0, Up));
    return changed.map(row => {
        if (Right === 0) 
            {
                return[...row];
            }
        return row.slice(-Right).concat(row.slice(0, cols - Right));
    });
}

const matrix = GeneratingMatrix(1, 1, 4, 444)
ShowMatrix(matrix)
ShowMatrix(changePos(matrix, 1, 1))
