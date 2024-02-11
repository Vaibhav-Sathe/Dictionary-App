const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", async() => {
    let raw = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    let data = await raw.json();
    const meaning = data[0].meanings[0].definitions[0].definition;
    p.innerHTML = `<p><b>${input.value} : </b>${meaning}</p>`;
});