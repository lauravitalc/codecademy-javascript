const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if(day === 'tuesday') {
      return 13;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 12;
    } else if (day === 'friday') {
      return 9;
    } else if (day === 'saturday') {
      return 5;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return "Error!";
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours('monday') +  getSleepHours('tuesday') +  getSleepHours('wednesday') +  getSleepHours('thursday') +  getSleepHours('friday') +  getSleepHours('saturday') +  getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    } else if(actualSleepHours > idealSleepHours){
      console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed this week.")
    } else if(actualSleepHours < idealSleepHours) {
      console.log("You should get some rest, because you slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
    }
    else {
      console.log("Error! Something went wrong!")
    }
  }
  
  calculateSleepDebt();