// let people = [{
//     id: 1,
//     firstName: "Ezra",
//     lastName: "Aiden",
//     email: "e.aiden@basshall.com",
//     ipAddress: "18.6.24.104"
//   }, {


//defer until body exists
document.addEventListener("DOMContentLoaded", ()=>{

    peopleSelect.innerHTML += people.map(p=>`<option>${p.email}</option>`).join("");
    people.map(p => new Option(p.email)).forEach(o => peopleSelect2.appendChild(o));

    people.map(p => peopleSelect3.appendChild(new Option(p.email)));

}); //end load
