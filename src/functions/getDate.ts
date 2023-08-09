import addZero from "./addZero";

const getDate = (): string => {
    const date = new Date();

    const day   = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);

    return `${day}.${month}`;
}

export default getDate;