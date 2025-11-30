let question1=prompt('capital of India?')
let point=0
if (question1.toLowerCase()=='delhi') {
alert('correct answer')
point=point+1
}
else{
    alert('wrong answer')
}
let question2=prompt('5+6=?')
if (question2=='11'){
    alert('correct answer')
    point=point+1
} else{
    alert('wrong answer')
}
let question3=prompt('capital of USA?')
if (question3.toLowerCase()=='washington dc'){
    alert('correct answer')
    point=point+1
} else{
    alert('wrong answer')
}
if (point==3) {
    alert('you are genius')
}else if (point==2) {
    alert('you are good')
}else if (point==1) {
    alert('you need to improve')
}else{
    alert('you are fail')
}