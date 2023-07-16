import Concentration from "../../types/Concentration";

const getFilteredData = (data: Concentration[]) => {
    //segregating data for Alcohol property depending on its value
    const filteredData: Map<number, Concentration[]> = data.reduce((acc, data) => {
        if (acc.has(data.Alcohol)) {
            acc.set(data.Alcohol, [...acc.get(data.Alcohol), data])
        } else {
            acc.set(data.Alcohol, [data])
        }
        return acc
    }, new Map())

    return Object.fromEntries(filteredData)
};

export default getFilteredData;
