let headerSection = document.querySelector("#header")
let upperHeader = document.querySelector("#upperHeader")
let lowerHeader = document.querySelector("#lowerHeader")


function showLeftUpper(){
    let left = document.createElement("div")
    left.setAttribute('id','brand-logo--div')

    let logo = document.createElement("a")
    logo.href = "https://www.bigbasket.com/?nc=logo"
    let brandImg = document.createElement("img")
    brandImg.setAttribute('id','brand-logo')
    brandImg.src = "assets/brand-logo.png"

    logo.append(brandImg)
    left.append(logo)
    upperHeader.append(left)
    headerSection.append(upperHeader)
}
showLeftUpper()

function showMidUpper(){
    let mid = document.createElement("div")
    mid.setAttribute('id','search-div')

    let searchImg = document.createElement("img")
    searchImg.setAttribute('id','search-logo')
    searchImg.src = "assets/search-logo.jpg"

    let inputBar = document.createElement("input")
    inputBar.setAttribute('id','input-bar')
    inputBar.placeholder = "Search for Products..."

    mid.append(searchImg, inputBar)
    upperHeader.append(mid)
    headerSection.append(upperHeader)
}
showMidUpper()

function showRightUpper(){
    let right = document.createElement("div")
    right.setAttribute('id', 'user-panel')

    let locationDiv = document.createElement("div")
    locationDiv.setAttribute('id', 'location-find')

    let loginDiv = document.createElement("div")
    loginDiv.setAttribute('id','login-div')



    let locationLogo = document.createElement("img")
    locationLogo.setAttribute('id', 'location-logo')
    locationLogo.src = "assets/location.png"

    let locationBtn = document.createElement("button")
    locationBtn.setAttribute('id', 'location-btn')
    locationBtn.innerText = "Select Location"

    let loginBtn = document.createElement("button")
    loginBtn.setAttribute('id', 'login-btn')
    loginBtn.innerText = "Login/SignUp"

    let cartImg = document.createElement('img')
    cartImg.src = "assets/cart-logo.png"

    locationDiv.append(locationLogo, locationBtn)
    loginDiv.append(loginBtn, cartImg)
    right.append(locationDiv, loginDiv)
    upperHeader.append(right)
    headerSection.append(upperHeader)
}
showRightUpper()

function showLeftLower(){
    let left = document.createElement("div")
    left.setAttribute('id', 'drop-down--menu')

    let selectBarBtn = document.createElement("button")
    selectBarBtn.setAttribute('id', 'select-button')
    selectBarBtn.innerHTML = "Shop by category <spna><img id='drop-down-arrow' src='assets/drop-down.png'></span>"

    left.append(selectBarBtn)
    lowerHeader.append(left)
    headerSection.append(lowerHeader)
}
showLeftLower()

function showMidLower(){
    let mid = document.createElement("div")
    mid.setAttribute('id', 'menu-bar')

    let fruitsAndVeges = document.createElement("p")
    fruitsAndVeges.innerText = "Exotic Fruits & Vegetables"

    let tea = document.createElement("p")
    tea.innerText = "Tea"

    let ghee = document.createElement("p")
    ghee.innerText = "Ghee"

    let nandini = document.createElement("p")
    nandini.innerText = "Nandini"

    let freshVeges = document.createElement("p")
    freshVeges.innerText = "Fresh Vegetables"

    mid.append(fruitsAndVeges, tea, ghee, nandini, freshVeges)
    lowerHeader.append(mid)
    headerSection.append(lowerHeader)

}
showMidLower()

function showRightLower(){
    let right = document.createElement("div")
    right.setAttribute('id', 'offers-div')

    let firstImg = document.createElement("img")
    firstImg.setAttribute('id', 'smart-basket')
    firstImg.src = "assets/smart-cart.png"

    let secImg = document.createElement("img")
    secImg.setAttribute('id', 'offers-img')
    secImg.src = "assets/offers.jpg"

    right.append(firstImg, secImg)
    lowerHeader.append(right)
    headerSection.append(lowerHeader)

}
showRightLower()