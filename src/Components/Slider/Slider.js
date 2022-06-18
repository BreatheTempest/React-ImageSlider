import { useState } from 'react';

import './Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	function generateImg() {
		const resolution = `1${Math.floor(Math.random() * 100) + 800}`;
		return `https://source.unsplash.com/featured/1${resolution}x1${resolution}`;
	}

	const images = dataSlider.map((obj, index) => {
		return (
			<div
				key={obj.id}
				className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
			>
				<img src={generateImg()} alt="" />
			</div>
		);
	});

	const nextSlide = () => {
		if (slideIndex !== dataSlider.length) {
			setSlideIndex((prevIndex) => prevIndex + 1);
		} else if (slideIndex === dataSlider.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex((prevIndex) => prevIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(5);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className="container-slider">
			{images}
			<BtnSlider moveSlide={nextSlide} direction={'next'} />
			<BtnSlider moveSlide={prevSlide} direction={'prev'} />
			<div className="container-dots">
				{Array.from({ length: 5 }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? 'dot active' : 'dot'}
					></div>
				))}
			</div>
		</div>
	);
}
