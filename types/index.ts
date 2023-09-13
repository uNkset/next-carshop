import { MouseEventHandler } from 'react'

export type CarState = CarProps[] & { message?: string }

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void
  setModel: (model: string) => void
}

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit'
  customStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyles?: string
  rightIcon?: string
  isDisabled?: boolean
}

export interface SearchManufacturerProps {
  selected: string
  setSelected: (selected: string) => void
}

export interface OptionsProps {
  title: string
  value: string
}

export interface CustomFilterProps {
  options: OptionsProps[]
  setFilter: ((selected: string) => void) | ((selected: number) => void)
}

export interface CarProps {
  city_mpg: number
  class: string
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface FilterProps {
  manufacturer?: string
  year?: number
  model?: string
  limit?: number
  fuel?: string
}

export interface ShowMoreProps {
  pageNumber: number
  isNextPage: boolean
  setLimit: (limit: number) => void
}
