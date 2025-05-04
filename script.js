document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function toggleTheme() {
    const themes = ['light-theme', 'dark-theme', 'sunset-orange', 'blueberry-yogurt'];
    let currentTheme = document.body.className;
    let nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    let nextTheme = themes[nextThemeIndex];

    document.body.className = nextTheme;

    // Save the theme to local storage
    localStorage.setItem("theme", nextTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme;
    }
});

function getAttendance() {
    let num = parseInt(document.getElementById('num').value);
    let den = parseInt(document.getElementById('den').value);

    if (isNaN(num) || isNaN(den) || num < 0 || den <= 0 || num > den) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    let result = calculateAttendance(num, den);
    document.getElementById('result').innerHTML = result;
}document.getElementById("themeToggle").addEventListener("click", toggleTheme);

function toggleTheme() {
    const themes = ['light-theme', 'dark-theme', 'sunset-orange', 'blueberry-yogurt', 'violet-dark-bubblegum'];
    let currentTheme = document.body.className;
    let nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    let nextTheme = themes[nextThemeIndex];

    document.body.className = nextTheme;

    // Save the theme to local storage
    localStorage.setItem("theme", nextTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme;
    }
});

function getAttendance() {
    let num = parseInt(document.getElementById('num').value);
    let den = parseInt(document.getElementById('den').value);

    if (isNaN(num) || isNaN(den) || num < 0 || den <= 0 || num > den) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    let result = calculateAttendance(num, den);
    document.getElementById('result').innerHTML = result;
}

function calculateAttendance(num, den) {
    let attendance = (num / den) * 100;
    let message;

    if (attendance >= 75) {
        message = `Your current attendance is ${attendance.toFixed(2)}%.<br>You're above 75%. Great!`;

        let missableClasses = 0;
        while ((num / (den + missableClasses)) * 100 >= 75) {
            missableClasses++;
        }

        message += `<br>You can afford to miss ${missableClasses - 1} more classes without dropping below 75%.`;
    } else {
        message = `Your current attendance is ${attendance.toFixed(2)}%.<br>You're below 75%.`;

        // calculate required classes to go above 75%
        let required = Math.ceil((0.75 * den - num) / (1 - 0.75));
        message += `<br>You’ll need to attend ${required} more classes to reach above 75%.`;
    }

    return message;
}

document.getElementById("easterEgg").addEventListener("click", () => {
    const random = Math.random();

    if (random < 0.5) {
        window.open("https://open.spotify.com/artist/4jEvdgGVyDUKMFG1GukYI0?si=fSMseqknTcaLq7yaxXkfkA", "_blank");
    } else {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => {
                const catUrl = data[0].url;
                window.open(catUrl, "_blank");
            })
            .catch(() => {
                alert("cat ran away... try again");
            });
    }
});


function calculateAttendance(num, den) {
    let attendance = (num / den) * 100;
    let message;

    if (attendance >= 75) {
        message = `Your current attendance is ${attendance.toFixed(2)}%.<br>You're above 75%. Great!`;

        let missableClasses = 0;
        while ((num / (den + missableClasses)) * 100 >= 75) {
            missableClasses++;
        }

        message += `<br>You can afford to miss ${missableClasses - 1} more classes without dropping below 75%.`;
    } else {
        message = `Your current attendance is ${attendance.toFixed(2)}%.<br>You're below 75%.`;

        // calculate required classes to go above 75%
        let required = Math.ceil((0.75 * den - num) / (1 - 0.75));
        message += `<br>You’ll need to attend ${required} more classes to reach above 75%.`;
    }

    return message;
}

document.getElementById("easterEgg").addEventListener("click", () => {
    const random = Math.random();

    if (random < 0.5) {
        window.open("https://open.spotify.com/artist/4jEvdgGVyDUKMFG1GukYI0?si=fSMseqknTcaLq7yaxXkfkA", "_blank");
    } else {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(data => {
                const catUrl = data[0].url;
                window.open(catUrl, "_blank");
            })
            .catch(() => {
                alert("cat ran away... try again");
            });
    }
});
