// Get the modal
const d = document
const modal = d.getElementById("myModal");
// Get the button that opens the modal
const btn = d.getElementById("submit");
// Get the <span> element that closes the modal
const span = d.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
const selected = d.querySelector('#selected')
btn.onclick = () => {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = () => {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const reate = d.querySelector('.container-txt')
selected.forEach(e => {
    selected[i].addEventListener('click', (e) => {
        e.preventDefault();
        let rating = selected[i].innerHTML;

        for (let i = 0; i < selected.lengt; i++) {
            selected[i].classList.contains('select')
            selected[i].classList.remove('select');
        }
        // add the selected class which highlights the selected rating //
        selected[i].classList.add('select');
        btn.addEventListener('click', () => {
            reate.style.display = 'none'
        })

    })
});