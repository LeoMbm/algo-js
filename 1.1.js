let day = prompt('Type a number between 1 and 7');

while ((day < 1)|| (day > 7)) {
  day = prompt('Enter a number between One and Seven');
}

  switch(day) {

    case "1" : 
      alert('Lundi');
      break;
    case "2" : 
      alert('Mardi');
      break;
    case "3" : 
      alert('Mercredi');
      break;
    case "4" : 
      alert('Jeudi');
      break;
    case "5" : 
      alert('Vendredi');
      break;
    case "6" : 
      alert('Samedi');
      break;
    case "7" : 
      alert('Dimanche');
      break;
  }
