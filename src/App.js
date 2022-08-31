import { useState } from 'react';

const Title = (props) => {
	return (
		<div>
			<h2>{props.text}</h2>
		</div>
	);
};

const Button = ({ onClick, text }) => {
	return (
		<div className='nappula'>
			<button className='btn' onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

const StatisticLine = ({ value, text }) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td className='row'>{text}</td>
						<td className='row'>{value}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};


const NoFeedBack = () => {
	return (
		<div>
			<p>No feedback given!</p>
		</div>
	);
};


const Statistics = (props) => {
	const good = props.good;
	const neutral = props.neutral;
	const bad = props.bad;
	const totalOfAll = props.totalOfAll;
	const average = props.average;
	const positive = props.positive;

	return totalOfAll === 0 ? (
		<NoFeedBack />
	) : (
		<div>
			<StatisticLine text='good' value={good} />
			<StatisticLine text='neutral' value={neutral} />
			<StatisticLine text='bad' value={bad} />
			<StatisticLine text='all' value={totalOfAll} />
			<StatisticLine text='average' value={average} />
			<StatisticLine text='positive' value={positive} />
		</div>
	);
};

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const goodYhteensä = () => {
		setGood(good + 1);
	};

	const neutralYhteensä = () => {
		setNeutral(neutral + 1);
	};


	const badYhteensä = () => {
		setBad(bad + 1);
	};


	const all = good + neutral + bad;
	const laskeKeskiarvo = (a, b, d) => {
		let c = -b;

		return (Number(a) + Number(c)) / d;
	};

	const laskePositiiviset = (a, b) => {
		return (parseFloat(a) / parseFloat(b)) * 100;
	};


	const average = laskeKeskiarvo(good, bad, all);

	const positivePercentage = `${laskePositiiviset(good, all)}%`;

	return (
		<div>
			<Title text={'give Feedback'} />
			<Button onClick={goodYhteensä} text='good' />
			<Button onClick={neutralYhteensä} text='neutral' />
			<Button onClick={badYhteensä} text='bad' />
			<Title text='statistics' />

			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				totalOfAll={all}
				average={average}
				positive={positivePercentage}
			/>
		</div>
	);
}

export default App;
