'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchManufacturer } from './'

const SearchButton = ({ addCss }: { addCss: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${addCss}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (manufacturer.trim() === '' && model.trim() === '') {
      return alert('Please select search parameters')
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    )
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    // create new search parameters
    const searchParams = new URLSearchParams(window.location.search)

    // add selected model and manufacturer
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    if (model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    // build new path with given parameters
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    // display new url with search params
    router.push(newPathname, { scroll: false })
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton addCss="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton addCss="sm:hidden" />
      </div>
      <SearchButton addCss="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
