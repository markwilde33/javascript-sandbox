import {addTitle, styleBody, contact} from './dom';
import folks, {getSillyFolks} from './data';


console.log('log index file');

styleBody();
addTitle('who shot cha?');
console.log(contact);
console.log(folks);

const sillyFolks = getSillyFolks(folks);
console.log(folks, sillyFolks);
console.table(folks, sillyFolks);
