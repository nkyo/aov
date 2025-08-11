import { useState } from 'react';
import Toggle from 'react-toggle';
import ControlledTextInput from '../../../components/ControlledTextInput';
import { Links } from '../../../components/PeerDisplays';
import useCreateRoom from '../controller/useCreateRoom';
import ExpandLessIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import clsx from 'clsx';
import cn from './Challenge.module.sass';

const Challenge = () => {
	const [matchName, setMatchName] = useState('');
	const [blueTeamName, setBlueTeamName] = useState('');
	const [redTeamName, setRedTeamName] = useState('');

	const [hasAdvancedOptions, setHasAdvancedOptions] = useState(false);
	const [hasTimeLimits, setHasTimeLimits] = useState(true);
	const [timeLimit, setTimeLimit] = useState(30);

	const [areOptionsFinalized, setAreOptionsFinalized] = useState(false);

	const { handleSubmit, roomid, redhash, bluehash } = useCreateRoom(
		matchName,
		blueTeamName,
		redTeamName,
		hasTimeLimits,
		timeLimit,
		setAreOptionsFinalized,
	);

	return (
		<div className={cn.container}>
			<form
				className={clsx(cn.content, 'card__component')}
				onSubmit={handleSubmit}
			>
				<h2>Thiết lập</h2>
				<span>
					{areOptionsFinalized
						? 'Options are set. Use the links to draft'
						: ''}
				</span>
				<div>
					<NameInput
						disabled={areOptionsFinalized}
						name='Match'
						example='Show Match'
						value={matchName}
						setValue={setMatchName}
					/>
					<NameInput
						disabled={areOptionsFinalized}
						name='Blue'
						example='Mắt Bão'
						value={blueTeamName}
						setValue={setBlueTeamName}
					/>
					<NameInput
						disabled={areOptionsFinalized}
						name='Red'
						example='SKT'
						value={redTeamName}
						setValue={setRedTeamName}
					/>

					<div
						className={cn.options}
						onClick={() => {
							setHasAdvancedOptions(prev => !prev);
						}}
					>
						<p>Nâng cao</p>
						{
							hasAdvancedOptions 
								? <ExpandLessIcon />
								: <ExpandMoreIcon />
						}
					</div>
					{hasAdvancedOptions && (
						<div className={cn['time-limits']}>
							<label htmlFor='timer'>Giới hạn thời gian:</label>
							<Toggle
								id={cn.timer}
								icons={false}
								className={cn['timer-toggle']}
								checked={hasTimeLimits}
								onChange={() => {
									!areOptionsFinalized &&
										setHasTimeLimits(prev => !prev);
								}}
							/>
							{hasTimeLimits && (
								<>
									<label className='seconds' htmlFor='timer'>
										Thời gian mỗi lượt:
									</label>
									<ControlledTextInput
										disabled={areOptionsFinalized}
										id={cn['time-limit']}
										value={timeLimit}
										setValue={setTimeLimit}
									/>
								</>
							)}
						</div>
					)}
				</div>
				<button disabled={areOptionsFinalized}>
					{areOptionsFinalized
						? 'Chuẩn bị!'
						: 'Bắt đầu'}
				</button>
			</form>
			<div className={clsx(cn['link-holder'], 'card__component')}>
				<Links roomid={roomid} blue={bluehash} red={redhash} />
			</div>
		</div>
	);
};

const NameInput = ({ name, value, setValue, example, disabled }) => {
	return (
		<>
			<label htmlFor={`${name}-team-name`}>
				{name === 'Match' ? name : name + ' Team'} Name:{' '}
				<span>(optional)</span>
			</label>
			<ControlledTextInput
				disabled={disabled}
				id={`${name}-team-name`}
				placeholder={'Ex. ' + example}
				value={value}
				setValue={setValue}
			/>
		</>
	);
};

export default Challenge;
