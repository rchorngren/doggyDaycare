import { useHistory } from 'react-router-dom';
import './welcome.css';

const Welcome = () => {

  const history = useHistory();

  function navigateToRegistry() {
    history.push("listofdogs");
  }

  return (
    <section className="Welcome">
      <div>
        <p>Welcome to Doggy Daycare</p>
        <p>Would you like to view all dogs currently registered with us?</p>
      </div>

      {/* <Link to="listofdogs"> */}
        <div className="divButton" onClick={navigateToRegistry}>Yes please!</div>
        {/* </Link> */}
    </section>
  )
}

export default Welcome;