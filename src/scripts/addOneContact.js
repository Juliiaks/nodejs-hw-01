import { PATH_DB } from '../constants/contacts.js';
import fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';


export const addOneContact = async () => {

    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);
        const newContact = createFakeContact();
        parsedData.push(newContact);
        fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
    } catch (error) {
console.log(error);
    }
};

addOneContact();
