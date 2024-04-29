const tombol = document.getElementById("tombol");
tombol.onclick = function() {
document.body.classList.toggle("red");
}


const acakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
acakWarna.appendChild(teksTombol);
acakWarna.setAttribute("type", "button");
tombol.after(acakWarna);

acakWarna.addEventListener("click", function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +",100)";
})
sHijau.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +",100)";
})
sBiru.addEventListener("input", function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
})


document.body.addEventListener("mousemove",function(event) {
    // Posisi Mouse
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = "rgb(" + xPos +","+ yPos + ",100"
});