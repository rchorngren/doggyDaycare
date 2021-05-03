import { useHistory } from 'react-router-dom';
import DoggyButton from '../../Components/DoggyButton';
import './welcome.css';

const Welcome = () => {

  const history = useHistory();
  const buttonText = "Yes, please";

  function navigateToRegistry() {
    history.push("listofdogs");
  }

  return (
    <section className="Welcome">
      <div>
        <p>Welcome to Doggy Daycare</p>
        <p>Would you like to view all dogs currently registered with us?</p>
      </div>

      <DoggyButton buttonText={buttonText} functionOnClick={navigateToRegistry} />
      
    </section>
  )
}

export default Welcome;