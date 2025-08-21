function updateClock() {
	const now = new Date();
	let hours = now.getHours().toString().padStart(2, "0");
	let minutes = now.getMinutes().toString().padStart(2, "0");
	let seconds = now.getSeconds().toString().padStart(2, "0");
	document.getElementById(
		"clock"
	).textContent = `${hours}:${minutes}:${seconds}`;
}
// PIN lock
const correctPIN = "25269000"; // set your PIN here

function checkPIN() {
  const input = document.getElementById("pin-input").value;
  const errorMsg = document.getElementById("pin-error");

  if (input === correctPIN) {
    document.getElementById("pin-lock").style.display = "none"; // unlock
  } else {
    errorMsg.textContent = "Incorrect PIN. Try again.";
  }
}


setInterval(updateClock, 1000);
updateClock();

function updateCharts() {
	document.querySelectorAll(".chart-bar").forEach((bar) => {
		const baseHeight = parseFloat(bar.style.getPropertyValue("--height"));
		const randomVariation = Math.random() * 10 - 5;
		const newHeight = Math.max(5, Math.min(100, baseHeight + randomVariation));
		bar.style.height = `${newHeight}%`;
	});
}

function updateDataValues() {
	const cpuUsage = Math.floor(65 + Math.random() * 30);
	document.querySelector(
		".system-status .status-item:nth-child(2) .status-value"
	).textContent = `${cpuUsage}%`;
	document.querySelector(
		".system-status .status-item:nth-child(2) .status-bar-fill"
	).style.width = `${cpuUsage}%`;

	const statusValues = document.querySelectorAll(".status-value");
	const randomIndex = Math.floor(Math.random() * statusValues.length);
	if (statusValues[randomIndex].textContent.includes("%")) {
		const currentValue = parseInt(statusValues[randomIndex].textContent);
		const newValue = Math.max(
			5,
			Math.min(99, currentValue + Math.floor(Math.random() * 5) - 2)
		);
		statusValues[randomIndex].textContent = `${newValue}%`;
	}
}

setInterval(updateCharts, 3000);
setInterval(updateDataValues, 5000);