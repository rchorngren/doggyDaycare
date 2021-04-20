const GetData = async (setHasData) => {
  const apiKey = 'https://api.jsonbin.io/b/607ef0d824143e5df08a0676';
  
  fetch(apiKey)
    .then(async response => {
      const data = await response.json();
      console.log('fetch OK');
      localStorage.setItem('dogs', JSON.stringify(data));
      setHasData();
    })
    .catch(error => {
      console.log('There was an error: ', error);
    })
}

export default GetData;