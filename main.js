const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const stopWatch = document.querySelector(".stop_watch");
const time = document.querySelector(".time");
const archiveBtn = document.querySelector(".archive");
const listHistory = document.querySelector(".list_history");
const infoAnswerSign = document.querySelector(".info");
const modalShadow = document.querySelector(".modal_shadow");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close_modal");

let seconds = 0;
//------------
let my_interval1;
//------------
let TimesArray=[];

const showTime =()=>{
    //let hours_temp = Math.trunc((seconds/60)/60);
    let minutes_temp = Math.trunc(seconds/60);
    let seconds_temp = seconds % 60;
    //stopWatch.textContent = `${hours_temp}:${String(minutes_temp).padStart(2, '0')}.${String(seconds_temp).padStart(2, '0')}`;
    stopWatch.textContent = `${minutes_temp}:${String(seconds_temp).padStart(2, '0')}`;
}


const updateAndShowTime =()=>{
    seconds++;
    showTime();
}

const startStoper = ()=>{
    clearInterval(my_interval1);
    
    //-------------
    my_interval1 = setInterval(()=>{

        updateAndShowTime();        //kod który aktualizauje i wyświetla aktualny czas
    },50);
    //------------
    
    //------------
}


const stopStoper =()=>{
    clearInterval(my_interval1);
    time.style.visibility ="visible";
    time.textContent = stopWatch.textContent;  
    TimesArray.push(stopWatch.textContent);
    seconds=0;
    showTime();
    
}

const pauseStoper =()=>{
    clearInterval(my_interval1);
}


const addToArchivum =()=>{

    let number =1;

    listHistory.innerHTML="";

    TimesArray.forEach(time=>{
        const li = document.createElement("li");
        li.innerHTML =`Pomiar nr ${number} wynosi: <span>${time}</span>`;
        listHistory.appendChild(li);
        number++;              
    })   


}

const resetStoper =()=>{
    TimesArray =[];
    clearStoper();
        
}

const clearStoper=()=>{
    clearInterval(my_interval1);
    time.style.visibility ="hidden";
    listHistory.textContent = "";
    seconds=0;
    showTime();
    
}



startBtn.addEventListener("click", startStoper);
stopBtn.addEventListener("click", stopStoper);
pauseBtn.addEventListener("click", pauseStoper);
resetBtn.addEventListener("click",resetStoper);
archiveBtn.addEventListener("click",addToArchivum);




