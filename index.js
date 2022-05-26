const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

if(input){
    input.addEventListener('click', clickAlert);
}
