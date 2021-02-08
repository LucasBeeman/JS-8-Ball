var userName = prompt('what is your name?');
var userQuestion = prompt('do you have any questions?');

document.getElementById('header').innerHTML = (`${userName} asked ${userQuestion}`)

const randNumber = Math.floor(Math.random() * 8);

var eightball = "";

switch (randNumber)
{
case 0:
    eightball = 'It is certain';
    break;
case 1:
    eightball = 'It is decidedly so';
    break;
case 2:
    eightball = "Reply hazy try again";
    break;
case 3:
    eightball = "Cannot predict now";
    break;
case 4:
    eightball = "Do not count on it";
    break;
case 5:
    eightball = "My sources say no";
    break;
case 6:
    eightball = "Outlook not so good";
    break;
case 7:
    eightball = "Signs point to yes";
    break;
default:
    eightball = "There was an error, try again";
    break;
}

document.getElementById("answer").innerHTML = `The magic 8 ball says ${eightball}`