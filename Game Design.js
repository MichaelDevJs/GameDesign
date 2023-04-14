//Logic for ScoreKeeper Games. 

const firstButton = document.querySelector('#btn1')
const secondButton = document.querySelector('#btn2')
const lastButton = document.querySelector('#btn3')


const firstZero = document.querySelector('#firstSpan')
const secondZero = document.querySelector('#secondSpan')


const select = document.querySelector('#selector')



let max1 = 5;
let score1 = 0;
let Gameover = false;

// First Button Logic 
firstButton.addEventListener('click', () => {
    if (!Gameover) {
        score1 += 1;

        if (score1 === max1) {
            Gameover = true;
            firstZero.style.color = 'green'
            secondZero.style.color = 'red'
            firstButton.disabled = true;
            secondButton.disabled = true;
        }
        firstZero.innerText = score1;
    }
})

let score2 = 0;


// Second Button Logic 
secondButton.addEventListener('click', () => {
    if (!Gameover) {
        score2 += 1;

        if (score2 === max1) {
            Gameover = true;
            secondZero.style.color = 'green'
            firstZero.style.color = 'red'
            secondButton.disabled = true;
            firstButton.disabled = true;

        }

    }
    secondZero.innerText = score2;
})






// Change The Value of max1 and Set ParseInt 
select.addEventListener('change', () => {
    //Max change here 
    max1 = parseInt(select.value)
    comeback();

})



// Reset Button CallBack function 
lastButton.addEventListener('click', comeback)


// Reset Button code 
function comeback() {
    Gameover = false;
    score1 = 0;
    score2 = 0;
    firstZero.innerText = 0;
    secondZero.innerText = 0;
    firstZero.style.color = 'white'
    secondZero.style.color = 'white'
    firstButton.disabled = false;
    secondButton.disabled = false;
}
