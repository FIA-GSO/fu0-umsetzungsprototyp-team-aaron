function addActivity(){
    console.log("dsfdd")
    let child = document.createElement("li");
    child.innerText=document.getElementById("MondayActivity").value;
    child.innerText+=" - "+document.getElementById("MondayDuration").value+" Stunden";

    document.getElementById("MondayActivities").appendChild(child);
}