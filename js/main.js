let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

const getEle = id => document.getElementById(id);

const renderGlassesList = () => {
    const content = dataGlasses.reduce((total, ele) => {
        total += `
    <div class="col-lg-3 mb-2">
        <button class="glassesBtn" onclick="chooseGlasses('${ele.id}')" id="${ele.id}"><img src=${ele.src} alt=""></button>
    </div>        
        `
        return total;
    }, "")

    getEle("vglassesList").innerHTML = content;
}

renderGlassesList();

window.chooseGlasses = (id) => {
    const glass = dataGlasses.find(ele => ele.id === id);
    changeInfo(glass);
    renderGlasses(glass);
}

const changeInfo = (glass) => {
    const info = getEle("glassesInfo");
    const content = `
    <h4>${glass.name} <span>- ${glass.brand}</span><span> ${glass.color}</span></h4>
    <h6>$${glass.price}</h6>
    <p>${glass.description}</p>
    `
    info.style.display = "block"
    info.innerHTML = content;
}

const renderGlasses = (glass) => {
    const vglasses = getEle("avatar");
    const content = `
        <img src="${glass.virtualImg}" alt="${glass.id}">
    `

    vglasses.innerHTML = content;
}

window.removeGlasses = (isTrue) => {
    isTrue ? move2Next() : back2Previous();
}

const back2Previous = () => {
    // if (document.querySelector("#avatar img").src)
    if (document.querySelector("#avatar img")) {
        const id = document.querySelector("#avatar img").alt;
        const index = dataGlasses.findIndex(ele => ele.id === id);
        console.log(index);
        if (index-1 >= 0) {
            const previousGlasses = dataGlasses[index - 1].id;
            getEle(previousGlasses).click();
        }
    }
}

const move2Next = () => {
    // if (document.querySelector("#avatar img").src)
    if (document.querySelector("#avatar img")) {
        const id = document.querySelector("#avatar img").alt;
        const index = dataGlasses.findIndex(ele => ele.id === id);
        console.log(index);
        if (index + 1 <= (dataGlasses.length-1)) {
            const nextGlasses = dataGlasses[index + 1].id;
            getEle(nextGlasses).click();
        }
    }
}