import axios from "axios"

export function useFetch() {
 

  async function getData(url) {

    const {data} = await axios.get(url)
    return data
  }
  return { getData }
}