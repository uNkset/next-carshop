'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@types'
import { updateSearchParams } from '@utils'

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [seleceted, setSeleceted] = useState(options[0])
  const router = useRouter()

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathname = updateSearchParams(title, e.value)

    router.push(newPathname, { scroll: false })
  }

  return (
    <div className="w-fit">
      <Listbox
        value={seleceted}
        onChange={(e) => {
          setSeleceted(e)
          handleUpdateParams(e)
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{seleceted.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="up and down arrows"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-primary-blue text-white' : 'text-gray-900'
                    }`
                  }
                  key={option.title}
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-semibold' : 'font-normal'
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
