function getAttendance() {
    // Get user inputs
    let num = parseInt(document.getElementById('num').value);
    let den = parseInt(document.getElementById('den').value);

    // Check if inputs are valid
    if (isNaN(num) || isNaN(den) || num < 0 || den <= 0 || num > den) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    // Call the attendance calculation function
    let result = calculateAttendance(num, den);

    // Display the result
    document.getElementById('result').innerHTML = result;
}

// JavaScript logic for calculating attendance
function calculateAttendance(num, den) {
    let attendance = (num / den) * 100;
    let message;

    if (attendance >= 75) {
        message = `You already have ${attendance.toFixed(2)}% attendance!!`;
    } else {
        message = `You have ${attendance.toFixed(2)}% attendance!!`;

        for (let i = 1; ; i++) {
            let newAttendance = ((num + i) / (den + i)) * 100;
            if (newAttendance >= 75) {
                message += `<br>You’ll need to attend ${i} more classes to get to 75%.`;
                break;
            }
        }
    }

    return message;
}