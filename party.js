const COHORT = "/2309-FSA-ET-WEB-FT-SF";
const API_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF/events";

const state = {
    parties: [],
};

const partiesList = document.querySelector("#parties");

const addPartiesForm = document.querySelector("#addParty");
addPartiesForm.addEventListener("submit", addParty);

// sync state with API and rerender
async function render(){
    await getParties();
    renderParties();
}
render ();

// update state with parties from API

async function getParties() {
    try {
        const response = await fetch(API_URL);
        const json = await response.json();
        state.parties = json.data;
    } catch(error){
        console.error(error);
    }
}

// render parties from state
function renderParties() {
    if(!state.parties.length){
        partiesList.innerHTML = "<li>No parties Scheduled.</li>"
        return;
    };

    const partyCards = state.parties.map((event) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${event.name}</h2>
        <p>${event.date}</p>
        <p>${event.time}</p>
        <p>${event.location}</p>
        <p>${event.description}</p>
        `;
        return;
    });

    partiesList.replaceChildren(...partyCards);
};

// create a new party based on form data

// delete a party from the API

