import Concentration from "../../types/Concentration";

const calculateMode = (filteredData: Record<number, Concentration[]>, property: keyof Concentration) => {
    let calculatedMode: Record<number, Concentration["Flavanoids"]> = {};
    for (let alcohol in filteredData) {
        const dataForSpecificAlcoholValue = filteredData[alcohol]

    const Mode = new Map();
        dataForSpecificAlcoholValue.forEach((data: Concentration) => {
            if(Mode.has(data[property])){
                const value = Mode.get(data[property])
                Mode.set((data[property]), value+1)
            }else{
                Mode.set(data[property], 1)
            }
        })

        //calculate max freuency
        let maxFrequency =0;
        Mode.forEach((propertyValue)=>
        {
            if(propertyValue> maxFrequency){
                maxFrequency = propertyValue
            }
        })
        
        //Now find elements with max frequency
        let elements: Array<keyof Concentration>=[];
        Mode.forEach((frequency, element)=>{
            if(frequency === maxFrequency){
              elements.push(element.toFixed(3))
            }
        })
        calculatedMode = { ...calculatedMode, [alcohol]: elements.join(",") }
    }
   return calculatedMode
};

export default calculateMode;
