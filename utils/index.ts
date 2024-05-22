export async function fetchCars() {
	const headers = {
		"x-rapidapi-key": "9e12b41fa5msh2bf831e7dd9fcb2p18ef95jsn0bdaf3e824e3",
		"x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const response = await fetch(
		"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
		{
			headers: headers,
		}
	);

	const result = await response.json();

	return result;
}
