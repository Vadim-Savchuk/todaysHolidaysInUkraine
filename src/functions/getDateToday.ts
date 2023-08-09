import addZero from "./addZero";

const getDateToday = (): string => {
    const date = new Date();

    const year  = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day   = addZero(date.getDate());

    return `${day}.${month}.${year}`
}

export default getDateToday;

