const COHORT = "/2309-FSA-ET-WEB-FT-SF";
const API_URL_events = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FSA-ET-WEB-FT-SF/events`;

const state = {
    parties: [],
};

const partiesList = document.querySelector("#parties");

const addPartyForm = document.querySelector("#addParty");
addPartyForm.addEventListener("submit", addParty);

const partyList = document.querySelector("parties");
partyList.addEventListener("submit", deleteParty);

// sync state with API and rerender
async function render(){
    await getParties();
    renderParties();
}
render();

// update state with parties from API
async function getParties() {
    try {
        const response = await fetch(API_URL_events);
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
        <p>${event.location}</p>
        <p>${event.description}</p>
        `;
        //TODO  add buttons to each party
        return li;
    });

    partiesList.replaceChildren(...partyCards);
};

// create a new party based on form data
async function addParty(event) {
    event.preventDefault();

    try {
        const response = await fetch(API_URL_events, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: addPartyForm.name.value,
                date: addPartyForm.date.value,
                location: addPartyForm.location.value,
                description: addPartyForm.description.value,
        }),
        });

        if (!response.ok){
         throw new Error("Failed to create new party.");
        }
        render ();
    
        } catch (error) {
        console.error(error);
    };
}

//TODO delete a party from the API
async function deleteParty() {
    //check Ellen's code
    //look for "fetch/delete" 
}