const paletteSize = document.querySelector("#palette-size");
const generateButton = document.querySelector("#generate-button");
const palette = document.querySelector("#palette");
const toast = document.querySelector("#toast");

generateButton.addEventListener("click", () => {
    palette.textContent = "¡Has generado una paleta!"
});

//esta funcion hace que hue sea una funcion periodica de 2π = 360
function normalizeHue(hue) {
    return (hue + 360) % 360
}

function monochromatic(baseHue) {
    return [
        baseHue
    ];
}

function triadic(baseHue) {
    return [
        baseHue,
        normalizeHue(baseHue + 120),
        normalizeHue(baseHue + 240),
    ];
}

function tetradic(baseHue) {
    return [
        baseHue,
        normalizeHue(baseHue + 90),
        normalizeHue(baseHue + 180),
        normalizeHue(baseHue + 270)
    ];
}

function complementary(baseHue) {
    return [
        baseHue,
        normalizeHue(baseHue + 180)
    ]
}

function analogous(baseHue) {
    return [
        baseHue,
        normalizeHue(baseHue + 30),
        normalizeHue(baseHue - 30)
    ];
}

function splitComplementary(baseHue) {
    return [
        baseHue,
        normalizeHue(baseHue + 150),
        normalizeHue(baseHue + 210)
    ];
}

const baseHue = Math.floor(Math.random() * 360);

console.log(baseHue);
console.log(triadic(baseHue));
console.log(tetradic(baseHue));