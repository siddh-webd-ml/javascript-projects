const randomcolour = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color
}
let intervalId;
const startChangingColor= () =>{
    changeBg = ()=>{
        document.body.style.backgroundColor = randomcolour()
    }
    if(!intervalId){
        intervalId = setInterval(changeBg, 1000)
    }
}
const stopChangingColor= () => {
    clearInterval(intervalId)
    intervalId = null;
}
