const open = document.getElementById("item")
const close = document.getElementById("close")
const modal = document.getElementsByClassName("modal")[0]
    

open.addEventListener("click", function() {
    modal.classList.remove("place")
    open.classList.add("place")
})

close.addEventListener("click", function() {
    modal.classList.add("place")
    open.classList.remove("place")
})
        



