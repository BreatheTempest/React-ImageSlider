import { useState } from 'react';

import './Slider.css';
import Form from './Form';

export default function Slider() {
	const [width, setWidth] = useState(2000);
	const [height, setHeight] = useState(2000);

	const moveWidth = (e) => setWidth(e.target.value);
	const moveHeight = (e) => setHeight(e.target.value);

	function generateImg(width, height) {
		return `https://source.unsplash.com/featured/${width}x${height}`;
	}

	const [imageUrl, setImageUrl] = useState(generateImg(width, height));

	const nextImg = () => {
		setImageUrl(generateImg(width, height));
	};

	return (
		<div className="container">
			<h1>Generate Random Image</h1>
			<h4>(But you can not save it)</h4>
			<Form
				moveSlide={nextImg}
				width={width}
				height={height}
				moveWidth={moveWidth}
				moveHeight={moveHeight}
			/>
			<div className="image">
				<img src={imageUrl} alt=""></img>
			</div>
		</div>
	);
}
