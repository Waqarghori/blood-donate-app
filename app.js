

function bloodGrp(grp) {
    let output = "";
    if (grp === "O+"){
        output = "Compatible donors for O+: (O+) & (O-)";
    }else if (grp === "O-"){
        output = "Compatible donors for O-: Only (O-)";
    }else if(grp === "A+"){
        output = "Compatible donors for A+: (A-Positiv), (A-Nagativ), (O-Positive) & (O-Nagativ)";
    }else if (grp === "A-"){
        output = "Compatible donors for A-: (A-) & (O-)";
    }else if (grp === "B+"){
        output = "Compatible donors for B+: (B+), (B-), (O+) & (O-)";
    }else if (grp === "B-"){
        output = "Compatible donors for B-: (O-) & (B-)"
    }else if (grp === "AB+"){
        output = "Compatible donors for AB+: (O-), (O+), (A-), (A+)";
    }else if(grp === "AB-"){
        output = "Compatible donors for AB-: (O-), (B-), (A-) & (AB-)";
    }
    document.getElementById("output").innerText = output;
}
