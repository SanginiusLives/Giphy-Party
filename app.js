console.log("Let's get this party started!");
const apiKey = "5r3rF6htYwi8CAAzvmr2zeuU7h93SPzl";
const gifArea = document.querySelector("#gifs");



async function getGIFs(e) {
    e.preventDefault();
    let val = document.querySelector('#formInput').value;
    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${val}&api_key=${apiKey}`);
    
    let random = Math.floor(Math.random() * 50);
    let source = res.data.data[random].images.original.url;
    
    let newImg = document.createElement("img");
    newImg.src = source;
    gifArea.appendChild(newImg);

    console.log(res.data.data[random].images.original.url);

    document.querySelector('#formInput').value = "";
    
};

function clearing() {
    e.preventDefault();
    gifArea.innerHTML = "";
}

document.querySelector("#formSub").addEventListener("click", getGIFs);
document.querySelector("#delete").addEventListener("click", clearing);
