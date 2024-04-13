const headerDiv = document.querySelector(".header-container")
const headerSection = document.querySelector("header")


 
// creating upper section of the header 
let upperPartHeader = document.createElement("div")
upperPartHeader.setAttribute("id","upper-part--header")

// creating left part of the upper header div 
let leftDiv = document.createElement("div")
leftDiv.setAttribute("id","big-basket--logo")

// creating middle part of the upper header div  
let midDiv = document.createElement("div")
midDiv.setAttribute("id", "search-bar--container")

// creating right part of the upper header div  
let rightDiv = document.createElement("div")
rightDiv.setAttribute("id","user-bar--container")



// creating lower section of the header 
let lowerPartHeader = document.createElement("div")
lowerPartHeader.setAttribute("id","lower-part--header")

// creating left part of the lower header div 
let optionMenuDiv = document.createElement("div")
document.setAttribute("id", "option-menu")

// creating middle part of the lower header div
let optionsDiv = document.createElement("div")
document.setAttribute("id","options")

// creating right part of the lower header div
let offersDiv = document.createElement("div")
offersDiv.setAttribute("id","offers")


// creating a function to show left part of the upper div
function showLeftUpperDiv(){
    const logo = document.createElement("a")
    let brandLogo = document.createElement("img")
    brandLogo.setAttribute("id","brand--logo")
    brandLogo.src = "./assets/brand-logo.png"
    brandLogo.href = "https://www.bigbasket.com/?nc=logo"

    logo.append(brandLogo)
    leftDiv.append(logo)
    upperPartHeader.append(leftDiv)
    headerSection.append(upperPartHeader)
    headerDiv.append(headerSection)
}
showLeftUpperDiv()

// creating a function to show middle part of the upper div
function showMiddleUpperDiv(){
    let searchLogo = document.createElement("img")
    searchLogo.setAttribute("id","search--logo")
    searchLogo.src = "./assets/search-logo.jpg"

    let inputbar = document.createElement("input")
    inputbar.placeholder = "Search for Products..."

    midDiv.append(searchLogo, inputbar)
    upperPartHeader.append(midDiv)
    headerSection.append(upperPartHeader)
    headerDiv.append(headerSection)
}
showMiddleUpperDiv()

// creating a function to show right part of the upper div
function showRightUpperDiv(){

}
showRightUpperDiv()


