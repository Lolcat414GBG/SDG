/**
 * 1. Get all main goals from the API
 * 2. Loop through the array and place code, title and description in an article
 * 3. Set background color on all main goals
 * 4. Create event listener to every main goal
 * 5. When the user clicks on a main goal, get the sub goals and place the code and description in the aside
 * 6. If the user clicks on the same main goal, hide sub goals
 * 7. If the user clicks on an another main goal, toggle (hide) the other sub goals 
 */

/** For a better overview and control of the code, the sub goals, background color and the API requests are
handled in 3 different files. See below: */

//Use api.js for the requests from API
import { getMainGoals, getSubGoals } from "./api.js";
//Use backgroundcolor.js to set background color on the main goals
import { setBackgroundColor } from "./backgroundcolor.js";
//Use subgoals.js to display the sub goals once the user clicks on a main goal
import { displaySubGoals, } from "./subgoals.js"

//Display a loading icon while all goals are fetched
document.querySelector('.main-container').innerHTML = '<div class="loader"></div>';

//Get the main goals when document is loaded
window.addEventListener('DOMContentLoaded', function() {
    getMainGoals();
});

//Display the the main goals
export function displayGoals(data) {
    document.querySelector('.main-container').innerHTML = '';
    //Create an article for every main goal
    let displayGoal = data.map(function(item) {
        return `<article class="main-goal" id=${item.code}>
        <aside class="sub-goal"></aside>
        <header>
        <h1 class="goal-code">${item.code}</h1>
        <h2 class="goal-title">${item.title}</h2>
        </header>
        <main>
        <p class="goal-desc">${item.description}</p>
        </main>
        <footer><i class="fas fa-chevron-down"></i></footer>
        </article>`;
    });
    displayGoal = displayGoal.join("");
    document.querySelector('#goals-container').innerHTML = displayGoal;
    //Now set background color and event listeners
    setBackgroundColor();
    createEventListeners();
}

function createEventListeners() {
    const goals = document.querySelectorAll('.main-goal');
    //Only get the subgoals when the user clicks on a goal
    goals.forEach(function(goal) {
        goal.addEventListener('click', async function() {
            const data = await getSubGoals(goal.id);
            //Send both data and the main goal the user clicked on
            displaySubGoals(data, this.querySelector('.sub-goal'));
        });
    });
}