import React from "react";

interface Props {
    mean: Record<number, number>;
    median: Record<number, number>;
    mode: Record<number, string | number>
    filteredDataArray: any;
}

const Table: React.FC<Props> = ({ mean, median, mode, filteredDataArray }) => {

    return (
        <div className="container">
            <table>
                <tbody>
                <tr>
                    <th>
                        Measure
                    </th>
                    {
                        Object.keys(filteredDataArray).map((key) => {
                            return <th key={key}>
                                ALcohol {key}
                            </th>
                        })
                    }
                </tr>
                <tr>
                    <th>Flavanoids Mean</th>
                    {
                        Object.keys(mean).map((key) => {
                            return <td key={key}>{(mean[+key]).toFixed(3)}</td>
                        })
                    }
                </tr>
                <tr>
                    <th>Flavanoids Median</th>
                    {
                        Object.keys(median).map((key) => {
                            return <td key={key}>{(median[+key]).toFixed(3)}</td>
                        })
                    }
                </tr>
                <tr>
                    <th>Flavanoids Mode</th>
                    {
                        Object.keys(mode).map((key) => {
                            const values = (mode[+key] as string).split(",")
                            return <td className="mode" key={key}>
                                {
                                    values.length === 1 ? values[0] : <select>
                                        {values.map((value, index) => {
                                            return <option key={index}>{value}</option>
                                        })}
                                    </select>
                                }
                            </td>
                        })
                    }
                </tr>
                </tbody>
            </table>
            <p>***Note: Used Dropdown as mode can be multiple for a data set</p>
        </div>
    )
};

export default Table;
