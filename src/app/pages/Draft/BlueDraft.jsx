import { useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import TeamPickDisplay from './TeamPickDisplay';
import useFirestoreDraft from '../../controller/hooks/useFirestoreDraft';
import ChampionSelectionDisplay from './ChampionSelectionDisplay';
import './Draft.scss';

const BlueDraft = ({
	setNavigationContent,
}) => {
    const {id, hash} = useParams();
	const { actions, draft, currentPick, render, ready } =
		useFirestoreDraft(setNavigationContent, id, hash);

    const lockinWithReadyCheck = () => {

    }

	return (
		<main className='draft--wrapper'>
			<div className='pickban-select--wrapper'>
				<TeamPickDisplay
					currentPick={currentPick}
					teamRenderData={render.blue}
					side='blue'
				/>
				<ChampionSelectionDisplay
					{...draft}
					{...actions}
					lockin={lockinWithReadyCheck}
					// undo={undo}
                    ready={ready}
					settings={{
                        type: 'blue',
					}}
				/>
				<TeamPickDisplay
					currentPick={currentPick}
					teamRenderData={render.red}
					side='red'
				/>
			</div>
		</main>
	);
};

export default memo(BlueDraft);
