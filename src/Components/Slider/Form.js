export default function Form({
	moveSlide,
	width,
	height,
	moveWidth,
	moveHeight,
}) {
	return (
		<div className="form">
			<div className="width">
				<label htmlFor="width">
					Width<span>{width}px</span>
				</label>
				<input
					type="range"
					className="width"
					placeholder="min"
					id="width"
					name="width"
					min="100"
					max="5000"
					value={width}
					onChange={moveWidth}
				/>
			</div>
			<div className="height">
				<label htmlFor="height">
					Height<span>{height}px</span>
				</label>
				<input
					type="range"
					className="height"
					placeholder="min"
					id="height"
					name="height"
					min="100"
					max="5000"
					value={height}
					onChange={moveHeight}
				/>
			</div>
			<button onClick={moveSlide}>Generate!</button>
		</div>
	);
}
