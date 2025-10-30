console.log("email.js loaded");

document.querySelectorAll(".show-email").forEach((btn) => {
	btn.addEventListener("click", () => {
		const user = atob(btn.dataset.u);
		const domain = atob(btn.dataset.d);
		const email = `${user}@${domain}`;

		window.location.href = `mailto:${email}`;
	});
});
