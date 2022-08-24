Number.prototype.addZero = function(digital){
    for( var n = this.toString(); n.length < digital; n = `0${n}`);
    return n;
}

function clock(){
    //find query selector
    let today = new Date();

    let hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    let pe = "AM";

    if(hour >= 12)
        pe = "PM";

    let dataValue = btn.getAttribute('data-format');
    if(dataValue == 12){
        hour = hour > 12 ? hour % 12 : hour;     
    }

    document.querySelector('.hour').innerHTML = hour.addZero(2);
    document.querySelector('.minutes').innerHTML = min.addZero(2);
    document.querySelector('.seconds').innerHTML = sec.addZero(2);
    document.querySelector('.preiod').innerHTML = pe;

    // set Date
    let dayNumber = today.getDate(),
        dayName = today.toLocaleString("en-US" , {"weekday": "long"}),
        mounth = today.toLocaleString("en-US", {"month": "short"}),
        yaer = today.getFullYear();

    document.querySelector(".dayname").innerHTML = dayName;
    document.querySelector(".daynum").innerHTML = dayNumber;
    document.querySelector(".mounth").innerHTML = mounth;
    document.querySelector(".yaer").innerHTML = yaer;
     
}

let upDataClock = setInterval(clock, 1000);

let btn = document.querySelector('.menu-format-btn');

btn.addEventListener('click',() =>{
    btn.classList.toggle('active');

    let dataValue = btn.getAttribute('data-format');

    if(dataValue == "12"){
        btn.setAttribute("data-format", "24");
    }else{
        btn.setAttribute("data-format", "12");
    }
})

let menuDot = document.querySelector('.dot-menu');
let menuBtn = document.querySelector('.dot-menu-btn');

menuBtn.addEventListener("click", () =>{
    menuDot.classList.toggle('actov');
})
