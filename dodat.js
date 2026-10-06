// function GeneratingMatrix(rows, cols, min, max) {
//     let matrix = [];
//     for (let i = 0; i < rows; i++) {
//         const row = [];
//         for (let j = 0; j < cols; j++) {
//             let random = Math.floor(Math.random() * (max - min + 1)) + min;
//             row.push(random);
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }
// function ShowMatrix(matrix) {
//     if (!matrix || matrix.length === 0) return;

//     const rows = matrix.length;
//     const cols = matrix[0].length;

//     let header = "".padEnd(12);
//     for (let j = 0; j < cols; j++) {
//         header += `стовпець ${j + 1}`.padEnd(15);
//     }
//     console.log(header);

//     for (let i = 0; i < rows; i++) {
//         let rowStr = `рядок ${i + 1}`.padEnd(12);
//         for (let j = 0; j < cols; j++) {
//             rowStr += String(matrix[i][j]).padEnd(15);
//         }
//         console.log(rowStr);
//     }
// }


const M = `Математика`
const A = `Алгоритми та структури даних`
const P = `Програмування`
const E = `Англійська`
const W = `Вікно`

let groups = [`Група 1`, `Група 2`, `Група 3`]
let days = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', `П'ятниця`]

const Schedule = [
    [
        [M, P, W, W],
        [P, P, E, W],
        [P, W, W, M],
        [A, W, M, E],
        [W, W, E, P]
    ],
    [
        [P, W, E, W],
        [A, E, M, W],
        [W, P, M, W],
        [A, P, M, E],
        [E, P, W, W]
    ],
    [
        [E, M, W, P],
        [W, E, M, W],
        [M, A, E, W],
        [M, E, A, W],
        [W, W, E, P]
    ]
]

function find_hardest(Schedule, groupIndex){
    if (groupIndex < 0 || groupIndex >= Schedule.length){
        console.log(`Групу за індексом ${groupIndex} не знайдено`)
        return null;
    }

    const groupSchedule = Schedule[groupIndex];
    let MaxPairs = -1;
    let HardestDayIndex = 0;

    for (let DayI = 0; DayI < groupSchedule.length; DayI++){
        let PairsCount = 0;

        for (let PairI = 0; PairI < groupSchedule[DayI].length; PairI++){
            const subject = groupSchedule[DayI][PairI];

            if(subject != W){
                PairsCount++;
            }
        }
        if (PairsCount > MaxPairs){
            MaxPairs = PairsCount;
            HardestDayIndex = DayI;
        }
    }
    const dayName = days[HardestDayIndex];
    const groupName = groups[groupIndex];

    console.log(`Найбільше навантаження у ${groupName}: ${dayName} (${MaxPairs} пар(и)).`);

    return {
        group: groupName,
        day: dayName,
        PairsCount: MaxPairs
    }
}

function find_worst(Schedule, groupIndex){
     if (groupIndex < 0 || groupIndex >= Schedule.length){
        console.log(`Групу за індексом ${groupIndex} не знайдено`)
        return null;
    }
    const groupSchedule = Schedule[groupIndex]
    const groupName = groups[groupIndex]
    const worstDay = []

    for(let dayI = 0; dayI < groupSchedule.length; dayI++){
        const daySchedule = groupSchedule[dayI];

        let firstPair = -1;
        let lastPair = -1;

        for(let PairI = 0; PairI < daySchedule.length; PairI++){
            if (daySchedule[PairI] !== W){
                if (firstPair === -1){
                    firstPair = PairI
                }
                lastPair = PairI
            }
        }
        let windowPairs = []
        if (firstPair !== -1 && lastPair !== -1){
            for (let pairI = firstPair + 1; pairI < lastPair; pairI++){
                if (daySchedule[pairI] === W){
                    windowPairs.push(pairI + 1)
                }
            }
        }
        if (windowPairs.length > 0){
            worstDay.push({
                day: days[dayI],
                windowCount: windowPairs.length,
                windowPairs: windowPairs
            })
        }
    }

    console.log(`\nНезручні дні для ${groupName}:`)
    if (worstDay.length === 0){
        console.log(`Жодних вікон немає`)
    } else {
        worstDay.forEach(item => {
            console.log(`- ${item.day}: ${item.windowCount} «вікно(а)» на ${item.windowPairs.join(', ')}-й парі`);
        });
    }
    return worstDay
}

find_hardest(Schedule, 0)
find_worst(Schedule, 1)
