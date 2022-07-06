function displayTime(){
    var dateTime = new Date();

    var day;
    switch (dateTime.getDay()) {
        case 0:
            day = "Sunday,";
            break;
        case 1:
            day = "Monday,";
            break;
        case 2:
            day = "Tuesday,";
            break;
        case 3:
            day = "Wednesday,";
            break;
        case 4:
            day = "Thursday,";
            break;
        case 5:
            day = "Friday,";
            break;
        case 6:
            day = "Saturday,";
            break;
    }

    var date = dateTime.getDate();
    var mon = dateTime.getMonth()+1;
    var year = dateTime.getFullYear();

    document.getElementById('day').innerHTML = day;
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = mon;
    document.getElementById('year').innerHTML = year;

    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);
