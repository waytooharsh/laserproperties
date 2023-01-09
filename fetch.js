var props=["", "Type", "Active Medium", "Energy Source", "Levels", "Wavelength", "Mode", "Efficiency"];
var values={
    "ruby": ["Ruby Laser","Solid-State","Ruby Rod","Helical Xenon Flash Lamp", 3, "694.3 nm","Pulsed", "1%"],
    "ndyag": ["Nd:YAG (Neodymium-Yttrium Aluminium Garnet) Laser", "Solid-State", "Neodynium doped YAG", "Krypton Arc Lamp", 4,"1064 nm (IR)", "Continuous", "2-3%"],
    "hene": ["He-Ne (Helium-Neon) Laser", "Gas", "Helium and Neon (10:1)", "Electric Discharge", 4, "632.8 nm", "Continuous", "< 1%"],
    "co2": ["CO2 Laser", "Gas", "CO2, N2 and He (1:4:5)", "Electric Discharge", 4, "10.6 µm (IR)", "Continuous & Pulsed", "30%"]
}
var light ={
    "ruby": ["(255, 0, 0,", 1, true],
    "ndyag": ["(255, 0, 0,", 0.25, false],
    "hene": ["(255, 0, 66,", 1, false],
    "co2": ["(255, 0, 0,",0.25, true]
}

document.getElementById('variety').addEventListener('change', selectUpdate);

function selectUpdate(e) {
    var kind = e.target.value;
    const varName = document.getElementById('var-name');
    varName.style.visibility = "visible";
    varName.textContent = values[kind][0];
    const table = document.getElementById('define-table');
    table.innerHTML="";
    for (let i = 1; i < props.length; i++) {
        var row = table.insertRow(i-1);
        var cell0 = row.insertCell(0);
        cell0.innerHTML = props[i] + ":";
        var cell1 = row.insertCell(1);
        cell1.innerHTML = values[kind][i];
    }
    glow(kind);
}

function glow(kind) {
    console.log(kind);
    var beam = document.getElementsByClassName('laser-beam')[0];
    console.log(beam);
    beam.style.boxShadow = "0px 0px 15px 0px rgba" + light[kind][0] +"0.88)";
    beam.style.background = "rgba" + light[kind][0] + "0.8)";
    beam.style.opacity = light[kind][1];
    if(light[kind][2]) {
        beam.style.animation = "pulse 0.5s infinite";
    }
    else {
        beam.style.animation = "none";
    }
    return 0;
}
