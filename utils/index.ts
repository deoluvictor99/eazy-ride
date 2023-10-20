const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';


export const fetchCars = async () => {
    const headers = {
		'X-RapidAPI-Key': 'b1ddda7e42msh1ba0c2d8465dc35p1fb98fjsnb9d240eed493',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch(url, {
        headers
    })
    
    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg:number, year:number) => {
    const basePricePerDay = 45000 /* Base rental price per day in Naira */

    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
}
