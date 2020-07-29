// get modal element
let modal = document.getElementById('simpleModal');
// get open button
let modalButton = document.getElementById('modalBtn');
// get close button 
let closeButton = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalButton.addEventListener('click', openModal);
// listen for close click 
closeButton.addEventListener('click', closeModal);
// listen for outside click
window.addEventListener('click', clickOutside);


// function to open modal
function openModal() {
  modal.style.display = 'block';
}

// function to close modal
function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
