const wainwrightsList = document.getElementById("wainwrights-list");
const form = document.getElementById("search-form")

const getAllWainwrights = async (filter) => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    const wainwrights = await response.json();
    
    if(filter != null){
        wainwrights.forEach(wainwright => {
            if(wainwright["name"].toLowerCase().includes(filter.toLowerCase())){
                const listItem = createWainwrightContainer(wainwright);
                wainwrightsList.appendChild(listItem);
            }
        });
    }
    else{
        wainwrights.forEach(wainwright => {
            const listItem = createWainwrightContainer(wainwright);
            wainwrightsList.appendChild(listItem);
        });
    }
}

const createWainwrightContainer = (wainwright) => {
    const wainwrightListItem = document.createElement("li");

    const wainwrightName = document.createElement("h1");
    wainwrightName.innerText = wainwright["name"];

    const wainwrightHeight = document.createElement("p");
    wainwrightHeight.innerText = `Height (m): ${wainwright["heightMetres"]}`;

    const wainwrightArea = document.createElement("ul");

    for(const key in wainwright["area"]){
        const subListItem = document.createElement("li");
        subListItem.innerText = `${key} : ${wainwright["area"][key]}`;
        wainwrightArea.appendChild(subListItem);
    }

    wainwrightListItem.appendChild(wainwrightName);
    wainwrightListItem.appendChild(wainwrightHeight);
    wainwrightListItem.appendChild(wainwrightArea);
    return wainwrightListItem;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const filter = event.target["query"].value;
    wainwrightsList.innerText = "";
    setTimeout(() => {
        getAllWainwrights(filter);
    }, 2000)
})

getAllWainwrights();