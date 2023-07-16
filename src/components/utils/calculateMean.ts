import Concentration from "../../types/Concentration";

const calculateMean = (data: Record<number, Concentration[]>, property: keyof Concentration ) => {
  const mean: Record<number, number> = {}
    for (let key in data) {
        const dataForProperty: Concentration[] = data[key]
        // (+data.Flavanoids) is done to cast a string value to number in case if any
        //@ts-ignore
        mean[key] = dataForProperty.reduce((acc, data: Concentration) => acc + (+data[property as keyof Concentration]), 0) / dataForProperty.length ;
    }
    return mean;
};

export default calculateMean;
