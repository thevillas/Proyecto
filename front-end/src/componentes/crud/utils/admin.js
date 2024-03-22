import { jwtDecode } from 'jwt-decode';

export const isAdminOrmoderador = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  const decodedToken = jwtDecode(token);
  const role = decodedToken.role;

  return role === 'admin' ||  role === 'moderator';
};