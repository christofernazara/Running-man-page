const artikel = document.querySelectorAll('.card');
for(let i = 0; artikel.length > i; i++){
    if(i % 2 == 1){
        artikel[i].classList.add('card-reverse');
    }
}
window.addEventListener("scroll", () => {
    let elements = document.querySelectorAll(".elemen-transisi");
    
    for(let i = 0; i < elements.length; i++){
        let heightWindow = window.innerHeight;
        let topElement = elements[i].getBoundingClientRect().top;
        let scroll = 200;
        if(topElement < heightWindow - scroll){
            elements[i].classList.add("transisi");
        }else{
            elements[i].classList.remove("transisi");
        }
    }
})