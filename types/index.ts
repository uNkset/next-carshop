import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit'
  customStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface CustomFilterProps {
  title: string
}
