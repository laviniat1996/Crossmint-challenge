const method = 'POST'; // Replace with DELETE if you want to clear the map
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const method = 'POST'; // Replace with DELETE if you want to clear the map

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const updateMap = async (row, column) => {
    await fetch('https://challenge.crossmint.io/api/polyanets', {
        method: method,
        body: new URLSearchParams({
            'candidateId': '775725f4-f758-4bea-864b-1fe78566a4d3',
            'row': row,
            'column': column
        })
    }).then(res => console.log(res));
}

/* I really tried but didn't find a pattern to automatically fill in Soloons and Comeths. I started the chalenge quite late and didn't expect such a complex map. 
Also, I had some trouble with the API requests, as the server would crash if there were many requests, which delayed my work a bit. 
Below are the functions for filling in Soloons and Comeths, which I used on console directly. I use this file https://challenge.crossmint.io/_next/static/chunks/pages/challenge-b4a8e39fe916fe24.js 
to find the rows and lines needed for them. 

const updateMapSoloons = async (row, column,color) => {
    await fetch('https://challenge.crossmint.io/api/soloons', {
        method: POST,
        body: new URLSearchParams({
            'candidateId': '775725f4-f758-4bea-864b-1fe78566a4d3',
            'row': row,
            'column': column,
            'color': color
        })
    }).then(res => console.log(res));
}

const updateMapComeths = async (row, column,direction) => {
    await fetch('https://challenge.crossmint.io/api/comeths', {
        method: `POST`,
        body: new URLSearchParams({
            'candidateId': '775725f4-f758-4bea-864b-1fe78566a4d3',
            'row': row,
            'column': column, 
            'direction': direction
        })
    }).then(res => console.log(res));
}
*/

const checkDownLeftColumnFirst = async (row, column, iterations) => {
    if (column < 2) return;
    await sleep(1000);
    await updateMap(row, column)
        .then(async () => await sleep(1000))
        .then(async () => {
            if ( iterations < 5) {
                await updateMap(row + 1, column).then(async () => await sleep(1000)).then(async () => await checkDownLeftColumnFirst(row + 2, column - 1, iterations + 1));
            }
            else {
                await updateMap(row, column - 1).then(async () => await sleep(1000)).then(async () => await checkDownLeftColumnFirst(row + 1, column - 2, iterations + 1));
            }
        });
};

const checkDownLeftRowFirst = async (row, column, iterations) => {
    if (column < 2) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row, column - 1).then(async () => await sleep(1000)).then(async () => await checkDownLeftRowFirst(row + 1, column - 2, iterations + 1));
        }
        else {
            await updateMap(row + 1, column).then(async () => await sleep(1000)).then(async () => await checkDownLeftRowFirst(row + 2, column - 1, iterations + 1));
        }
    });
};

const checkDownRightRowFirst = async (row, column, iterations) => {
    if (column > 24) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row, column + 1).then(async () => await sleep(1000)).then(async () => await checkDownRightRowFirst(row + 1, column + 2, iterations + 1));
        }
        else {
            await updateMap(row + 1, column).then(async () => await sleep(1000)).then(async () => await checkDownRightRowFirst(row + 2, column + 1, iterations + 1));
        }
    });
};

const checkDownRightColumnFirst = async (row, column, iterations) => {
    if (column > 24) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row + 1, column).then(async () => await sleep(1000)).then(async () => await checkDownRightColumnFirst(row + 2, column + 1, iterations + 1));
        }
        else {
            await updateMap(row, column + 1).then(async () => await sleep(1000)).then(async () => await checkDownRightColumnFirst(row + 1, column + 2, iterations + 1));
        }
    });
};

const checkUpLeftColumnFirst = async (row, column, iterations) => {
    if (column < 2) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row, column - 1).then(async () => await sleep(1000)).then(async () => await checkUpLeftColumnFirst(row - 1, column - 2, iterations + 1));
        }
        else {
            await updateMap(row - 1, column).then(async () => await sleep(1000)).then(async () => await checkUpLeftColumnFirst(row - 2, column - 1, iterations + 1));
        }
    });
};

const checkUpLeftRowFirst = async (row, column, iterations) => {
    if (column < 2) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row - 1, column).then(async () => await sleep(1000)).then(async () => await checkUpLeftRowFirst(row - 2, column - 1, iterations + 1));
        }
        else {
            await updateMap(row, column - 1).then(async () => await sleep(1000)).then(async () => await checkUpLeftRowFirst(row - 1, column - 2, iterations + 1));
        }
    });
};

const checkUpRightColumnFirst = async (row, column, iterations) => {
    if (column > 24) return;
    await sleep(1000)
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row, column + 1).then(async () => await sleep(1000)).then(async () => await checkUpRightColumnFirst(row - 1, column + 2, iterations + 1));
        }
        else {
            await updateMap(row - 1, column).then(async () => await sleep(1000)).then(async () => await checkUpRightColumnFirst(row - 2, column + 1, iterations + 1));
        }
    });
};

const checkUpRightRowFirst = async (row, column, iterations) => {
    if (column > 24) return;
    await sleep(1000);
    await updateMap(row, column).then(async () => await sleep(1000)).then(async () => {
        if ( iterations < 5) {
            await updateMap(row - 1, column).then(async () => await sleep(1000)).then(async () => await checkUpRightRowFirst(row - 2, column + 1, iterations + 1));
        }
        else {
            await updateMap(row, column + 1).then(async () => await sleep(1000)).then(async () => await checkUpRightRowFirst(row - 1, column + 2, iterations + 1));
        }
    });
};

const checkDownLeft = async (row, column) => {
    await checkDownLeftColumnFirst(row, column, 1).then(async () => await sleep(1000)).then(async () => await checkDownLeftRowFirst(row, column, 1));
}

const checkDownRight = async (row, column) => {
    await checkDownRightColumnFirst(row, column, 1).then(async () => await sleep(1000)).then(async () => await checkDownRightRowFirst(row, column, 1));
}

const checkUpLeft = async (row, column) => {
    await checkUpLeftColumnFirst(row, column, 1).then(async () => await sleep(1000)).then(async () => await checkUpLeftRowFirst(row, column, 1))
}

const checkUpRight = async (row, column) => {
    await checkUpRightColumnFirst(row, column, 1).then(async () => await sleep(1000)).then(async () => await checkUpRightRowFirst(row, column, 1));
}
const fillPolyAnets = async (index) => {
    await updateMap(index, index)
        .then(async () => await checkDownLeft(index, index))
        .then(async () => await sleep(1000))
        .then(async () => await checkDownRight(index, index))
        .then(async () => await sleep(1000))
        .then(async() =>  await checkUpLeft(index, index))
        .then(async () => await sleep(1000))
        .then(async () => await checkUpRight(index, index))
        .then(async () => console.log("GATAAAAAA"));
}

fillPolyAnets(13);