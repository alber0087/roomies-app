import { api } from "./api";


export const login =  async (email, password) => {
  try {
    const { data } = await api.post({email, password})
    return data
  } catch (error) {
    console.error('Cannot Log in', error)
  }
}