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

function substract(matrix){
    return matrix.map(row => {
    const sum = row.reduce((acc, val) => acc + val, 0);
    const average = sum / row.length;
    return row.map(val => Number((val - average).toFixed(2))) //.toFixed(2) робить щоб після коми було тільки 2 цифри
});
}

const matrix = GeneratingMatrix(3, 3, 4, 444)
ShowMatrix(matrix)

const substarcted = substract(matrix)
ShowMatrix(substarcted)
