let count = 0

document.getElementById("theme-changer-btn")
    .addEventListener("click", function () {
        const colorList = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA"];
        // let randomIndex = Math.round(Math.random()*(5-0));
        // console.log(randomIndex)
        let randomIndex = count % 6;
        document.body.style.backgroundColor = colorList[randomIndex];
        count += 1;
    })

document.getElementById("mobile-fix-btn")
    .addEventListener("click", function (event) {
        alert("Board updated Succesfully");
        const idOfButton = document.getElementById("mobile-fix-btn");
        allTaskOfCompleteButton(idOfButton);
    })


function allTaskOfCompleteButton(btnId) {
    btnId.disabled = true;
    document.getElementById("remaining-task-count").innerText -= 1;

    let pointsCount = parseInt(document.getElementById("points-count").innerText);
    document.getElementById("points-count").innerText = pointsCount + 1;



    const parent = event.target.parentNode.parentNode.parentNode
    const taskTitle = parent.querySelector(".card-title").innerText;


    let promptParagraph = document.createElement('p');
    promptParagraph.classList.add("bg-[#F4F7FF]", "p-3", "rounded-lg")
    promptParagraph.innerText = `You have Completed The Task ${taskTitle} at ${currentTime}`

    const historyContainer = document.getElementById("history-container");
    historyContainer.appendChild(promptParagraph)
}

// document.getElementById("card-contend")
//     .addEventListener("click", function(){
//         console.log("card contend clicked")
//     })
