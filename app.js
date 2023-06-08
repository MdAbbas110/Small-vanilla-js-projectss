const  coutdown = () =>{
    const coundDate = new Date ('july 08,2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = coundDate - now;
    

    //how does that time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate the differance between

    const textDay = Math.floor(gap  / day);
    const textHour = Math.floor( (gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    //updating the html text
    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
}


setInterval(coutdown , 1000)

