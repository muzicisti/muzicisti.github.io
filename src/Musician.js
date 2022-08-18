import React from 'react'

import Icon from '@mdi/react'

import networks from './data/networks'

import './Musician.css'

function Musician (props) {
  const {
    name,
    logo,
    contact
  } = props

  const contactDOM = React.useMemo(() => {
    return Object.keys(networks).reduce(
      (contactDOM, networkID) => {
        const value = contact[networkID]

        if (value == null) return contactDOM

        const network = networks[networkID]

        contactDOM.push(
          <Icon
            size={.7}
            path={network.icon}
            title={network.name} />
        )

        return contactDOM
      }, []
    )
  }, [contact])

  return (
    <article className="Musician">
      <figure  className="MusicianFigure">
        <img src={logo} alt={`${name} Logo`} width='100%'/>
      </figure>

      <span className="MusicianName">{name}</span>

      <div className="MusicianContact">
        {contactDOM}
      </div>
    </article>
  )
}

export default React.memo(Musician)
