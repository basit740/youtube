import './Output.css';
const OutPut = ({ age }) => {
	return (
		<div className='output'>
			<div className='output__item'>
				{age && age.years ? (
					<span className='output__number'>{age.years}</span>
				) : (
					<span className='output__number'>--</span>
				)}
				<span className='output__text'>years</span>
			</div>
			<div className='output__item'>
				{age && age.months ? (
					<span className='output__number'>{age.months}</span>
				) : (
					<span className='output__number'>--</span>
				)}

				<span className='output__text'>months</span>
			</div>
			<div className='output__item'>
				{age && age.days ? (
					<span className='output__number'>{age.days}</span>
				) : (
					<span className='output__number'>--</span>
				)}

				<span className='output__text'>days</span>
			</div>
		</div>
	);
};

export default OutPut;
