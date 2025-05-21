

const baseUrlApi = "https://www.swapi.tech/api/"


export const getListElements = async (typeElement) => {

const response = await fetch(baseUrlApi + "/" + typeElement)
const data = await response.json()
return data.results

}


export const getElement = async (typeElement , idElement) => {

const response = await fetch(baseUrlApi + "/" + typeElement + "/" + idElement)
const data = await response.json()
return data.result

}