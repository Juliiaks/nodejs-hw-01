import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from "node:fs/promises";

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const parsedData = JSON.parse(data);
        for (let i = 1; i <= number; i++){
            const contact = createFakeContact();
            parsedData.push(contact);
        }
        fs.writeFile(PATH_DB, JSON.stringify(parsedData, null, 2));
    } catch (error) {
console.log(error);
    }
};

generateContacts(5);
