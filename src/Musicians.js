import React from 'react'

import Header from './Header'
import Musician from './Musician'

import './Musicians.css'
import musicians from './data/musicians'

function Musicians () {
  const musiciansDOM = React.useMemo(() => {
    console.log(musicians)
    return Object.keys(musicians).reduce(
      (musiciansDOM, musicianID) => {
        const musician = musicians[musicianID]

        musiciansDOM.push(
          <Musician
            name={musician.name}
            logo={musician.logo}
            contact={musician.contact}
            key={`musician-${musicianID}`} />
        )

        return musiciansDOM
      }, []
    )
  }, [])

  return (
    <div className="Musicians">
      <Header />

      <div className='MusiciansContent'>
        {musiciansDOM}
      </div>
    </div>
  )
}

export default Musicians
