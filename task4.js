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

function rotate(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let col = 0; col < cols; col++) {
        const newRow = [];
        for (let row = rows - 1; row >= 0; row--) {
            newRow.push(matrix[row][col]);
        }
        result.push(newRow);
    }

    return result;
}
const matrix = GeneratingMatrix(4,3 , 4, 333)
ShowMatrix(matrix)

const rotated = rotate(matrix);
ShowMatrix(rotated);
