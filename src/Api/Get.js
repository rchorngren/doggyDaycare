import { Component } from 'react';

function getData() {
  fetch('https://api.jsonbin.io/b/5f4d604b514ec5112d136cd6')
      .then(async response => {
          const data = await response.json();

          console.log('fetched dogs: ', data);
        //   localStorage.setItem('dogs', data);
        saveToLocalStorage(data);
      })
      .catch(error => {
          console.log('There was an error: ', error);
      })
}

function saveToLocalStorage(data) {
        console.log('saving data...');
        localStorage.setItem('dogs', JSON.stringify(data));

}

export default class Get extends Component {

  componentDidMount() {
    getData();
}

  render() {
    return null
  }

}