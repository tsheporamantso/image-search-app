const accessKey = "oPgVPqT9-T0YC_psQfuZjAwZK_XlhzijVEndlHRvjMA"

const formEl = document.querySelector("form")as HTMLFormElement
const inputEl = document.getElementById("search-input") as HTMLFormElement
const searchResults = document.querySelector(".search-results") as HTMLInputElement
const showMore = document.getElementById("show-more")

let inputData = ""
let page = 1


async function searchImages () {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()


    const results = data.results

    if(page === 1) {
        searchResults.innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-result")
    })
}



formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Clicked")
})