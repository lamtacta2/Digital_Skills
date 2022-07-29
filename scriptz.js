const questionEl = document.getElementById('questiona')

const a1_text = document.getElementById('1_text')
const a2_text = document.getElementById('2_text')
const a3_text = document.getElementById('3_text')
const a4_text = document.getElementById('4_text')
const a5_text = document.getElementById('5_text')
const answerEls = document.querySelectorAll('.answer')

let questions = [ObjectList, SchooList, classList]

let i = 0
let c = 0
let indexx = 0

showQuetions(0,0);

function showQuetions(index,i){
    a = questions[i][index].numb
    if (a == 5){
        document.getElementById('d1').style.visibility = "visible"
        document.getElementById('e1').style.visibility = "visible"
        a4_text.style.visibility = "visible"
        a5_text.style.visibility = "visible"
        questionEl.innerText = questions[i][index].No + ". " + questions[i][index].question
        a1_text.innerText = questions[i][index].options[0]
        a2_text.innerText = questions[i][index].options[1]
        a3_text.innerText = questions[i][index].options[2]
        a4_text.innerText = questions[i][index].options[3]
        a5_text.innerText = questions[i][index].options[4]
    } else if(a == 4){
        document.getElementById('d1').style.visibility = "visible"
        a4_text.style.visibility = "visible"
        questionEl.innerText = questions[i][index].No + ". " + questions[i][index].question
        a1_text.innerText = questions[i][index].options[0]
        a2_text.innerText = questions[i][index].options[1]
        a3_text.innerText = questions[i][index].options[2]
        a4_text.innerText = questions[i][index].options[3]
        a5_text.style.visibility = "hidden"
    } else{
        questionEl.innerText = questions[i][index].No + ". " + questions[i][index].question
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
        showQuetions(indexx,i); //calling showQestions function
    }

    if(c == 2){
        TT_btn.style.visibility = "hidden"
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
