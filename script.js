// function numCube (a) {
//     a = a**3;
//     return a;
// } 

// console.log(numCube(2));

// function numCalculator (a, b, c) {
//         (a + b) / c;
//         return (a + b) / c;
// }

// console.log(numCalculator(11, 13, 2));

// function dayName (a) {
//     switch (a) {
//         case '1':
//         console.log ('Понеділок');
//         break;
//     }
//     switch (a) {
//         case '2':
//         console.log ('Вівторок');
//         break;
//     }
//     switch (a) {
//         case '3':
//         console.log ('Середа');
//         break;
//     }
//     switch (a) {
//         case '4':
//         console.log ('Четверг');
//         break;
//     }
//     switch (a) {
//         case '5':
//         console.log ('нарешті Пятниця');
//         break;
//     }
//     switch (a) {
//         case '6':
//         console.log ('Субота');
//         break;
//     }
//     switch (a) {
//         case '7':
//         console.log ('Неділя');
//         break;
//     default:
//         break;
//     }
   
// }

// console.log(dayName(prompt('напиши цифру від 1 до 7')));

// function factorial(n){
//     if (n==1) return 1;
//     else return n*factorial(n-1);		
//     }
//     let userNum=+prompt('введіть число P.S."не велике)))"');
//     console.log(factorial(userNum));

// function allInSec (a , b, c) {
//     (a * 3600) + (b * 60) + c;
//     return (a * 3600) + (b * 60) + c;
// }

// let hours = prompt('напишіть кількість годин');
// let minutes = prompt('напишіть кількість хвилин');
// let second = prompt('напишіть кількість секунд');

// console.log(allInSec(hours,minutes,second ));


// function allInHours (sec) {
//     let h = 
//     if (h > 23) {
//         alert('більше ніж одна доба');
//     }
//     let m = Math.floor(sec % 3600 / 60);
//     let s = Math.floor(sec % 3600 % 60);
    
//     time = h + ':' + m + ':' + seconds;
//     return time;

// }

// console.log (allInHours(prompt('write something')))
// let time ;
function allInHours (sec) {
  if (sec <= 86399) {
    hours = Math.floor(sec / 3600);
    if (hours < 10) {
      hours = '0' + hours;
    };

    // let divisorForMin = sec % (60 * 60);
    min = Math.floor(sec % 3600 / 60);
    if (min < 10) {
      min = '0' + min;
    };

    // let divisorForSec = divisorForMin % 60;
    sec = Math.floor(sec % 3600 % 60);
    if (sec < 10) {
      sec = '0' + sec;
    };
    
    console.log(hours+':'+min+':'+sec);
  } else {
    console.log('Більше одного дня');
  };
  return hours+':'+min+':'+sec;
};
allInHours(4846);