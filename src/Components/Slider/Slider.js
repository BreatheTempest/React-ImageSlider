import { useState } from 'react';

import './Slider.css';
import BtnSlider from './BtnSlider';

export default function Slider() {
	function generateImg() {
		function randomRange(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		}
		return `https://source.unsplash.com/featured/${randomRange(
			1500,
			2000
		)}x${randomRange(800, 1000)}`;
	}

	const [imageUrl, setImageUrl] = useState(generateImg);

	const nextImg = () => {
		setImageUrl(generateImg);
	};

	return (
		<div className="container">
			<h1>Generate random images</h1>
			<h4>Without ability to save them</h4>
			<div className="image">
				<img src={imageUrl} alt=""></img>
			</div>
			<BtnSlider moveSlide={nextImg} />
		</div>
	);
}

// const [slideIndex, setSlideIndex] = useState(1);

// const images = dataSlider.map((obj, index) => {
// 	return (
// 		<div
// 			key={obj.id}
// 			className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
// 		>
// 			<img src={generateImg()} alt="" />
// 		</div>
// 	);
// });

// const nextSlide = () => {
// 	if (slideIndex !== dataSlider.length) {
// 		setSlideIndex((prevIndex) => prevIndex + 1);
// 	} else if (slideIndex === dataSlider.length) {
// 		setSlideIndex(1);
// 	}
// };

// const prevSlide = () => {
// 	if (slideIndex !== 1) {
// 		setSlideIndex((prevIndex) => prevIndex - 1);
// 	} else if (slideIndex === 1) {
// 		setSlideIndex(5);
// 	}
// };

// const moveDot = (index) => {
// 	setSlideIndex(index);
// };
