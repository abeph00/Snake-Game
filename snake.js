export const SNAKE_SPEED = 1;
const snakeBody = [{x: 11, y: 11}]

export function update() {
	console.log("update Snake");
}

export function draw() {
	snakeBody.forEach(segment => {
		const snakeElement = document.createElement("div");
		snakeElement.style.gridRowStart = segment.x;
		snakeElement.style.gridColumnStart = segment.y;
		snakeElement.classList.add();
		gameBoard.appendChild(snakeElement);
	})
}