export class Activity {
    constructor(
        public user: {
          name: string,
          email: string,
          address: string,
          image: string,
          location: {
            lat: string,
            lng: string
          }
        },
        public description: string,
        public place: {
          name: string,
          location: {
            lat: string,
            lng: string
          }
        },
        date: string,
        time: string
        ){}
}
