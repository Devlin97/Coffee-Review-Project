import React, {useEffect, useState} from 'react';
import '../../App.css';

function Recipes() {

    const[rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            console.log('Fetching....');
            const data = await fetch('/allrecipes');

            const jsonData = await data.json();

            console.log('JSON Data: ', jsonData);

            let tempRows = [];

            jsonData.forEach((element) => {
                console.log('Looping...');
                tempRows.push(
                <tr>
                    <td>{element.title}</td>
                    <td>{element.brewMethod}</td>
                    <td>{element.brewer}</td>
                    <td>{element.coffeeWeight}</td>
                    <td>{element.waterWeight}</td>
                    <td>{element.totalTime}</td>
                </tr>
                );
            });

            setRows(tempRows);

            console.log(rows);
        }
        fetchData();
    }, []);


    // <tr>
    //                     <td>{element.title}</td>
    //                     <td>{element.brewMethod}</td>
    //                     <td>{element.brewer}</td>
    //                     <td>{element.coffeeWeight}</td>
    //                     <td>{element.waterWeight}</td>
    //                     <td>{element.totalTime}</td>
    //                 </tr>

    console.log(rows);

    return (
        <>
            <h1>
                TEST RECIPES
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Brew method</th>
                        <th>Brewer</th>
                        <th>Coffee Weight</th>
                        <th>Water Weight</th>
                        <th>Total Time</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default Recipes;