function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculate1() {
    const percent = document.getElementById('percent-in').value;
    const num = document.getElementById('num-in').value;
    if (percent && num) {
        const result = (percent / 100) * num;
        document.getElementById('result1').innerText = `Result: ${result}`;
    } else {
        document.getElementById('result1').innerText = "Please enter both values.";
    }
}

function calculate2() {
    const x = document.getElementById('x-in').value;
    const y = document.getElementById('y-in').value;
    if (x && y) {
        const result = (x / y) * 100;
        document.getElementById('result2').innerText = `${result.toFixed(2)}%`;
    } else {
        document.getElementById('result2').innerText = "Please enter both values.";
    }
}

function calculate3() {
    const from = document.getElementById('from-in').value;
    const to = document.getElementById('to-in').value;
    if (from && to) {
        const change = to - from;
        const result = (change / from) * 100;
        const type = result >= 0 ? 'increase' : 'decrease';
        document.getElementById('result3').innerText = `Percentage ${type}: ${result.toFixed(2)}%`;
    } else {
        document.getElementById('result3').innerText = "Please enter both values.";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName('tab-link')[0].click();
});
