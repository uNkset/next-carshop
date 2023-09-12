'use client'

import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll = () => {}

  return (
    <section className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Your best way to find, book, or rent a car — safe your time and
          energy!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          btnType="button"
          customStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            className="object-contain"
            fill
            sizes="(max-width: 1280px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  )
}

export default Hero
