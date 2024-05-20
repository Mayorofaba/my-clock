let ss = document.getElementById("ss")
let hr = document.getElementById("hr")
let mn = document.getElementById("mn")

setInterval(function () {
    let day = new Date();
    let hrs = day.getHours() * 30;
    let mns = day.getMinutes() * 6;
    let sss = day.getSeconds() * 6;

    hr.style.transform = `rotatez(${hrs + (mns / 12)}deg)`
    mn.style.transform = `rotatez(${mns}deg)`
    ss.style.transform = `rotatez(${sss}deg)`

})



// digital

let hour = document.getElementById("hour");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec")

let thour = document.getElementById("hours")
let tmins = document.getElementById("minss")
let tsec = document.getElementById("secs")








// the digital time

setInterval(function () {


    let today = new Date()

    thour.innerHTML = today.getHours();
    tmins.innerHTML = today.getMinutes();
    tsec.innerHTML = today.getSeconds();

    if (thour.innerHTML < 10) {
        thour.innerHTML = `0${thour.innerHTML}`
    }
    if (tmins.innerHTML < 10) {
        tmins.innerHTML = `0${tmins.innerHTML}`
    } if (tsec.innerHTML < 10) {
        tsec.innerHTML = `0${tsec.innerHTML}`
    }





})




// using the buttons

let myTimer;
// paused = false;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let end = document.getElementById("end");


start.addEventListener("click", function () {



    // set interval for timer


    myTimer =
        setInterval(function () {


            if (sec.innerHTML > 59) {
                mins.innerHTML++;
                sec.innerHTML = 0;

                if (mins.innerHTML > 59) {
                    hour.innerHTML++;
                    mins.innerHTML = 0;

                }

                if (hour.innerHTML > 23) {
                    hour.innerHTML = 0

                }

            } else {
                sec.innerHTML++

            }

            // ///////adding zero before a number less than 10

            hour.innerHTML = hour.innerHTML.toString().padStart(2, '0');
            mins.innerHTML = mins.innerHTML.toString().padStart(2, '0');
            sec.innerHTML = sec.innerHTML.toString().padStart(2, '0');
        }, 1000
        )



}

)


// pause
pause.addEventListener('click', function () {

    // set interval for timer




    clearInterval(myTimer);





    // if (paused) {

    //     paused = false;
    //     this.textContent = 'Pause';
    // } else {
    //     paused = true;
    //     this.textContent = 'Resume';
    // }
});


end.addEventListener("click", function () {
    clearInterval(myTimer)
    hour.innerHTML = `00`
    mins.innerHTML = `00`

    sec.innerHTML = `00`;
})



