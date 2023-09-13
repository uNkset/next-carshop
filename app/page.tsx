'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@components'
import { fuels, yearsOfProduction } from '@constants'
import { fetchCars } from '@utils'
import { CarState } from '@types'
import { Console } from 'console'

export default function Home() {
  const [carList, setCarList] = useState<CarState>([])
  const [loading, setLoading] = useState(false)

  //search
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  //filter
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)

  //limit
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    const getCars = async () => {
      setLoading(true)
      try {
        const response = await fetchCars({
          manufacturer: manufacturer.toLocaleLowerCase() || '',
          year: year || 2022,
          fuel: fuel.toLocaleLowerCase() || '',
          limit: limit || 10,
          model: model.toLocaleLowerCase() || '',
        })

        setCarList(response)
      } catch {
        console.error()
      } finally {
        setLoading(false)
      }
    }

    getCars()
  }, [manufacturer, model, fuel, year, limit])

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {carList.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {carList.map((car, i) => (
                <CarCard key={`car-${i}`} car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNextPage={limit > carList.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          !loading && (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">
                Oops, no results found
              </h2>
              <p>{carList?.message}</p>
            </div>
          )
        )}
      </div>
    </main>
  )
}
