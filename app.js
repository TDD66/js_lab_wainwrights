let jsonData;
const wainwrightsList = document.getElementById("wainwrights-list");

fetchWainwrights = async () => {
    const response = await fetch("https://raw.githubusercontent.com/annahndr/annahndr.github.io/master/wainwrights_data/wainwrights.json");
    jsonData = await response.json();
    return jsonData;
}

const getAllWainwrights = () => {
    jsonData = fetchWainwrights();
    
    const wainwrightContainer = document.createElement("li");

}

getAllWainwrights();
console.log(jsonData);