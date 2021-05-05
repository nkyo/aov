import useDraftLogicController from '../../controller/hooks/useDraftLogicController';
import TeamPickDisplay from './TeamPickDisplay';
import './Draft.scss';
import ChampionSelectionDisplay from './ChampionSelectionDisplay/ChampionSelectionDisplay';

const Draft = () => {
    const {
        blueTeamRenderData, 
        redTeamRenderData,
        localCurrentPick,
        lockin,
        select,
    } = useDraftLogicController();

    return (
        <main className="draft--wrapper">
            <div className="pickban-select--wrapper">
                <TeamPickDisplay isLeft={true} currentPick={localCurrentPick} teamPickData={blueTeamRenderData}/>
                <ChampionSelectionDisplay lockin={lockin} select={select} />
                <TeamPickDisplay isLeft={false} currentPick={localCurrentPick} teamPickData={redTeamRenderData} />
            </div>
        </main>
    )
}

export default Draft;
