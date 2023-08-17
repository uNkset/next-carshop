import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  customStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}
