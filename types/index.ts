import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  btnType?: 'button' | 'submit'
  customStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}
