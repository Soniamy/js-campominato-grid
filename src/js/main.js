/*
1.L'utente clicca su un bottone.
2.Il bottone genera la griglia.
3.Ogni cella ha un numero progressivo, da 1 a 100.
4. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
5.Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

const gridContainer = document.querySelector('.grid-container');
const playBtn = document.querySelector('#play');
playBtn.addEventListener('click', createGrid);

function createGrid() {
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = i;

        cell.addEventListener('click', function () {
            console.log(this);
            this.classList.toggle('active');

            console.log(this.innerHTML);
        });

        gridContainer.append(cell);
    }
}
