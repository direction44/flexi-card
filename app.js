let allCards=document.querySelector(".card-container")
let frame=document.querySelectorAll(".frame")

allCards.addEventListener("click",(e)=>{
    if(e.target.classList.contains("frame"))
    {
        deleteFocused()
        e.target.classList.add("focused")
    }
})

function deleteFocused()
{
    frame.forEach((frames)=>{
        frames.classList.remove("focused")
    })
}