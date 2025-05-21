export const initialStore=()=>{
  return{
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    // get people
    case 'get_people':

      return {
        ...store,
        people: action.payload
      };

      // get planets
      case 'get_planets':

      return {
        ...store,
        planets: action.payload
      };

      // get vehicles
      case 'get_vehicles':

      return {
        ...store,
        vehicles: action.payload
      };

      case "add_favorite":
        return {
          ...store,
          favorites: [...favorites, action.payload]
        }

    default:
      return store
  }    
}
