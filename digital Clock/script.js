 const hourEl = document.getElementById("hour")
 const minutesEl = document.getElementById("minutes")
 const secoundsEl = document.getElementById("secounds")
 const ampmEl = document.getElementById("ampm")


 //create a functions to get the time from  the desktop

 function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }

   // statments to make it 0 before the number that is less than 10
   h = h < 10 ? "0" + h  : h
   m = m < 10 ? "0" + m  : m
   s = s < 10 ? "0" + s  : s

   
    hourEl.innerText = h;
    minutesEl.innerText = m
    secoundsEl.innerText = s
    ampmEl.innerText = ampm;
    //set time out method
    setTimeout(() =>{
      updateClock()
    }, 1000)


 }
 updateClock()