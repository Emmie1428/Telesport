import type { Olympic, Participation } from './types'

class Country {
  id: number
  country: string
  participations: Participation[]

  constructor(data: Olympic) {
    this.id = data.id
    this.country = data.country
    this.participations = data.participations
  }
}

export default Country