//selecting all required elements
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


const timeText = document.getElementById('time_status')
const timeCount = document.getElementById('sec')
const time_line = document.getElementById('line')

let timeValue =  120;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

let currentQuiz = 0
let score = 0

start_btn.style.visibility = 'hidden'

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    demo_box.style.visibility = 'hidden'
    document.getElementById('a1').style.visibility = "hidden"
    document.getElementById('b1').style.visibility = "hidden"
    document.getElementById('c1').style.visibility = "hidden"
    document.getElementById('d1').style.visibility = "hidden"
    document.getElementById('e1').style.visibility = "hidden"
    a1_text.style.visibility = "hidden"
    a2_text.style.visibility = "hidden"
    a3_text.style.visibility = "hidden"
    a4_text.style.visibility = "hidden"
    a5_text.style.visibility = "hidden"
    start_btn.style.visibility = 'hidden'
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    window.location.reload(); //reload the current window
    location.href = "./index.html";
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing 1 parameter to queCounter
    startTimer(timeValue); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function

}


const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 120; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Thời gian"; //change the text of timeText to Time Left
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
    location.href = "./index.html";
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

function showQuetions(index){
    questionEl.innerText = questions2[index].numb + ". " + questions2[index].question
    a_text.innerText = questions2[index].options[0]
    b_text.innerText = questions2[index].options[1]
    c_text.innerText = questions2[index].options[2]
    d_text.innerText = questions2[index].options[3]
    next_btn.classList.add("show");
}


function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore >= 1){ 
        let scoreTag = '<span>Bạn có hiểu biết về nền tảng cơ bản của kỹ năng số</span>';
        scoreText.innerHTML = scoreTag;
    }else{ 
        let scoreTag = '<span>Bạn cần học nhiều về kỹ năng số</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        // timeCount.textContent = time; //changing the value of timeCount with time value
        timeCount.innerText = time;
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            // timeCount.textContent = "0" + addZero; //add a 0 before time value
            timeCount.innerText = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            // timeText.textContent = "Hết thời gian"; //change the time text to time off
            timeText.innerText = "Hết thời gian"; //change the time text to time off
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 200);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions2.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}



function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

next_btn.onclick = ()=>{
    if(ketqua() == questions2[que_count].answer){
        userScore++;
    }
    deselectAnswers()
    if(que_count < questions2.length - 1){ 
        que_count++; 
        que_numb++;
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Thời gian"; //change the timeText to Time Left
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

function ketqua(){
    {
        let answera
        let aws = [document.getElementById('a'),
        document.getElementById('b'),
        document.getElementById('c'),
        document.getElementById('d')]

        let text = [a_text,
            b_text,
            c_text,
            d_text]
    
        for(let s = 0; s < 4; s++){
            if (aws[s].checked){
                    answera = text[s].innerText;
                break;
            }
        }
        return answera
    }
}



// ---------------------
const questionEla = document.getElementById('questiona')
const a1_text = document.getElementById('1_text')
const a2_text = document.getElementById('2_text')
const a3_text = document.getElementById('3_text')
const a4_text = document.getElementById('4_text')
const a5_text = document.getElementById('5_text')


let questions = [ObjectList, SchooList, classList]

let i = 0
let c = 0
let indexx = 0

showQuetionsa(0,0);

function showQuetionsa(index,i){
    a = questions[i][index].numb
    if (a == 5){
        document.getElementById('d1').style.visibility = "visible"
        document.getElementById('e1').style.visibility = "visible"
        a4_text.style.visibility = "visible"
        a5_text.style.visibility = "visible"
        questionEla.innerText = questions[i][index].No + ". " + questions[i][index].question
        a1_text.innerText = questions[i][index].options[0]
        a2_text.innerText = questions[i][index].options[1]
        a3_text.innerText = questions[i][index].options[2]
        a4_text.innerText = questions[i][index].options[3]
        a5_text.innerText = questions[i][index].options[4]
    } else if(a == 4){
        document.getElementById('d1').style.visibility = "visible"
        a4_text.style.visibility = "visible"
        questionEla.innerText = questions[i][index].No + ". " + questions[i][index].question
        a1_text.innerText = questions[i][index].options[0]
        a2_text.innerText = questions[i][index].options[1]
        a3_text.innerText = questions[i][index].options[2]
        a4_text.innerText = questions[i][index].options[3]
        a5_text.style.visibility = "hidden"
    } else{
        questionEla.innerText = questions[i][index].No + ". " + questions[i][index].question
        a1_text.innerText = questions[i][index].options[0]
        a2_text.innerText = questions[i][index].options[1]
        a3_text.innerText = questions[i][index].options[2]
        document.getElementById('d1').style.visibility = "hidden"
        document.getElementById('e1').style.visibility = "hidden"
        a4_text.style.visibility = "hidden"
        a5_text.style.visibility = "hidden"
    }
}


TT_btn.onclick = ()=>{

    test = Check();

    if ( test == "Tiểu học."){
        indexx = 1
    } else if(test == "Trung học cơ sở."){
        indexx = 2
    } else{
        indexx = 0
    }

    if(c < 2){ //if question count is less than total question length
        c++; //increment the que_count value
        i++;
        showQuetionsa(indexx,i); //calling showQestions function
    }

    if(c == 2){
        TT_btn.style.visibility = 'hidden'
        start_btn.style.visibility = 'visible'
    }

    clearaws()
}

function Check(){
    let answera
    let aws = [document.getElementById('a1'),
    document.getElementById('b1'),
    document.getElementById('c1'),
    document.getElementById('d1'),
    document.getElementById('e1')]

    let text = [a1_text,
        a2_text,
        a3_text,
        a4_text,
        a5_text]

    for(let s = 0; s < 5; s++){
        if (aws[s].checked){
                answera = text[s].innerText;
            break;
        }
    }
    return answera
}

function clearaws(){
    let aws = [document.getElementById('a1'),
    document.getElementById('b1'),
    document.getElementById('c1'),
    document.getElementById('d1'),
    document.getElementById('e1')]

    for(let s = 0; s < 5; s++){
        if (aws[s].checked){
                aws[s].checked = false
            break;
        }
    }
}