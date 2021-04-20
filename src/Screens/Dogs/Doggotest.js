import React, { useState, useEffect } from 'react';

const DoggoTest = () => {
    // const [hasData, setHasData] = useState(null);
    const [fetchedData, setFetchedData] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6')
            .then(async response => {
                const data = await response.json();
                setFetchedData(data);
                // setHasData(true);

            })
            .catch(error => {
                // setError(true);
                console.log('There was an error: ', error);
            })

    }, []);

    return (
        <div>
            {fetchedData.map((data, key) => {
                return (
                    <div onClick={() => { console.log('key: ', key, ' name: ', data.name, ' age: ', data.age) }} key={key}>

                        {data.name +
                            " , " +
                            data.age}

                    </div>
                )
            })
            }

        </div>
    )

}

export default DoggoTest;