import { Link } from 'react-router-dom';
import RecentTournamentData from '../../assets/RecentTournamentData.json';
import './TournamentList.scss';

const TournamentList = () => {
    return (
        <div className="tournament-list--page">
        </div>
    );
}

const StageList = ({ tournament, name, days }) => {
    return (
        <div className="stage">
        </div>
    );
}
const DayList = ({ tournament, date, games }) => {
    return (
        <div className="day card__component" key={date}>
        </div>
    );
}

export default TournamentList;
