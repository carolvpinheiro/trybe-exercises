/*
 
  function createHolidayDays() {
    const holidayDays = [24, 25, 31];
    let daysMonth = document.querySelectorAll('.day');

    for (let index = 0; index < daysMonth.length; index += 1) {
      for (let indexHoliday = 0; indexHoliday < holidayDays.length; indexHoliday += 1) {
        if (daysMonth[index] === holidayDays[indexHoliday]) {
          daysMonth.className = 'day-holiday'
        }
      } 
    }
  }
  console.log(createHolidayDays());
  console.log(document.querySelectorAll('.day'));
  
  function createFridayDays() {
    const fridayDays = [4, 11, 18, 25];
    let daysMonth = document.querySelectorAll('.day');

    for (let key in daysMonth) {
      let eachDayMonth = daysMonth[key];
      for(let index = 0; index < fridayDays.length; index += 1) {
        if (eachDayMonth === fridayDays[index]) {
          eachDayMonth.className = 'day-friday';
        }
      }
    }
  }
  console.log(createFridayDays());
  console.log(document.querySelectorAll('.day'));
*/  