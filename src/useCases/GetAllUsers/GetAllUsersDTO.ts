
interface GEO {
  lat: string,
  lng: string
}

interface UserAddress {
  street: string,
  suite: string,
  city: string,
  zipCode: string,
  geo: GEO
}


interface GetAllUsersDTO {
  id: string,
  name: string
  address: UserAddress
}

export {GetAllUsersDTO, GEO, UserAddress}