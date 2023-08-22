export function declareCanvas(canvas) {
	let ctx = canvas.getContext('2d');
	const color = (x, y, r, g, b) => {
		ctx.fillStyle = `rgb(${r},${g},${b})`;
		ctx.fillRect(x, y, 1, 1);
	};
	const R = (x, y, time) => {
		return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time));
	};
	const G = (x, y, time) => {
		return Math.floor(
			192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)
		);
	};
	const B = (x, y, time) => {
		return Math.floor(
			192 +
				64 *
					Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)
		);
	};
	let time = 0;

	const run = () => {
		for (let x = 0; x <= 35; x++) {
			for (let y = 0; y <= 35; y++) {
				color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
			}
		}
		time = time + 0.02;
		window.requestAnimationFrame(run);
	};
	run();
}
