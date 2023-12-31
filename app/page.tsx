import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@components'
import { fuels, yearsOfProduction } from '@constants'
import { HomeProps } from '@types'
import { fetchCars } from '@utils'

export default async function Home({ searchParams }: HomeProps) {
  const carList = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2018,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(carList) || carList.length < 1 || !carList

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {carList.map((car, i) => (
                <CarCard key={`car-${i}`} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNextPage={(searchParams.limit || 10) > carList.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results found
            </h2>
            <p>{carList?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
