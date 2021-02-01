const dayString = (day) => {
  if (day === '1' || day === '21') {
    day += 'st';
  } else if (day === '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }
  return day
}



const talkingCalendar = (string) => {
  let year = "";
  let monthNum = "";
  let monthString = "";
  let day = "";
  for (let y = 0; y < 4; y++) {
    year += string[y];
  }
  for (let m = 5; m < 7; m++) {
    monthNum += string[m];
  }
  for (let d = 8; d <= 9; d++) {
    day += string[d];
  }
  if (Number(day) < 10) {
    day = day[1]

  }

  switch (monthNum) {
    case '01':
      monthString = "January";
      break;
    case '02':
      monthString = "February";
      break;
    case '03':
      monthString = "March";
      break;
    case '04':
      monthString = "April";
      break;
    case '05':
      monthString = "May";
      break;
    case '06':
      monthString = "June";
      break;
    case '07':
      monthString = "July";
      break;
    case '08':
      monthString = "August";
      break;
    case '09':
      monthString = "September";
      break;
    case '10':
      monthString = "October";
      break;
    case '11':
      monthString = "November";
      break;
    case '12':
      monthString = "December";
      break;
  }

  return `${monthString} ${dayString(day)}, ${year}`;
}


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
