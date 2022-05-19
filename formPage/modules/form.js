const forms = () => {
	const form = document.querySelector(".form"),
		selects = document.querySelectorAll(".form-control"),
		inputs = document.querySelectorAll(".form-inputs__input"),
		formWrapper = document.querySelector(".form-wrapper");

	selects[0].focus();
	
	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.value = input.value.replace(/\d/, "");
			alert("Цифры вводить нельзя.");
		});
	});

	const clearInputs = () => {
		inputs.forEach((input) => (input.value = ""));
		selects.forEach((select) => select.defaultSelected);
	};

	const getData = async (url) => {
		await fetch(url)
			.then((response) => {
				
				if (response.ok) {
					alert("Данные успешно отправлены");
				}
			})
			.catch((error) => {
				console.log(error);
				alert("Произошла ошибка!");
			})
			.finally(() => {
				clearInputs();
			});
	};

	const showData = (jsonData) => {
		const dataElement = document.createElement("div");
		dataElement.classList.add("data");
		dataElement.textContent = jsonData;
		formWrapper.querySelector("form").append(dataElement);
	};

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const jsonData = JSON.stringify(
			{
				selectFirst: document.querySelector('select[name="numbers-1"]')
					.value,
				selectSecond: document.querySelector('select[name="numbers-2"]')
					.value,
				selectThird: document.querySelector('select[name="numbers-3"]')
					.value,
				selectFourth: document.querySelector('select[name="numbers-4"]')
					.value,
				selectFifth: document.querySelector('select[name="numbers-5"]')
					.value,
				name: document.querySelector('input[name="name"]').value,
				last_name: document.querySelector('input[name="last-name"]')
					.value,
			},
			null,
			"  "
		);

		showData(jsonData);

		getData("./dummyServer.js");
	});
};
