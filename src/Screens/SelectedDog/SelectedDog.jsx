const selectedDog = ({ dogData, navBack }) => {
  console.log('SelectedDog dogData: ', dogData);

  function navigateBack() {
    navBack();
  }

  return (
    <div onClick={() => {navigateBack()}}>
      <img src={dogData.img} alt=""/>
      <p>{dogData.name}</p>
      <p>{dogData.age}</p>
      <p>{dogData.breed}</p>
      <p>{dogData.chipNummer}</p>
      <p>{dogData.present}</p>
      <p>{dogData.sex}</p>
      <p>Owner:</p>
      <section>
        <p>{dogData.owner.name}</p>
        <p>{dogData.owner.lastName}</p>
        <p>{dogData.owner.phoneNumber}</p>
      </section>
    </div>
  )
}

export default selectedDog;