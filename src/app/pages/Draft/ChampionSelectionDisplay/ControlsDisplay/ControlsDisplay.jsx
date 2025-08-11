import clsx from 'clsx';
import { memo } from 'react';
import { PICKS } from '../../../../controller/draftLogicControllerUtil.js';
import { ReactComponent as SettingsIcon } from '../../../../assets/settings.svg';

const ControlsDisplay = ({
	lockinButtonRef,
	type,
	actions,
	draft,
	setShowOptions,
	showOptions,
}) => {
	const mainButtonText = () => {
		if (draft.p <= -1)
			return type === 'blue' || type === 'red' ? 'ready' : 'Chuẩn bị';
            
		if (draft.p >= 20) return '';

		return PICKS.has(draft.p) ? 'Khóa' : 'Cấm';
	};

	return (
		<div className='controls'>
			<button
				className={clsx('lock-in', draft.p === -1 && 'start')}
				ref={lockinButtonRef}
				onClick={actions.lockin}
				disabled={draft.p !== -1 && !draft.d[draft.p]}
			>
				{mainButtonText()}
			</button>
		</div>
	);
};

export default memo(ControlsDisplay);
