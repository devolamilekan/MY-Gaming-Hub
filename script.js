alert('Welcome user')
let a = Math.floor(Math.random()*100)+1;
console.log(a)
function myguess() {
    const myInput = document.getElementById('myguess');
    const b = Number(myInput.value);
    
    if (b === a) {
        alert ('Congratulations! You have guessed the number correctly')
    } else if (b != a) {
        alert( 'Sorry, you missed it try again')
    }

    myInput.value = ''; 
}
document.getElementById('submit').addEventListener('click', myguess);