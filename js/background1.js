// Stars Position
let topp = document.getElementById("top");
function setStars(numS) {
    for (let i = 0; i < numS; i++) {
        let stars = document.createElement("div");
        stars.setAttribute("class", "stars");
        stars.style.left = 100 * Math.random() + "%";
        stars.style.top = 55 * Math.random() + "%";
        topp.appendChild(stars);
    }
}
setStars(250);

// Sun Animation
let sunset = document.getElementById("sun");
function synthSun(nmb) {
    for (let i = 0; i < nmb * 2; i++) {
        let sunin = document.createElement("div");
        sunin.setAttribute("class", "sun");
        sunin.style.animationDelay = -0.5 * i++ + "s";
        sunset.appendChild(sunin);
    }
}
synthSun(8);

// Generate grid elements dynamically
let grid = document.getElementById("grid");
function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        let gridCell = document.createElement("div");
        grid.appendChild(gridCell);
    }
}
createGrid(16, 40); // 16 rows, 40 columns


// Generate Mountain Elements
let mountain = document.getElementById("mountain");
function createMountains() {
    for (let i = 0; i < 8; i++) {
        let mount = document.createElement("div");
        mountain.appendChild(mount);
    }
}
createMountains();
