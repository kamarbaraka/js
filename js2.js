let toDay = new Date();
// console.log(toDay.getDay())

switch (toDay.getDay() == 0 || toDay.getDay() == 6){
    case 1:
        console.log('its a weekend');
        break;

    default:
        console.log('its a weekday');
        break;
}