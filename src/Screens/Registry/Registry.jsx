import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './registry.css';
// import GetData from '../../Api/GetData';
import DogpawPresent from '../../Resources/dog-paw.svg';
import DogpawAbsent from '../../Resources/dog-paw-absent.svg';

const Registry = ({ logClickedDog, dataLoaded }) => {
  const [reallyLoaded, setReallyLoaded] = useState(false);

  // if(!dataLoaded) {
  //   GetData(() => {setLoaded(true)});
  // }

  let localDataUnparsed = localStorage.getItem('dogs');
  let localData = JSON.parse(localDataUnparsed);
  const history = useHistory();

  function clickedDog(data) {
    localStorage.setItem('clickedDog', JSON.stringify(data));
    logClickedDog();
    history.push("/individualdog");
  }

  // useEffect(() => {
  //   if(localData) {
  //     console.log('reallyLoaded')
  //     setReallyLoaded(true);
  //   }
  // }, [dataLoaded]);

  return (

    <div>
      {dataLoaded && localData ? (
        localData.map((data, key) => {
          return (
            <div className="dogEntry" onClick={() => { clickedDog(data) }} key={key}>

              <div className="dogInfo">
                <img className="dogImageSmall" src={data.img} alt="" />
                <div className="dogInfoText">
                  <h3 className="dogName">{data.name}</h3>
                  <img className="dogPresentIndicator" src={(data.present ? (DogpawPresent) : (DogpawAbsent))} alt="" />
                </div>
              </div>

            </div>
          )
        })
      ) : (
        <div>
          <p>Loading doggos, please wait</p>
        </div>
      )}
    </div>
  )
}

export default Registry;