// jab user button dabaye, attendance calculate kar
function getAttendance() {
    let num = parseInt(document.getElementById('num').value);
    let den = parseInt(document.getElementById('den').value);
    let resultDiv = document.getElementById('result');

    // check kar ki input valid hai ya nahi
    if (isNaN(num) || isNaN(den) || num < 0 || den <= 0 || num > den) {
        resultDiv.innerHTML = "Please enter valid numbers.";
        return;
    }

    // attendance calculate karne ke liye function call
    let result = calculateAttendance(num, den);
    resultDiv.innerHTML = result;
}

// yahan pe attendance nikalte hain aur message banate hain
function calculateAttendance(num, den) {
    let attendance = (num / den) * 100;
    let message = `Your current attendance is ${attendance.toFixed(2)}%.`;

    if (attendance === 75) {
        message += `<br>You're exactly at the edge! Don't miss any class now.`;
    } else if (attendance > 75) {
        message += `<br>You're above 75%. Great!`;

        // ab dekhte hain kitni classes chhod sakte ho
        let extraMissable = 0;
        while (true) {
            let newAttendance = (num / (den + extraMissable + 1)) * 100;
            if (newAttendance < 75) break;
            extraMissable++;
        }

        message += `<br>You can afford to miss <strong>${extraMissable}</strong> more classes without dropping below 75%.`;
    } else {
        // ab dekhte hain kitni classes aur attend karni padegi
        let i = 1;
        while (true) {
            let newAttendance = ((num + i) / (den + i)) * 100;
            if (newAttendance >= 75) {
                message += `<br>You need to attend <strong>${i}</strong> more classes without missing to reach 75%.`;
                break;
            }
            i++;
        }
    }

    return message;
}

// dark mode toggle handle karna
function toggleDarkMode() {
    let body = document.body;
    let icon = document.getElementById("themeIcon");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
}

// jab page load ho toh saved theme apply kar do
window.onload = () => {
    let icon = document.getElementById("themeIcon");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        icon.textContent = "☀️";
    }
};

document.getElementById("easterEgg").addEventListener("click", () => {
    // 50-50 chance
    const random = Math.random();

    if (random < 0.5) {
        // open Spotify in new tab/window
        window.open("https://open.spotify.com/artist/4jEvdgGVyDUKMFG1GukYI0?si=DtG9yOaET_2Dtkeb0_wLMw", "_blank");
    } else {
        // open random cat meme in new tab/window
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

