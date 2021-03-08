  function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  createDaysOfTheWeek();
  
  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const numbersDays = dezDaysList[index];
      const daysListNumber = document.createElement('li');
      daysListNumber.innerHTML = numbersDays;
      document.querySelector('#days').appendChild(daysListNumber);

      daysListNumber.className = 'day';
      
      const holidayDays = [24, 25, 31];
      for (let indexHoliday = 0; indexHoliday < holidayDays.length; indexHoliday += 1) {
        const numbersHoliday = holidayDays[indexHoliday];
        if (numbersDays === numbersHoliday) {
          daysListNumber.className = 'holiday';
        }
      }

      const fridayDays = [4, 11, 18, 25];
      for (let indexFriday = 0; indexFriday < fridayDays.length; indexFriday += 1) {
        const numbersFridayDays = fridayDays[indexFriday];
        if (numbersDays === numbersFridayDays) {
          daysListNumber.className = 'day-friday';
        }
      }
    }
  }
  createDaysOfTheMonth();
  console.log(document.querySelectorAll('.holiday'));
  console.log(document.querySelectorAll('.day-friday'));
  console.log(document.querySelectorAll('.day'));

  function btnHoliday(string) {
    let buttonFriday = document.createElement("button");
    buttonFriday.innerHTML = string;
    buttonFriday.id = "btn-holiday",
    document.querySelector('.buttons-container').appendChild(buttonFriday);
  }
  btnHoliday('Feriados');

  
  
  
  
  
  //buttonFriday.addEventListener('click', function)
