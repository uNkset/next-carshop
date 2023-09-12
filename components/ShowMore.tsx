'use client'

import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@types'
import CustomButton from './CustomButton'
import { updateSearchParams } from '@utils'

const ShowMore = ({ pageNumber, isNextPage }: ShowMoreProps) => {
  const router = useRouter()

  const handleNav = () => {
    const newLimit = (pageNumber + 1) * 10
    const newPathName = updateSearchParams('limit', `${newLimit}`)

    router.push(newPathName, { scroll: false })
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
