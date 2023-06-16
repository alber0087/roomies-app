import { api } from "./api";

export const addExpense = async (expense, price) => {
    try {
        const { data } = await api.post('/expenses/profile', { name: expense, price },
        {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        console.log(data)
        console.log('hola')
    } catch (error) {
        console.error('Errado', error)
    }
}
