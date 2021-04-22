const selectedDog = ({ dogData, navBack }) => {
  console.log('SelectedDog dogData: ', dogData);

  function navigateBack() {
    navBack();
  }

  if(!dogData) {
    console.log('no data through props - using data from local storage');
    dogData = JSON.parse(localStorage.getItem('clickedDog'));
  }

  return (

    <div onClick={() => { navigateBack() }}>
      {dogData ? (
        <div>
          <img src={dogData.img} alt="" />
          <p>Name: {dogData.name}</p>
          <p>Age: {dogData.age}</p>
          <p>Breed: {dogData.breed}</p>
          <p>Chipnumber: {dogData.chipNumber}</p>
          <p>Present:  {dogData.present}</p>
          <p>Sex: {dogData.sex}</p>
          <p>Owner:</p>
          <section className="ownerSection">
            <p>First name: {dogData.owner.name}</p>
            <p>Last name: {dogData.owner.lastName}</p>
            <p>Phone number: {dogData.owner.phoneNumber}</p>
          </section>
        </div>
      ) : (
        <div>
          <h6>There was an error loading your data - please try again</h6>
        </div>)}
    </div>

  )
}

export default selectedDog;