import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
    return (
        <div className="landing-page--wrapper">
            <header>
                <div className="splash-decoration">
                    <div>
                    <img
				src="https://sportday.support247.top/wp-content/uploads/2022/07/MicrosoftTeams-image-2048x374.png"
                width={400}
			/>
                    </div>
                </div>
                <Link to="/menu" className="start">START</Link>
            </header>
        </div>
    );
}

export default Landing;
