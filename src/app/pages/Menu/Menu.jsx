import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import cn from './Menu.module.scss';

const Menu = ({ setNav }) => {
	useEffect(() => { setNav({}) }, [setNav]);

	return (
		<div className={cn.container}>
			<div className={cn['selection--holder']}>
				<Link to='/practice' className={clsx(cn.test, 'card__component')}>
					<div className={clsx(cn.selection, cn.test)}>
						<h2>Practice.</h2>
						<span>(BTC điều phối)</span>
						<p>
BTC cấm chọn theo yêu cầu
						</p>
					</div>
				</Link>
				<Link to='/challenge' className={clsx(cn.draft, 'card__component')}>
					<div className={clsx(cn.selection, cn.draft)}>
						<h2>Giải đấu.</h2>
						<span>(2 Teams + BTC)</span>
						<p>
Mỗi đội sẽ có trang cấm và chọn riêng.
						</p>
					</div>
				</Link>
				<Link to='/tournaments' className={clsx(cn.explore, 'card__component')}>
					<div className={clsx(cn.selection, cn.explore)}>
						<h2>Explore.</h2>
						<span>(Most major regions supported)</span>
						<p>
							Examine and analyze completed drafts at the highest
							level of league competition from all regions. In the
							process of adding more.
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Menu;
