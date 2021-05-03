const GetData = async ( apiAddress : string , setLoaded : Function) => {

  const functionToRun = setLoaded;

  fetch(apiAddress)
    .then(async response => {
      const data = await response.json();
      // console.log('fetch OK - data: ', data);
      sessionStorage.setItem('dogs', JSON.stringify(data));
      functionToRun();
    })
    .catch(error => {
      console.log('There was an error: ', error);
    })
}

export default GetData;