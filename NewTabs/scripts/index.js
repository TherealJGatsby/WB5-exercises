const sites = [
    {
        name: "Youtube",
        url:"https://www.youtube.com/",
        buttonColor: "btn-danger"
    },
    {
        name: "W3Schools",
        url:"https://www.w3schools.com/",
        buttonColor: "btn-success"
    },
    {
        name: "images",
        url:"images.html",
        buttonColor: "btn-primary"
    }
];

// modern approach
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("content");
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
        window.open("https://www.google.com/")
    })


    sites.forEach(site => {
        // add a button that opens the site in a new window
        const newButton = document.createElement("button");

        newButton.innerText = site.name;
        newButton.classList.add("btn");
        newButton.classList.add(site.buttonColor);
        newButton.classList.add("m-2");

        newButton.addEventListener("click", () => {
            window.open(site.url)
        })

        main.appendChild(newButton);
    })
})