import Concentration from "../../types/Concentration";

const calculateGamma = (data: Concentration[]) => {
    const gamma = data.map((item: Concentration)=>{
        const gamma =(+item.Ash * item.Hue)/item.Magnesium;
        return {...item, "Gamma": gamma}
    })
   return gamma
};

export default calculateGamma;
