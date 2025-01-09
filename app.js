

function bloodGrp(grp) {
    let output = "";
    if (grp === "O+") {
        output = "Compatible donors: O+ & O+";
    } else if (grp === "O-") {
        output = "Compatible donors: Only O-";
    } else if (grp === "A+") {
        output = "Compatible donors: A+, A-, O+ & O-";
    } else if (grp === "A-") {
        output = "Compatible donors: A- & O-";
    } else if (grp === "B+") {
        output = "Compatible donors: B+, B-, O+ & O-";
    } else if (grp === "B-") {
        output = "Compatible donors: O- & B-"
    } else if (grp === "AB+") {
        output = "Compatible donors: O-, O+, A-, A+";
    } else if (grp === "AB-") {
        output = "Compatible donors: O-, A-, B-, AB-";
    }
    document.getElementById("output").innerText = output;
}
