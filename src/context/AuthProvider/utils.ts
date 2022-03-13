import { Api } from '../../services/api';

interface IUser {
  email?: string;
  token?: string;
}

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('u');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('/user/authenticate', {
      email,
      password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}

export async function LoginWithGithub(githubCode: string) {
  try {
    const request = await Api.post('/github/authenticate', {
      code: githubCode,
    });
    console.log(request.data);
    return request.data;
  } catch (error) {
    return null;
  }
}
