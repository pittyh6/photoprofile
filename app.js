//jshint esversion:6

// var btnAllBody = document.getElementsByClassName("btn-body");
var btnAllBodyBtn = document.querySelectorAll(".btn-body");

// pick all box of itens - store itens
var storeAllItens = document.querySelectorAll(".store_itens");

// pick all img box
var imgBox = document.querySelectorAll(".img-content-itens");

// pick specific itens
var allStreetItens = document.querySelectorAll(".street");
var allNatureItens = document.querySelectorAll(".nature");
var allPortraittItens = document.querySelectorAll(".portrait");
var allEventsItens = document.querySelectorAll(".event");

// search button
var searchBtn = document.getElementById("basic-addon1");

//search box
var searchBox = document.getElementById("input-search");

//validation each itens to show and hide. Used in buttons and input search
function showAndHide(chooseIten) {
    if (chooseIten === "all") {
        showAll();
    } else if (chooseIten === "street") {
        hide();
        show(allStreetItens);
    } else if (chooseIten === "nature") {
        hide();
        show(allNatureItens);
    } else if (chooseIten === "portrait") {
        hide();
        show(allPortraittItens);
    } else if (chooseIten === "events") {
        hide();
        show(allEventsItens);
    } else {
        console.log(chooseIten);
    }
}
// Choose itens click in button
btnAllBodyBtn.forEach(function chooseByButton(btn) {
    btn.addEventListener("click", function() {
        showAndHide(btn.textContent);
    });
});
// input search
function searchByInput() {
    var searchInput = document.getElementById("input-search").value;
    var resultSearchInput = searchInput.toLowerCase();
    searchBtn.addEventListener("click", function() {
        showAndHide(resultSearchInput);
    });
}

//auto search comparing letters
searchBox.addEventListener("keyup", (e) => {
    const searchFilter = e.target.value.toLowerCase().trim();
    // display only items that contain filter input
    storeAllItens.forEach((item) => {
        if (item.textContent.includes(searchFilter)) {
            item.style.display = "inline-grid";
        } else {
            item.style.display = "none";
        }
    });
});

// hide itens
function hide() {
    storeAllItens.forEach(function() {
        $(storeAllItens).hide();
    });
}
// show itens
function show(item) {
    $(item).show();
}
// show all itens
function showAll() {
    storeAllItens.forEach(function() {
        $(storeAllItens).show();
    });
}

// lightbox modal
// create element lightbox(div)
const lightbox = document.createElement("div");
// set the id name for element(div) lightbox
lightbox.id = "lightbox";
// append element to the body
document.body.appendChild(lightbox);

// select all images
const images = document.querySelectorAll("img");
// loop in all images
images.forEach((image) => {
    image.addEventListener("click", (e) => {
        // add the class active
        lightbox.classList.add("active");
        // create images in lightbox
        const img = document.createElement("img");
        // set the path for new images as the same of the image clicked
        img.src = image.src;
        // clean the child img, for not show multiple images on click.
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        // add the image at lightbox
        lightbox.appendChild(img);
    });
});

// close modal
lightbox.addEventListener("click", (e) => {
    // check if clicked outside the photo, just close the modal. If clicked in the photo dont close the moda.
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
});