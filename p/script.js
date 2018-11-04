//select date?

//birth date
var birthday = new Date("Aug 3, 1993 00:00:00").getTime();

//Retire age for that year?
var retireAge = 67;
//Years until retire age?

var countDownDate = new Date("Sep 1, 2018 18:08:00").getTime(); // TODO= birthday - retireAge;

var clock = new Vue({
  el: '#clock',
  data: {
    time: 'XXXX:XX:XX',
    date: countDownDate
  }
});

function zeroPadding(num, digit) {
  var zero = '';
  for (var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}

// Update the count down every 1 second
var updateTime = function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
  clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(updateTime);
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2);
  }
}

updateTime();
setInterval(updateTime, 1000);
