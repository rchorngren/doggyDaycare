const Registry = () => {
  let localDataUnparsed = localStorage.getItem('dogs');
  let localData = JSON.parse(localDataUnparsed);


    return (

      <div>
        {localData.map((data, key) => {
          return (
            <div onClick={() => { console.log('you clicked!', data) }} key={key}>
              {data.name}
            </div>
          )
        })}
      </div>
    )


}

export default Registry;