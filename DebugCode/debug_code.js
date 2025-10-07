function performOperation() {
    const val1 = document.getElementById('input1').value;
    const val2 = document.getElementById('input2').value;
    console.log('Inputs:', val1, val2);

    const a = Number(val1);
    const b = Number(val2);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const sum = a + b;
    document.getElementById('result').textContent = 'Sum: ' + sum;
}
