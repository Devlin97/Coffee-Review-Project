import React, {useEffect, useState} from 'react';
import RecipesSearch from './RecipesSearch';

function Recipes() {

    const[recipes, setRecipes] = useState([]);

    const fetchData = async () => {

        console.log('Fetching....');
        const data = await fetch('/allrecipes');

        const jsonData = await data.json();

        console.log('JSON Data: ', jsonData);

        /* let tempRows = [];

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

        console.log(rows); */

        setRecipes(jsonData);
    }
    
    useEffect(() => {
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


    return (
        <RecipesSearch recipesIn={recipes} />
    )
}

export default Recipes;