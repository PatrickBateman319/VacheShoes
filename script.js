let currentProgress = 0;

function updateProgress() {
    currentProgress += 0.99;
    if (currentProgress >= 200) {
        document.getElementById("progress").innerText = "200/200$";
        document.getElementById("message").innerText = "დიდი მადლობა გაწეული სამსახურისთვის, უფალი შეგეწიოთ";
        document.getElementById("donateButton").disabled = true;
    } else {
        document.getElementById("progress").innerText = currentProgress.toFixed(2) + "/200$";
    }
}
