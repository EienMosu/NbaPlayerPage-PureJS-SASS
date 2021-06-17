let data;

const fetchData = async () => {
	const url = "https://www.balldontlie.io/api/v1/players";
	try {
		const response = await fetch(url);
		const resData = await response.json();
		data = resData.data;
	} catch (error) {
		alert("error occured while fetching data");
	}
};

const generateTable = (inputData) => {
	let table_data = "";
	inputData.forEach((element) => {
		table_data += `

		 <tr>
		 <td>${element.id}</td>
		 <td>${element.first_name} ${element.last_name}</td>
		 <td>${element.position}</td>
		 <td>${element.team.name}</td>
		 <td>${element.team.city}</td>
		 </tr>
		 `;
	});

	return `
		
	<table class="table">
		<tr>
			<th>ID</th>
			<th>Full name</th>
			<th>Position</th>
			<th>Team</th>
			<th>City</th>
		</tr>
		${table_data}
	</table>`;
};

const searchFilter = (searchWord) => {
	return data.filter((info) => {
		const fullname = `${info.first_name} ${info.last_name}`;
		return fullname.toLowerCase().includes(searchWord.toLowerCase());
	});
};

const searchElement = (searchPosition) => {
	return data.filter((info) => {
		const position = info.position;
		return position.includes(searchPosition);
	});
};

const sortFirstNameAs = () => {
	return data.sort((a, b) => {
		let fa = a.first_name.toLowerCase(),
			fb = b.first_name.toLowerCase();
	
		if (fa < fb) {
			return -1;
		}
		if (fa > fb) {
			return 1;
		}
		return 0;
	});
	};

	const sortFirstNameDes = () => {
		return data.sort((a, b) => {
			let fa = a.first_name.toLowerCase(),
				fb = b.first_name.toLowerCase();
		
			if (fa < fb) {
				return 1;
			}
			if (fa > fb) {
				return -1;
			}
			return 0;
		});
		};

window.addEventListener("load", async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const userName = document.querySelector("span.username");
	userName.innerHTML = urlParams.get("username");

	const loadingIndicator = document.querySelector("div.loading");
	const tableParent = document.querySelector("div.table");
	const tableDiv = document.querySelector("div.table-data");
	const searchBar = document.getElementById("search");
	const positionSelector = document.getElementById("position-filter")
	const ascendingBtn = document.getElementById("click-as")
	const descendingBtn = document.getElementById("click-des")

	descendingBtn.addEventListener("click", async function() {
		const filteredData = await sortFirstNameDes(this.value);
		tableParent.innerHTML = generateTable(filteredData);
	});

	ascendingBtn.addEventListener("click", async function() {
		const filteredData = await sortFirstNameAs(this.value);
		tableParent.innerHTML = generateTable(filteredData);
	});

	positionSelector.addEventListener('change', async function () {
		const filteredData = await searchElement(this.value);
		tableParent.innerHTML = generateTable(filteredData);
	});

	searchBar.addEventListener("input", async function () {
		const filteredData = await searchFilter(this.value);
		tableParent.innerHTML = generateTable(filteredData);
	});

	await fetchData();

	loadingIndicator.classList.add("hide");
	tableDiv.classList.remove("hide");

	tableParent.innerHTML = generateTable(data);
});
