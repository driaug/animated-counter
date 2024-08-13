import './styles/index.css';
import Counter from './components/Counter';

export default function App() {
	return (
		<>
			<section>
				<h2>0 to 1000</h2>
				<p>
					<Counter value={1000} />
				</p>
			</section>
			<section>
				<h2>0 to -1000</h2>
				<p>
					<Counter value={-1000} />
				</p>
			</section>
			<section>
				<h2>1000 to 0</h2>
				<p>
					<Counter value={1000} direction="down" />
				</p>
			</section>
		</>
	);
}
