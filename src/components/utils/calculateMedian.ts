import Concentration from "../../types/Concentration";

const calculateMedian = (filteredData: Record<number, Concentration[]>, property:  keyof Concentration) => {

    let calculatedMedian: Record<Concentration["Alcohol"], number> = {};

    let median;
    for (let alcohol in filteredData) {
        const dataForSpecificAlcohol = filteredData[alcohol];
        //@ts-ignore
        const propertyData = dataForSpecificAlcohol.map((data) => +(data[property])).sort();
        if (propertyData.length % 2 !== 0) {
            median = propertyData[Math.ceil(propertyData.length / 2)];
        } else {
            median = (propertyData[propertyData.length / 2] + propertyData[(propertyData.length / 2) - 1]) / 2;
        }
        calculatedMedian = { ...calculatedMedian, [alcohol]: median }
    }
  return calculatedMedian;
  
};

export default calculateMedian;
