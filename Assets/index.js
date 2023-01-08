
// const inputName = document.getElementById('name')
// const inputPass = document.getElementById('pass')
// const from = document.querySelector('form')
// let pseudo = "";
// let nametest = "";

                                                                                                 
// inputName.addEventListener("input", (e) => {
//     pseudo = e.target.value;
// });

// inputPass.addEventListener('input', (e) => {
//     nametest = e.target.value;
// });

// from.addEventListener('submit', (e) => {
//     e.preventDefault();
// });



//*************************Pop Up pour remonter ****************/
window.addEventListener('scroll', (e)=>{
    const arrowup = document.querySelector('.arrowuptitle');
    let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if(scrollValue > 0.75){
        arrowup.style.opacity="1";
        arrowup.style.transform = "none";
    
    } else {
        arrowup.style.opacity="0";
        arrowup.style.transform = "translateX(400px)"; 
    }
                                 
});