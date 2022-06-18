const qtdControlerPlus = document.querySelector('.plus')
const qtdControlerMinus = document.querySelector('.minus')
const addToCartButton = document.querySelector('.add__to__cart')
var qtdCounter = document.querySelector('.quantity .number')
var bubble = document.querySelector('header .right .cart .bubble')
var cartIcon = document.querySelector("header .right .cart")
var quantity = document.querySelector(".body .details .quantity .quantityEspecific")
var thumbs = document.querySelectorAll('.thumbs')
var carousel = document.querySelectorAll('.container img')

console.log(carousel)

const plus = () => {
    +qtdCounter.innerHTML++;
}

const minus = () => {
    var contador = +qtdCounter.innerHTML
    if (contador > 1) {
        qtdCounter.innerHTML-=1;
    }
}

const addToCartFunction = () => {
    var contador = +bubble.innerHTML + +qtdCounter.innerHTML;
    bubble.innerHTML = contador;
    bubble.classList.add('active')
    quantity.innerHTML = contador
    quantity.nextElementSibling.innerHTML = numeral(contador * 125).format('$0,0.00');
}

const showCart = ({target}) => {
    target.nextElementSibling.classList.toggle('active')
}

const changeThumb = ({target}) => {
    thumbs.forEach((thumb) => thumb.style.filter = "")
    target.style.filter = 'opacity(40%)'
    carousel.forEach((car) => car.style.transform = `translateX(${(-target.id+1) * 400}px)`)

}

qtdControlerPlus.addEventListener('click', plus)
qtdControlerMinus.addEventListener('click', minus)
addToCartButton.addEventListener('click', addToCartFunction)
cartIcon.addEventListener('onclick', showCart)
thumbs.forEach((thumb) => thumb.addEventListener("click", changeThumb));