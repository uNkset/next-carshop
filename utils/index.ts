export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '742b027497msh30c40ff9b27b1f8p1a70fcjsn252a4936dbe0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers }
  )

  const result = await response.json()

  return result
}
