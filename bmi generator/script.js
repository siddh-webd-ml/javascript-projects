const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please give a valid height: ${height}`;
        return; 
    }


    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
        return; 
    }


    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    

    let category;
    if (bmi < 18.6) {
        category = 'You are underweight.';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'You are normal weight.';
    } else {
        category = 'You are overweight.';
    }


    results.innerHTML = `<span>Your BMI is: ${bmi}</span><br>${category}`;
});