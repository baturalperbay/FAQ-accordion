

let acc = document.getElementsByClassName("accordion");
let i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let parentFAQ = this.closest(".FAQ-info");

        let panel = null;
        for (let i = 0; i < parentFAQ.childNodes.length; i++) {
            if (parentFAQ.childNodes[i].className == "answer") {
                panel = parentFAQ.childNodes[i];
                break;
            }
        }

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

