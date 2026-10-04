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

function remove(matrix){
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

    const maxVal = Math.max(...matrix.flat());

    const DeleteRow = new Set();
    const DeleteCol = new Set();

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === maxVal){
                DeleteRow.add(i)
                DeleteCol.add(j)
            }
        }
    }
    console.log(maxVal)

    const result = matrix.filter((_, rowIndex) => !DeleteRow.has(rowIndex)).map(row => row.filter((_, colIndex) => !DeleteCol.has(colIndex)));
    return result
}

const matrix = GeneratingMatrix(3, 3, 4, 333)
ShowMatrix(matrix)

const removedMax = remove(matrix)
ShowMatrix(removedMax)
