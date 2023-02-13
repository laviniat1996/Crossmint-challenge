const method = 'POST'; // Replace with DELETE if you want to clear the map

const updatePolyanet = async (row, column, method) => {
    await fetch('https://challenge.crossmint.io/api/polyanets', {
        method: method,
        body: new URLSearchParams({
            'candidateId': '775725f4-f758-4bea-864b-1fe78566a4d3',
            'row': row,
            'column': column
        })
    }).then(res => console.log(res));
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (let i = 2; i < 9; ++i) {
    await sleep(1000);
    updatePolyanet(i, i, method);
    await sleep(1000);
    updatePolyanet(i, 10 - i, method);
}