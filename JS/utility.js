let count = 0

document.getElementById("theme-changer-btn")
    .addEventListener("click", function () {
        const colorList = ["#ACDDDE", "#CAF1DE", "#E1F8DC", "#FEF8DD", "#FFE7C7", "#F7D8BA"];
        // let randomIndex = Math.round(Math.random()*(5-0));
        // console.log(randomIndex)
        let randomIndex = count%6;
        document.body.style.backgroundColor = colorList[randomIndex];
        count += 1;
    })

document.getElementById("mobile-fix-btn")
    .addEventListener("click", function(){

        alert("Board updated Succesfully")
        document.getElementById("mobile-fix-btn").disabled = true;
        document.getElementById("remaining-task-count").innerText -= 1;
        
        let pointsCount = parseInt(document.getElementById("points-count").innerText);
        document.getElementById("points-count").innerText = pointsCount + 1;
        
    })