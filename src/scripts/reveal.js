document.addEventListener("DOMContentLoaded", () => {
	const hiddenText = document.getElementById("surprise-text");
	if (!hiddenText) return;

	// ⏳ Wait 3 seconds, then reveal the text
	setTimeout(() => {
		hiddenText.classList.add("visible");
	}, 2000); // 3000 ms = 3 seconds
});
