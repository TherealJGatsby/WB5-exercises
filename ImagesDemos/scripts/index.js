document.addEventListener("DOMContentLoaded", () => {

    // display the image and alt text
    const image = document.querySelector("#logo");
    image.src = "/images/AstonMartin.jpg";
    image.alt = "This is an Aston Martin Superleggera";
    image.classList.add("p-2");
    image.classList.add("m-5");

    const paragraph = document.querySelector("#paragraph");
    paragraph.innerText = "This is an Aston Martin Superleggera";
    paragraph.classList.add("m-5");

    // this makes the image rounded on the browser
    const imageClass = document.querySelector(".roundedImage");

    // this changes the background by just selecting the body element tag
    const body = document.querySelector("body");
    body.style.backgroundColor = "gray";
   

})