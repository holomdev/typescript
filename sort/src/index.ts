import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -52]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('bdgatAAcvzaxP');
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log(charactersCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);

const listSorter = new Sorter(linkList);
listSorter.sort();
linkList.print();

