import { useHistory } from 'react-router-dom';

import './registry.css';
import DogpawPresent from '../../Resources/dog-paw.svg';
import DogpawAbsent from '../../Resources/dog-paw-absent.svg';

interface IProps {
  saveSelected: Function;
  dataLoaded: Boolean;
}

const Registry = ({ saveSelected, dataLoaded }: IProps) => {
  
  let localDataUnparsed = sessionStorage.getItem('dogs');
  let localData = JSON.parse(localDataUnparsed!);
  const history = useHistory();

  function clickedDog( data : string ) {
    sessionStorage.setItem('clickedDog', JSON.stringify(data));
    saveSelected();
    history.push("/individualdog");
  }

  return (
    
    <div>
      {dataLoaded && localData ? (
       
        localData.map((data : any, key : string) => {
          return (
            <div className="dogEntry" onClick={() => { clickedDog(data) }} key={key}>

              <img className="dogImageSmall" src={data.img} alt="" />
              <div className="dogInfo">

                <h3 className="dogName">{data.name}</h3>
                <img className="dogPresentIndicator" src={(data.present ? (DogpawPresent) : (DogpawAbsent))} alt="" />
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