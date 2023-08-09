import date     from "../data/data";
import { Date } from '../data/data';

function unique() {
    const arrUniqStrings     = date.map(elem => elem.affiliation);
    const uniqueAffiliations = [...new Set(arrUniqStrings)];
}

unique()