/**
 * This file handles all API requests
 * (Could have used the same function with if statements but it seems more clear this way)
 */

//Use this for the main goals
const API_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true';

//Use these for the subgoal together with a code
const FIRST_PART_API_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/';
const LAST_PART_API_URL = '/Target/List?includechildren=true';

import { displayGoals } from "./index.js";

export async function getMainGoals() {
    let URL = API_URL;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        displayGoals(data);
    } catch (error) {
        console.log('ERROR: ', error);
    }
}

export async function getSubGoals(code) {
    let URL = FIRST_PART_API_URL + code + LAST_PART_API_URL;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return await data;
    } catch (error) {
        console.log('ERROR: ', error);
    }
}