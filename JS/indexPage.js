
// background color changing button
// let count = 0;
document.getElementById("theme-changer-btn")
    .addEventListener("click", function () {
        const colorList = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA","#B3C7FF", "#DCE4FF", "#F4F7FF"];
        let randomIndex = Math.round(Math.random()*(8-0));
        // console.log(randomIndex)

        // let randomIndex = count % 9;
        document.body.style.backgroundColor = colorList[randomIndex];
        // count += 1;
    })

// all the complete buttons
document.getElementById("mobile-fix-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("mobile-fix-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })
document.getElementById("dark-mode-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("dark-mode-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })
document.getElementById("optimize-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("optimize-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })
document.getElementById("add-emoji-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("add-emoji-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })
document.getElementById("integrate-AI-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("integrate-AI-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })
document.getElementById("job-searching-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("job-searching-btn");
        allTaskOfCompleteButton(idOfButton, event);
    })

function allTaskOfCompleteButton(btnId,clickedEvent) {
    btnId.disabled = true;
    document.getElementById("remaining-task-count").innerText -= 1;

    let pointsCount = parseInt(document.getElementById("points-count").innerText);
    document.getElementById("points-count").innerText = pointsCount + 1;



    const parent = clickedEvent.target.parentNode.parentNode.parentNode
    const taskTitle = parent.querySelector(".card-title").innerText;


    let promptParagraph = document.createElement('p');
    promptParagraph.classList.add("bg-[#F4F7FF]", "p-3", "rounded-lg", "mb-5")
    promptParagraph.innerText = `You have Completed The Task ${taskTitle} at ${currentTime}`

    const historyContainer = document.getElementById("history-container");
    historyContainer.appendChild(promptParagraph);


    if (document.getElementById("remaining-task-count").innerText == 0) {
        alert("Congrats!! You have completed all the current task");
    }
}
// clear history button
document.getElementById("clear-history-btn").addEventListener("click", function () {
    document.getElementById("history-container").innerHTML = "";
})


document.getElementById("discover-btn")
    .addEventListener("click", function(){
        window.location.href = "blog.html";
    })