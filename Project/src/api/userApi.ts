import { UserSchema, type User } from '../types/userTypes';
import { API_BASE_URL, endpoints } from './config';

async function validateresponse(response: Response): Promise<Response> {
  // const data = await response.json();
  // if (!data.result) {
  //   throw new Error('Неверный email или пароль');
  // }
  // return response;

  if (!response.ok) {
    throw new Error(await response.text());
  }

  return response;
}

export const registerUser = (
  name: string,
  surname: string,
  email: string,
  password: string
): Promise<void> => {
  return fetch(`${API_BASE_URL}${endpoints.user}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, surname, email, password }),
  })
    .then((response) => {
      if (response.status === 409) {
        throw new Error('Пользователь с таким email уже существует');
      }
      return validateresponse(response);
    })
    .then(() => undefined);
};

export const login = (
  email: string,
  password: string
): Promise<{ isAuth: boolean }> => {
  return fetch(`${API_BASE_URL}${endpoints.login}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(async (response) => {
    const data = await response.json();
    return { isAuth: data.result };
  });
};

export const fetchMe = (): Promise<User> => {
  return fetch(`${API_BASE_URL}${endpoints.profile}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(async (response) => {
      const data = await response.json();

      return UserSchema.parse(data);
    })
    .catch((error) => {
      throw error;
    });
};

export const logout = (): Promise<void> => {
  return fetch(`${API_BASE_URL}${endpoints.logout}`, {
    credentials: 'include',
    method: 'GET',
  }).then(() => undefined);
};

// test@test.com

// d4Sv{3d23f
