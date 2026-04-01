const progressElement = document.querySelector(".progress")
window.onscroll = () => scrollProgress()

function scrollProgress() {
    const scrollHight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight
    const pageHight = scrollHight - clientHeight;
    const scrollTop = document.documentElement.scrollTop
    const scroll = (scrollTop / pageHight) * 100
    progressElement.style.visibility = "visible"
    progressElement.style.width = scroll + "%"

}