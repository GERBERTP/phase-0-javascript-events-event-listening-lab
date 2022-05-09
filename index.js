
//const input = document.getElementById('input');

/*
function addingEventListener() {
    input.addEventListener('click', addingEventListener);
    alert('I was clicked!');

    
    
}
*///  Old Code 


// New Method also permenant
//const input = document.getElementById('input');
function addingEventListener(){

    //const input = document.getElementById('input');

    function clickAlert() {
    alert('I was clicked!');
    }

    input.addEventListener('click', clickAlert);
};
addingEventListener()
