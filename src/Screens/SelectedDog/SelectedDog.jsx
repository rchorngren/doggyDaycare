import { Link } from 'react-router-dom';
import './selectedDog.css';

const SelectedDog = ({ dogData }) => {

  if (!dogData) {
    console.log('no data through props - using data from local storage');
    dogData = JSON.parse(localStorage.getItem('clickedDog'));
  }

  return (

    <div>
      {dogData ? (
        <div className="selectedDog">
          <section className="dogSection">
            <img src={dogData.img} alt="" />
            <div className="dawgInfo">
              <p>Name: {dogData.name}</p>
              <p>Age: {dogData.age}</p>
            </div>

          </section>

          <section className="dawgInfoMore">
              <p>Breed: {dogData.breed}</p>
              <p>Chipnumber: {dogData.chipNumber}</p>
              <p>Sex: {dogData.sex}</p>
              <p>Present:  {dogData.present ? (
                "Present"
              ) : (
                "Not present"
              )}</p>
            </section>

          <section className="ownerSection">
            <h4>Owner</h4>
            <p>Name: {dogData.owner.name} {dogData.owner.lastName}</p>
            <p>Phone number: {dogData.owner.phoneNumber}</p>
          </section>
        </div>
      ) : (
        <div>
          <h6>There was an error loading your data - please try again</h6>
          <Link to="/listofdogs"><h6>Go to list of dogs</h6></Link>
        </div>)}
    </div>

  )
}

export default SelectedDog;