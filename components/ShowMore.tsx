'use client'

import { ShowMoreProps } from '@types'
import CustomButton from './CustomButton'

const ShowMore = ({ pageNumber, isNextPage, setLimit }: ShowMoreProps) => {
  const handleNav = () => {
    const newLimit = (pageNumber + 1) * 10
    setLimit(newLimit)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNextPage && (
        <CustomButton
          title="Show More"
          btnType="button"
          customStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNav}
        />
      )}
    </div>
  )
}

export default ShowMore
