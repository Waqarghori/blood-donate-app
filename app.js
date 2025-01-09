

function bloodGrp(grp) {
    let output = "";
    if (grp === "O+"){
        output = "Compatible donors: O+ & O+";
    }else if (grp === "O-"){
        output = "Compatible donors: Only O-";
    }

    document.getElementById("output").innerText = output;
}


