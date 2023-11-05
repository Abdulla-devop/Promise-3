const API = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"

const getAllData = document.querySelector("#petdata")

function ReadAllData(){
    fetch (API,{
        method:"GET",
    })
    .then((res) => res.json())
    .then((data) => renderAllData(data))
    .catch((err) => console.log("Error",err));
}
ReadAllData()

function newData(Data){
    const allPetData = document.createElement("div")
    allPetData.className = "card";
    allPetData.innerHTML +=`
    <h3>ID:${Data.id}</h3>
    <img src="${Data.url}"/>
    
    `;

    getAllData.append(allPetData)
}

function renderAllData(newdatas){
    newdatas.forEach((newdata) => {
    newData(newdata);
    });
}
