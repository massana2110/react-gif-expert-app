import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
	const [categories, setCategories] = useState(['Naruto']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'Pokemon']); //mantener todos los elementos anteriores mas el nuevo
	// };

	return (
		<>
			<h2>GiftExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map(category => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</>
	);
};

export default GiftExpertApp;
