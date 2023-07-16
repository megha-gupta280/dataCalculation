import { useMemo } from "react"
import data from "../statastics/Wine-Data.json";
import getFilteredData from "./utils/getFilteredData";
import calculateMean from "./utils/calculateMean";
import calculateMode from "./utils/calculateMode";
import calculateMedian from "./utils/calculateMedian";
import ConcentrationEnum from "../types/ConcentrationEnum";
import  "./Table.css";
import Table from "./Table";


const FlavanoidsCalculations = () => {

    const filteredDataArray = getFilteredData(data);
    const mean = useMemo(() => calculateMean(filteredDataArray, ConcentrationEnum.FLAVANOIDS), [filteredDataArray])
    const mode = useMemo(() => calculateMode(filteredDataArray, ConcentrationEnum.FLAVANOIDS), [filteredDataArray])
    const median = useMemo(() => calculateMedian(filteredDataArray,  ConcentrationEnum.FLAVANOIDS), [filteredDataArray])

    return (
        <Table mean={mean} mode={mode} median={median} filteredDataArray={filteredDataArray}/>
    )
};

export default FlavanoidsCalculations;
