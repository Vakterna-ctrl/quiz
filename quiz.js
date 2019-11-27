let entertainment = document.querySelector('#Entertainment');
let quiz = document.querySelector('.quiz')
let questions = document.querySelector('.questions')
let score = document.querySelector('.score');
let button = document.querySelectorAll('button')
let history = document.querySelector('#history')
let computers = document.querySelector('#computers')
let math = document.querySelector('#math')
let animals =document.querySelector('#animals')
let mythology =document.querySelector('#mythology')
let data;
let correctNbr;

let n = 0;
let q = 0;
history.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple");
oReq.send();
})
computers.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple");
oReq.send();
})
math.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=multiple");
oReq.send();
})
animals.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple");
oReq.send();
})
mythology.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple");
oReq.send();
})
entertainment.addEventListener('click', function(e){
  e.stopPropagation();
  e.preventDefault();
  quiz.style.display = "none";
  questions.style.display="flex";
  function reqListener () {
    console.log(JSON.parse(this.response))
    let responseText =JSON.parse(this.response);
    data = responseText.results;
    render(responseText.results);
}
let oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple");
oReq.send();
})
for(let but of button){
but.addEventListener('click',function(error){
  console.log('twice')
  error.stopPropagation();
  error.preventDefault();
  let nbr = but.id*1;
  if(but.id*1 === 10){
  if(q === 9){
    n++;
    quiz.style.display = "flex";
    questions.style.display="none";
    q = 0;
    but.setAttribute('id', 'false');
    return
  }else{
  q++;
  n++;
  score.textContent = 'Score:' + n;
  but.setAttribute('id', 'false')
  render(data);
  return
}
}
})
}

function render(responseText){
  let bigSquare = document.querySelector('.bigSquare')
  let p = document.querySelector('p');
  nbrsaver =[];
  randomize()
    p.textContent = responseText[q].question;
    bigSquare.appendChild(p);
    for (var i = 0; i < button.length; i++) {
      button[i].textContent = "";
    }
    for (var i = 0; i < 3; i++) {
      button[nbrsaver[i]].textContent = responseText[q].incorrect_answers[i];
    }
    button[nbrsaver[3]].textContent = responseText[q].correct_answer;
    button[nbrsaver[3]].setAttribute('id', '10');
}
let nbrsaver =[];
let number;
function randomize(){
  nbrsaver =[];
  number;
  let array = [0,1,2,3];
  while(nbrsaver.length < 4){
  number = Math.floor(Math.random() * 4);
  if(array.indexOf(number) > -1){
    nbrsaver.push(number);
    array = array.filter(element => element != number)
  }
}
}
