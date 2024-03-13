function deserializeString(input) {
    let newArr = [];
    for (let row of input) {
        if (row === 'end') {
            break;
        }
        let fragLine = row.split(':');
        let char = fragLine.shift();
        let indexArr = fragLine.join('').split('/').map(Number);

        for (let i of indexArr) {
            newArr[i] = char;
        }
    }
    console.log(newArr.join(''));

}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']
);
//deserializeString();