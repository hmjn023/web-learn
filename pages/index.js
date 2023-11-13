// index.html
import { useState } from 'react';
function Header({ title }) {
	return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton', 'huga', 'piyo'];

	const [likes, setLikes] = useState(0);

	function handleClick() {
		setLikes(likes + 1);
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship. 🚀🐸" />
			<h1>hogeg</h1>
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>
			<hr />

			<button onClick={handleClick}>Like ({likes})</button>
			<hr />
			<p>{eval('(1+1)*3/2')}</p>
			<form>
				<label>
					<p>text</p>
					<input type='text' name='text' />
					<br />
				</label>
				<label>
					<input type='radio' />
					huga
				</label>
				<br />
				<input type='submit' />
			</form>
		</div>
	);
}

