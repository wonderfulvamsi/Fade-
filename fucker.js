let f = 0
console.log("fucker is on baby!")

fuck = (el) => {
    try {
        console.log(el.button)
        if (f === 1 && el.button === 0) {
            el.preventDefault(); //prevents redirection
            console.log("You fucked " + el.target)
            el.target.style.display = "none"
            f = 0
        }
    }
    catch (e) {
        console.log("Cannot fuck " + e)
    }
}


document.addEventListener("click", fuck)

document.addEventListener("keydown", (w) => {
    if (w.key === 'f') {
        f = 1
    }
})
document.addEventListener("keyup", (w) => {
    if (w.key === 'f') {
        f = 0
    }
})

window.onmouseover = (p) => {
    if (f === 1) {
        original_border = p.target.style.border
        original_borderColor = p.target.style.borderColor
        //highlights
        p.target.style.border = "0.15rem solid"
        p.target.style.borderColor = "red"
        setTimeout(() => {
            p.target.style.border = original_border
            p.target.style.borderColor = "transparent"
        }, 600)
    }
}