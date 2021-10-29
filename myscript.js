var restart = document.querySelector('#yo')

var square = document.querySelectorAll('td');

function clearBoard(){
    for (var i = 0; i < square.length; i++) {
        square[i].textContent = '';
    }
}

restart.addEventListener('click',clearBoard);

var cellone = document.querySelector('#one');

function changemarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    }else {
        this.textContent = '';
    }
}

for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click',changemarker)
}