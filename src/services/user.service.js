import { api } from './api'

export const getUsersByCommunityId = async () => {
  try {
    const { data } = await api.get('/communities/profile/users', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data.users.users
  } catch (err) {
    console.error('Cannot get Community Users', err)
  }
}

export const getUsersByCommunity = async () => {
  try {
    const { data } = await api.get('/communities/profile/users', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get Community Users', err)
  }
}

export const getUserLogged = async () => {
  try {
    const { data } = await api.get('/users/profile', {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get user logged', err)
  }
}

export const getUsers = async () => {
  try {
    const { data } = await api.get('/users', {
        headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (err) {
    console.error('Cannot get users', err)
  }
}


export const updateUserService = async (
  id,
  resultName,
  lastName,
  resultSmoker,
  resultDescription,
  resultGender,
  resultBirthday,
  resultImage
) => {
  await api.put(
    `/users/profile/${id}`,
    {
      firstName: resultName,
      lastName,
      smoker: resultSmoker,
      description: resultDescription,
      gender: resultGender,
      birth_date: resultBirthday,
      image: resultImage,
    },
    {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
  )
}
