import './registry.css';
import DogpawPresent from '../../Resources/dog-paw.svg';
import DogpawAbsent from '../../Resources/dog-paw-absent.svg';

const Registry = ({ logClickedDog }) => {
  let localDataUnparsed = localStorage.getItem('dogs');
  let localData = JSON.parse(localDataUnparsed);

  function clickedDog(data) {
    localStorage.setItem('clickedDog', JSON.stringify(data));
    logClickedDog();
  }

  return (

    <div>
      {localData.map((data, key) => {
        return (
          <div className="dogEntry" onClick={() => { clickedDog(data) }} key={key}>


            <div className="dogInfo">
              <img className="dogImageSmall" src={data.img} alt="" />
              <div className="dogInfoText">
                <h3 className="dogName">{data.name}</h3>
                {/* <p className="dogAge">Age: {data.age}</p>
                <p className="dogBreed">Breed: {data.breed}</p> */}
                {/* <div className="dogPresent"> */}
                <img className="dogPresentIndicator" src={(data.present ? (DogpawPresent) : (DogpawAbsent))} alt="" />
                {/* </div> */}
              </div>
            </div>
            {/* <section className="dogPresent">
              <img className="dogPresentIndicator" src={(data.present ? (DogpawPresent) : (DogpawAbsent))} alt="" />
            </section> */}
          </div>
        )
      })}
    </div>
  )
}

export default Registry;