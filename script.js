/**
 * CRIAR UM SLOT MACHINE --- GAMBLE DEV
 * 
 *  criar um array para os slots [logo dev's JS CSS HTML...]
 *  criar um montante (saldo) para apostas iniciais $50
 *  criar uma quantia para apostas $5
 *  criar um array de valores quando for ganhador
 *  ao clicar no botão SPIN
 *      verificar se montante é maior que $5
 *          se sim rodar os slots
 *              retirar a quantia da aposta do montante
 *          se nao 
 *              exibir mensagem saldo insuficiente, você perdeu!
 *              habilitar botão replay
 *      trocar de SPIN para STOP no botão
 *          se clicar em STOP parar de rodar os slots
 *      voltar de STOP para SPIN
 *  verificar se a sequencia é ganhadora ou não
 *      se sim aumentar a pontuação referente em array ganhador
 *      se não continuar
 */

let amount = 50;
let bet = 5;
let jackpot = [5, 10, 25, 50];

let slotItens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getBalance = document.getElementById('balance');
const createBalance = document.createElement('h3');
createBalance.innerText = amount;
getBalance.appendChild(createBalance);
const getBet = document.getElementById('bet');
const createBet = document.createElement('h3');
createBet.innerText = bet;
getBet.appendChild(createBet);


function getRandomInt(min, max) {
    min = slotItens[0];
    max = slotItens[8] + 1;
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateCredits(){
    createBalance.innerText = amount;
}

const getSlot1 = document.getElementById('slot1');
const getSlot2 = document.getElementById('slot2');
const getSlot3 = document.getElementById('slot3');
const createElem1 = document.createElement('p');
const createElem2 = document.createElement('p');
const createElem3 = document.createElement('p');

function addItensSlot1(){
    createElem1.innerText = getRandomInt();
    getSlot1.appendChild(createElem1);
    getSlot1.classList.add('slot-item');
}
function addItensSlot2(){
    createElem2.innerText = getRandomInt();
    getSlot2.appendChild(createElem2);
    getSlot2.classList.add('slot-item');
}
function addItensSlot3(){
    createElem3.innerText = getRandomInt();
    getSlot3.appendChild(createElem3);
    getSlot3.classList.add('slot-item');
}

function randomSlots(){
    addItensSlot1();
    addItensSlot2();
    addItensSlot3();
}

const getSpin = document.getElementById('spin').onclick = clickSpin;

function clickSpin(){
    if(amount >= bet){
        randomSlots();
        amount -= bet; 
        updateCredits();
        jackpotWin();       
    }else{
        const getReplay = document.getElementById('replay');
        getReplay.classList.remove('hidden');
        const getLose = document.getElementById('lose');
        getLose.classList.remove('hidden');
        const getSpin = document.getElementById('spin');
        getSpin.classList.add('disabled');
    }
}

const getReplay = document.getElementById('replay').onclick = clickReplay;

function clickReplay(){
    amount = 50;
    updateCredits();
    const getReplay = document.getElementById('replay');
    getReplay.classList.add('hidden');
    const getLose = document.getElementById('lose');
    getLose.classList.add('hidden');
    const getSpin = document.getElementById('spin');
    getSpin.classList.remove('disabled');
}

function jackpotWin(){
    if(createElem1.innerText === createElem2.innerText && createElem2.innerText === createElem3.innerText){
        amount += jackpot[3];
        updateCredits();
    }else if(createElem1.innerText === createElem3.innerText){
        amount += jackpot[2];
        updateCredits();
    }else if(createElem1.innerText === createElem2.innerText){
        amount += jackpot[1];
        updateCredits();
    }else if(createElem2.innerText === createElem3.innerText){
        amount += jackpot[0];
        updateCredits();
    }
}