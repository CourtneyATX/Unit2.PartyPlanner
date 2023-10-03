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

// render parties from state

// create a new party based on form data

// delete a party from the API

