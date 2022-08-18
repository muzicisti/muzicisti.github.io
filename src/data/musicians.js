import { paramCase } from 'change-case'

export default [
  {
    name: "Upper Lip",
    contact: {
      spotify: '',
      website: 'https://www.upperlipmusic.com/',
      facebook: 'https://www.facebook.com/UpperLipBand/',
      instagram: 'https://www.instagram.com/upperliprocks/',
      youtube: 'https://www.youtube.com/channel/UCQ_A7dHQ1J2OAoXIHquJM-g'
    }
  }
].reduce(
  (data, info) => {
    const id = paramCase(info.name)

    info.logo = `images/bands/${id}.png`
    data[id] = info

    return data
  }, {}
)
