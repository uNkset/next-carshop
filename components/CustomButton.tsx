'use client'

import Image from 'next/image'
import { CustomButtonProps } from '@types'

const CustomButton = ({
  title,
  btnType,
  customStyles,
  handleClick,
  textStyles,
  rightIcon,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType || 'button'}
      className={`custom-btn ${customStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            sizes="24px"
            className="object-contain"
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
