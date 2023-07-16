import { useMemo} from "react";
import data from "../statastics/Wine-Data.json";
import calculateGamma from "./utils/calculateGamma";
import getFilteredData from "./utils/getFilteredData";
import calculateMean from "./utils/calculateMean";
import ConcentrationEnum from "../types/ConcentrationEnum";
import calculateMedian from "./utils/calculateMedian";
import calculateMode from "./utils/calculateMode";
import "./Table.css";
import Table from "./Table";

const GammaCalculationsTable = () => {

  const dataWithGamma = useMemo(()=>calculateGamma(data),[])
  const filteredDataArray = useMemo(()=>getFilteredData(dataWithGamma),[dataWithGamma])

  const mean = useMemo(()=>calculateMean(filteredDataArray, ConcentrationEnum["GAMMA"]),[filteredDataArray])
  const median = useMemo(()=>calculateMedian(filteredDataArray,ConcentrationEnum["GAMMA"] ), [filteredDataArray])

  const mode = useMemo(()=>calculateMode(filteredDataArray, ConcentrationEnum["GAMMA"] ),[filteredDataArray])

  return (
    <Table mean={mean} median={median} mode={mode} filteredDataArray={filteredDataArray}/>
)
};

export default GammaCalculationsTable;
