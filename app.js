const aKey = document.getElementById("aKey");
const keyList = document.querySelectorAll(".key")

for(let i = 0; i<keyList.length;i++){
    keyList[i].addEventListener("click",(e) =>{ 
        playKey(i)
                
            })
        }

document.addEventListener("keydown", (e)=>{
    let audio
    // console.log(e.code)
    switch(e.code){
        case "KeyA":
            playKey(0)
            break;
        case "KeyS":
            playKey(1)
            break;
        case "KeyD":
            playKey(2)
            break;
        case "KeyF":
            playKey(3)
        break;
        case "KeyG":
            playKey(4)
        break;
        case "KeyH":
            playKey(5)
        break;
        case "KeyJ":
            playKey(6)
        break;
        case "KeyK":
            playKey(7)
        break;
        case "KeyL":
            playKey(8)
        break;
        }
})

        
function play(){
    Audio.play()
}

function playKey(i){
    audio = keyList[i].children[2].children[0]
    audio.play()
    keyList[i].classList.add("striked")
    setTimeout(()=>{keyList[i].classList.remove("striked")}, 100)
}
