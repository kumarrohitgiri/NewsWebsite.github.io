const buttonGen = document.getElementsByClassName("btn-gen")
const buttonBus = document.getElementsByClassName("btn-bus")
const buttonEnt = document.getElementsByClassName("btn-ent")
const buttonHea = document.getElementsByClassName("btn-hea")
const buttonSci = document.getElementsByClassName("btn-sci")
const buttonSpo = document.getElementsByClassName("btn-spo")
const buttonTech = document.getElementsByClassName("btn-tech")

const sidebar = document.querySelector(".sidebar")
const wrapper = document.querySelector(".wrapper")
const hamburger = document.getElementById("hamburger")
const cross = document.getElementById("cross")

const access_key = "915ca20162ec5c5325ed0e33fc381c5e"

const url = `http://api.mediastack.com/v1/news?access_key=${access_key}&countries=us&languages=en&limit=20&categories=`

hamburger.onclick = () => {
    sidebar.classList.add("active")
}
cross.onclick = () => sidebar.classList.remove("active")

const handleSubmit = (cat) => {
    wrapper.innerHTML = ""
    const spinner = document.createElement("div")
    spinner.classList.add("lds-dual-ring")
    wrapper.appendChild(spinner)
    fetch(url + cat)
    .then(res => res.json())
    .then(res => {
        wrapper.innerHTML = ""
        if(res.data.length === 0) {
            const heading = document.createElement("h2")
            heading.textContent = "No data available!"
            wrapper.appendChild(heading)
        } else {
            console.log(res)
            res.data.forEach((item) => {
                const card = document.createElement("div")
                card.classList.add("card")
                const ele = `
                        <h2>${item.title}</h2>
                        <p>${item.description}</p>
                `
                card.innerHTML = ele
                
                wrapper.appendChild(card)
        })
        }
           
    })
}

const temp = (collection, cat) => {
    for (let ele of collection) {
        ele.onclick = () => handleSubmit(cat)
    }
}

temp(buttonGen, "general")
temp(buttonBus, "business")
temp(buttonEnt, "entertainment")
temp(buttonHea, "health")
temp(buttonSci, "science")
temp(buttonSpo, "sports")
temp(buttonTech, "technology")