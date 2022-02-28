document.addEventListener("DOMContentLoaded", main) 

function main () {
    const switcher = document.getElementById("switcher")
    switcher.addEventListener("click", toggle)
}

function toggle () {
    const switcher = document.getElementById("switcher")
    const lamp = document.getElementById("lamp")

    if(lamp.style.backgroundImage === 'url("./media/lampochki-on.png")') {
        lamp.style.backgroundImage = 'url("./media/lampochki_off.png")'
        switcher.style.backgroundImage = 'url("./media/switcher_off.png")'
    } else {
        lamp.style.backgroundImage = 'url("./media/lampochki-on.png")'
        switcher.style.backgroundImage = 'url("./media/switcher_on.png")'
    }

}
    