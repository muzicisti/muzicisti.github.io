import React from 'react'

import './Landing.css'

function Landing () {
  const [logoClasses, setLogoClasses] = React.useState(() => {
    return ['LandingLogo']
  })

  const [mottoClasses, setMottoClasses] = React.useState(() => {
    return ['LandingMotto']
  })

  React.useEffect(() => {
    if (logoClasses.includes('LandingLogo--Visible')) return

    const timeoutID = window.setTimeout(() => {
      setLogoClasses(['LandingLogo--Visible', ...logoClasses])
    }, 500)

    return () => window.clearTimeout(timeoutID)
  }, [logoClasses])

  React.useEffect(() => {
    if (mottoClasses.includes('LandingMotto--Visible')) return

    const timeoutID = window.setTimeout(() => {
      setMottoClasses(['LandingMotto--Visible', ...mottoClasses])
    }, 900)

    return () => window.clearTimeout(timeoutID)
  }, [mottoClasses])

  return (
    <div className='Landing'>
      <img
        width='20%'
        alt='Muzicisti Logo'
        src='images/logo.png'
        className={logoClasses.join(' ')}
      />

      <div className={mottoClasses.join(' ')}>
        Pursuing Frission
      </div>
    </div>
  )
}

export default React.memo(Landing)
