import clsx from 'clsx';
import { memo } from 'react';
import './ChampionPick.scss';

const transparentImageBase64 =
	'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

const ChampionPick = ({ className, name, id, num, isBlue  }) => {
	const iconSource = num
		? `https://esport.matbao.support/img/${id}.png`
		: transparentImageBase64;
        
	return (
		<div
			className={clsx(
				'champion-pick--wrapper',
				isBlue ? 'left' : 'right',
				className
			)}
		>
			<div
				className='pick'
				style={{
					backgroundImage: `url('${iconSource}')`,
					backgroundPosition: `100% 12%`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contains'

				}}
			>
				<span>Đang chọn...</span>
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default memo(ChampionPick);
