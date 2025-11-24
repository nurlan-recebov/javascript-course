let question1=prompt("which is the capital of india? a)chennai b)mumbai c)delhi d)kolkata");
let score=0
if(question1=="c" || question1=="delhi"){
alert("correct answer");
score++;
}else{
    alert("wrong answer");
}
let question2=prompt("which is the capital of tamilnadu? a)chennai b)mumbai c)delhi d)kolkata");
if(question2=="a" || question2=="chennai"){
alert("correct answer");
score++;
}else{
    alert("wrong answer");
}
let question3=prompt("which is the capital of karnataka? a)chennai b)mumbai c)bangalore d)kolkata");
if(question3=="c" || question3=="bangalore"){
alert("correct answer");
score++;
}else{
    alert("wrong answer");
}
alert("Your score is: " + score);
