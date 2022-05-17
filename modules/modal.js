const modals = () => {
	const modal = document.querySelector(".popup"),
		close = document.querySelector(".popup__close");

	const calcScroll = () => {
		const div = document.createElement("div");

		div.style.height = "50px";
		div.style.width = "50px";
		div.style.overflowY = "scroll";
		div.style.visibility = "hidden";

		document.body.appendChild(div);

		const scrollWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		return scrollWidth;
	};

	const scroll = calcScroll();

	const showModal = (modal, time) => {
		setTimeout(function () {
			modal.style.display = "block";
			document.body.classList.add("modal-open");
			document.body.style.marginRight = `${scroll}px`;
		}, time);
	};

	const closeModal = () => {
		modal.style.display = "none";
		document.body.classList.remove("modal-open");
		document.body.style.marginRight = `0px`;
	};

	close.addEventListener("click", () => {
		closeModal();
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeModal();
		}
	});

	showModal(modal, 500);
};
