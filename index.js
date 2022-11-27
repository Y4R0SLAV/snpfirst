const header = document.getElementsByClassName("header__wrapper")[0]
const logo = document.getElementsByClassName("nav__logo-img")[0]

const addClasses = () => {
  header.classList.add("header__wrapper-fixed")
  logo.classList.add("nav__logo-black")
}

const removeClasses = () => {
  if (header.classList.contains("header__wrapper-fixed")
    && logo.classList.contains("nav__logo-black")) {
    header.classList.remove("header__wrapper-fixed")
    logo.classList.remove("nav__logo-black")
  }
  return
}

window.addEventListener('scroll', (e) => {
  if (this.scrollY > 450) {
    addClasses()
  } else {
    removeClasses()
  }
})
