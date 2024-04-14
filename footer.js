const footerContainer = document.querySelector("#footer-container")
const footerUpper = document.querySelector("#footer-upper")
const footerLower = document.querySelector("#footer-lower")

function showFooterUpperLeft(){
    let footLeftDiv = document.createElement("div")
    footLeftDiv.setAttribute('id', 'left-div--bb')

    let h1 = document.createElement("h3")
    h1.innerText = "BigBasket"

    let list = document.createElement("ul")
    list.innerHTML = "<li>About Us</li><li>Become A bigbasket Rider</li><li>In News</li><li>Green bigbasket</li><li>Privacy Policy</li><li>Affiliate</li><li>Terms and Conditions</li><li>Careers At bigbasket</li><li>bb Instant</li><li>bb Daily</li><li>bb Blog</li><li>bbnow</li>"

    footLeftDiv.append(h1, list)
    footerUpper.append(footLeftDiv)
    footerContainer.append(footerUpper)
}
showFooterUpperLeft()

function showFooterUpperMid(){
    let footMidDiv = document.createElement("div")
    footMidDiv.setAttribute('id', 'mid-div--bb')

    let h1 = document.createElement("h3")
    h1.innerText = "Help"

    let list = document.createElement("ul")
    list.innerHTML = "<li>FAQs</li><li>Contact Us</li><li>bb Wallet FAQs</li><li>bb Wallet T&Cs</li><li>Vendor Connect</li>"

    footMidDiv.append(h1, list)
    footerUpper.append(footMidDiv)
    footerContainer.append(footerUpper)
}
showFooterUpperMid()

function showFooterUpperRight(){
    let footRight = document.createElement("div")
    footRight.setAttribute('id','footer-right--div')

    let bbLogo = document.createElement('div')
    bbLogo.setAttribute('id',"bb-logo--div")
    bbLogo.innerHTML = "<img class='bb-logo link-img' src='assets/bb-black-logo.png' alt='bb-black-logo'>"

    let getStore = document.createElement("div")
    getStore.setAttribute('id',"get-store--div")
    getStore.innerHTML = "<img class='get-it-logo link-img' src='assets/get-it-stores.png' alt='get-it-stores'>"

    let socialLink = document.createElement("div")
    socialLink.setAttribute('id',"social-link--div")
    socialLink.innerHTML = "<img class='social-logo link-img' src='assets/social-links.png' alt='social-links'>"

    footRight.append(bbLogo, getStore, socialLink)
    footerUpper.append(footRight)
    footerContainer.append(footerUpper)
}
showFooterUpperRight()

function showFooterLower(){
    let copyrights = document.createElement("div")
    copyrights.setAttribute('id','copyrights-div')
    copyrights.innerHTML = "<p>Copyright <span>&#169</span> 2023 - 2025 Supermarket Grocery Supplies Pvt Ltd</p>"

    footerLower.append(copyrights)
    footerContainer.append(footerLower)
}
showFooterLower()