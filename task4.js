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

function rotate(matrix){
    const n = matrix.length

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (let i = 0; i < n; i++){
        for (let j = 0; j < Math.floor(n / 2); j++){
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
    return matrix
}
const matrix = GeneratingMatrix(3, 3, 4, 333)
ShowMatrix(matrix)

const rotated = rotate(matrix)
ShowMatrix(rotated)
