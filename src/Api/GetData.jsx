const GetData = async (apiAddress, setLoaded) => {
  
  fetch(apiAddress)
    .then(async response => {
      const data = await response.json();
      console.log('fetch OK');
      localStorage.setItem('dogs', JSON.stringify(data));
      setLoaded();
    })
    .catch(error => {
      console.log('There was an error: ', error);
    })
}

export default GetData;