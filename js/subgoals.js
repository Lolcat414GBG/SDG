/**
 * Display sub goals and toggle the sub goals visibility (or rather y-position)
 */

export function displaySubGoals(data, thisGoal) {
    //Make sure the sub goals havn´t already been created (=the main goal is empty)
    if (thisGoal.innerHTML === '') {
        thisGoal.innerHTML = '<h1>Sub Goals:</h1>'
        data[0].targets.forEach(function(item) {
            let desc = document.createElement('p');
            desc.innerHTML = `<b>${item.code}:</b> ${item.description}`;
            thisGoal.append(desc);
        });
        let footer = '<footer><hr></footer>';
        thisGoal.innerHTML += footer;
    }
    //Check whether the sub goals should disappear or appear 
    toggleSubGoals(thisGoal);
}

function toggleSubGoals(thisGoal) {
    const subGoals = document.querySelectorAll('.sub-goal');
    //Loop through all sub goals and hide all that wasn´t clicked on 
    subGoals.forEach(function(goal) {
        if (goal !== thisGoal) {
            goal.classList.remove('show-text');
        }
        //Toggle the sub goal on the one that was clicked
        thisGoal.classList.toggle('show-text');
    });
}