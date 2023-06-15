import { api } from "./api";


const login =  async (email, password) => {
  try {
    const { data } = await api.post({email, password})
    return data
  } catch (error) {
    console.error('Cannot Log in', error)
  }
}