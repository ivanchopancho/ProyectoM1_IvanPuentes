const paletteSize = document.querySelector("#palette-size");
const generateButton = document.querySelector("#generate-button");
const palette = document.querySelector("#palette");
const toast = document.querySelector("#toast");
const style = document.querySelector("#style")






function generatePalette() {
    const baseHue = Math.floor(Math.random() * 360);
    //harmony.value consulta el tag con id harmony por su value. Luego compara ese valor con el objeto harmonyRules para obtener la función para la paleta indicada

    const harmonyFunction = harmonyRules[harmony.value];

    //hues almacena la lista de hues proporcionales de acuerdo a su criterio estetico
    const hues = harmonyFunction(baseHue);

    const distribution = distributeColors(
        Number(paletteSize.value),
        hues
    );

    const colors = generateColors(
        hues,
        distribution,
        style.value
    );


    const colorCards = colors.map((color) => {
        return `
            <article class="color-card">

            <div
                class="color-preview"
                style="background-color: ${color.hsl}">
            </div>

            <div class="color-info">

                <button
                    class="color-code"
                    data-color="${color.hex}">
                    <span>HEX</span>
                    ${color.hex}
                </button>

                <button
                    class="color-code"
                    data-color="rgb(${color.rgb.join(", ")})">
                    <span>RGB</span>
                    ${color.rgb.join(", ")}
                </button>

                <button
                    class="color-code"
                    data-color="${color.hsl}">
                    <span>HSL</span>
                    ${color.hsl}
                </button>

            </div>

        </article>
                `;
    });

    palette.innerHTML = colorCards.join("");

    //console.log(colorCards);

    //console.log(baseHue);
    //console.log(hues);

}

generateButton.addEventListener("click", () => {
    palette.textContent = "¡Has generado una paleta!"
    generatePalette()
});

palette.addEventListener("click", (event) => {
    const button = event.target.closest(".color-code");

    if (!button) return;

    navigator.clipboard.writeText(button.dataset.color);
});









//esta funcion hace que hue sea una funcion periodica de 2π 
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

//todas las reglas armónicas están en este objeto para fácil acceso. 
const harmonyRules = {
    monochromatic: monochromatic,
    complementary: complementary,
    analogous: analogous,
    splitComplementary: splitComplementary,
    triadic: triadic,
    tetradic: tetradic
};



//FUNCIONES DE CONVERSION
function hueToColor(hue) {
    return `hsl(${hue}, 80%, 50%)`;
}

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const huePrime = h / 60;

    const channel = (n) => {
        const k = (n + huePrime) % 6;
        return chroma * Math.max(
            0,
            Math.min(k, 4 - k, 1)
        );
    };

    const m = l - chroma / 2;

    const r = Math.round((channel(0) + m) * 255);
    const g = Math.round((channel(4) + m) * 255);
    const b = Math.round((channel(2) + m) * 255);

    return [r, g, b];
}

function rgbToHex(r, g, b) {
    const rgb = [r, g, b];
    const hex = [];
    for (let i = 0; i < rgb.length; i++) {
        const current = rgb[i].toString(16).padStart(2, "0");
        hex.push(current)
    }
    return `#${hex.join("")}`;
}




//restricciones relacionadas con el estilo
const styleRules = {
    vibrant: {
        saturation: [75, 100],
        lightness: [40, 60]
    },

    pastel: {
        saturation: [30, 60],
        lightness: [70, 90]
    },

    dark: {
        saturation: [50, 90],
        lightness: [20, 40]
    },
    light: {
        saturation: [50, 90],
        lightness: [65, 85]
    },
    muted: {
        saturation: [20, 50],
        lightness: [40, 70]
    }
};

//distributeColors elige cuantas variaciones de cada hue debemos producir para satisfacer el criterio de paletteSize
//recibe una array de hues y un tamaño de paleta y retorna un array con la cantidad de variaciones por cada hue.
function distributeColors(paletteSize, hues) {
    const baseAmount = Math.floor(paletteSize / hues.length);
    const remainder = paletteSize % hues.length
    const distribution = Array(hues.length).fill(baseAmount);

    for (let i = 0; i < remainder; i++) {
        distribution[i] += 1;
    }

    return distribution;
}


//random in range permite usar Math.random para generar un numero aleatorio dentro de un intervalo cerrado
//esta funcion es horrible. javascript necesita este comprtamiento de forma nativa
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

//devuelve un array de strings que son colores en formato hsl basado en los hues elegidos por el criterio armonico, las variaciones y el estilo
function generateColors(hues, distribution, style) {
    const colors = [];
    const styleRule = styleRules[style];

    for (let i = 0; i < hues.length; i++) {
        const hue = hues[i]

        for (let j = 0; j < distribution[i]; j++) {
            //colorEnHsl = [hue, dos numeros randoms de s y l que consultan los rangos de style]
            //colors.push(colorEnHsl)

            const saturation = randomInRange(
                styleRule.saturation[0],
                styleRule.saturation[1]
            )
            const lightness = randomInRange(
                styleRule.lightness[0],
                styleRule.lightness[1]
            )

            const rgb = hslToRgb(hue, saturation, lightness);
            const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

            const color = {
                hsl: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                rgb: rgb,
                hex: hex
            };
            colors.push(color);
        }

    }




    return colors;


}

//console.log(distributeColors(8, [240, 30, 90]));
//console.log(distributeColors(6, [240, 30, 90]));
//console.log(distributeColors(9, [240, 30, 90]));

console.log(
    generateColors(
        [240, 30, 90],
        [3, 3, 2],
        "vibrant"
    )
);



