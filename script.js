let timerInterval = null
// start_timer_function

function startTimer(){
  const hour = parseInt(document.getElementById('hour').value);
  
  const min = parseInt(document.getElementById('min').value);
  const sec = parseInt(document.getElementById('sec').value);
    console.log(hour,min,sec)



  let totalSeconds = hour * 3600 + min * 60 + sec;
    console.log(totalSeconds)
  if (totalSeconds <= 0){
    alert("Please enter a valid time")
    return;
  }
  

timerInterval = setInterval(myTimer, 1000);

  function myTimer() {
    const hoursLeft = Math.floor(totalSeconds / 3600)
    const minutesLeft = Math.floor((totalSeconds % 3600)/60)
    const secondsLeft = totalSeconds % 60

    document.getElementById('timer').innerHTML = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`

    if(totalSeconds <= 0){
      clearInterval(timerInterval)
      
      document.getElementById('timer').innerHTML = `Time's up`
      document.getElementById('audio').play();
      alert(`Time's up`)
    }
    else{
      totalSeconds--;
    }
  }
}



// stop_timer_function

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').innerHTML='Timer stopped';
  }

// 
function enterKeyPressed(event) {
  if (event.keyCode == 13) {
     console.log("Enter key is pressed");
     return true;
  } else {
     return false;
  }
}

function resetTimer(){
  document.getElementById("hour").value=Number(0);
  document.getElementById("min").value=Number(0);
  document.getElementById("sec").value=Number(0);
  clearInterval(timerInterval);
  document.getElementById('timer').innerHTML='Timer Stopped > Give new values';
}