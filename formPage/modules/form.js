const maskedPhone = () => {
	const element = document.querySelector(".plugin__input_imaskjs");
	let phoneMask = IMask(element, {
		mask: "+{7} (000) 000-00-00",
		lazy: false,
		placeholderChar: "_",
	});
	phoneMask.updateValue();
};

const forms = () => {
	const form = document.querySelector(".form"),
		selects = document.querySelectorAll(".form-control"),
		inputs = document.querySelectorAll(".form-inputs__input"),
		formWrapper = document.querySelector(".form-wrapper");

	console.log(inputs);

	const clearInputs = () => {
		inputs.forEach((input) => (input.value = ""));
		selects.forEach((select) => select.defaultSelected);
	};

	const postData = async (url) => {
		const result = await fetch(url, {
			method: "GET",
		});

		return await result.text();
	};

	const showData = (jsonData) => {
		const dataElement = document.createElement("div");
		dataElement.classList.add("data");
		dataElement.textContent = jsonData;
		dataElement.before(formWrapper, dataElement);
	};

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		console.log(formData);
		const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
		console.log(jsonData);
		console.log(showData());

		postData("./dummyServer.js", jsonData)
			.then((response) => {
				if (response.ok) {
					alert("Данные успешно отправлены");
					showData(json);
				}
			})
			.catch((error) => {
				console.log(error);
				alert("Произошла ошибка!");
			})
			.finally(() => {
				clearInputs();
			});
	});
};
