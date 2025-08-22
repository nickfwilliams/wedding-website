document.addEventListener("DOMContentLoaded", () => {
	const hiddenText = document.getElementById("surprise-text");
	if (!hiddenText) return;

	setTimeout(() => {
		hiddenText.classList.add("visible");
	}, 1000);
});
