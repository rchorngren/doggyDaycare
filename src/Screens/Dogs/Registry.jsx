import './registry.css';
import DogpawPresent from '../../Resources/dog-paw.svg';
import DogpawAbsent from '../../Resources/dog-paw-absent.svg';

const Registry = () => {
  let localDataUnparsed = localStorage.getItem('dogs');
  let localData = JSON.parse(localDataUnparsed);

  function clickedDog(data) {
    localStorage.setItem('clickedDog', JSON.stringify(data));
  }

  return (

    <div>
      {localData.map((data, key) => {
        return (
          <div className="dogEntry" onClick={() => { clickedDog(data) }} key={key}>
            <img className="dogImageSmall" src={data.img} />

            <div className="dogInfo">
              <section className="dogInfoText">
                <p className="dogName">{data.name}</p>
                <p className="dogAge">Age: {data.age}</p>
                <p className="dogBreed">Breed: {data.breed}</p>
              </section>
              <section className="dogPresent">
                  <img className="dogPresentIndicator" src={(data.present ? (DogpawPresent) : (DogpawAbsent))} />
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Registry;