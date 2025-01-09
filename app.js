// function bloodGrp (grp){
//     let document.getElementById("chekBtn") ;
//     if ( grp === "o+"){
//         console.log("O+ & O-")
//     }
// }

function bloodGrp(grp) {
    // Find the submit button by ID
    let user = document.getElementById("chekBtn");

    // Check the blood group value
    if (grp === "o+") {
        console.log("Compatible donors: O+ & O-");
    } else {
        console.log("No match found for the given group.");
    }
}
