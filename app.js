const aKey = document.getElementById("aKey");
const keyList = document.querySelectorAll(".key")


for(let i = 0; i<keyList.length;i++){
    keyList[i].addEventListener("click",(e) =>{ 
                const audio = e.currentTarget.children[2].children[0]
                const currentKey = e.currentTarget
                audio.play()

                currentKey.classList.add("striked")
                setTimeout(()=>{currentKey.classList.remove("striked")}, 100)
                
            })
        }




        
function play(){
    Audio.play()
}