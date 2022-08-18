import { paramCase } from 'change-case'

import {
  mdiWeb,
  mdiSpotify,
  mdiYoutube,
  mdiFacebook,
  mdiInstagram,
} from '@mdi/js'

export default
[
  {
    icon: mdiWeb,
    name: 'Website'
  },
  {
    icon: mdiSpotify,
    name: 'Spotify'
  },
  {
    icon: mdiYoutube,
    name: 'Youtube'
  },
  {
    icon: mdiFacebook,
    name: 'Facebook'
  },
  {
    icon: mdiInstagram,
    name: 'Instagram'
  }
].reduce(
  (data, info) => {
    data[paramCase(info.name)] = info
    return data
  }, {}
)
