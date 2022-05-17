const hideBlock = () => {
	const hideButton = document.querySelector("#hideBlock"),
		textBlock = document.querySelector(".titled");

	hideButton.addEventListener("click", () => {
		textBlock.classList.toggle("hidden");
	});
};

const changeOrder = () => {
	const changeButton = document.querySelector("#changeOrder"),
		secondBlock = document.querySelector(".colorful__block-second");

	changeButton.addEventListener("click", () => {
		secondBlock.classList.toggle("lowOrder");
	});
};
