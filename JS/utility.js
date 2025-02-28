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

