import Cookies from 'js-cookie';
import { jwtDecode as jwt_decode } from 'jwt-decode';

export const isAdminOrmoderador = () => {
  const token = Cookies.get('token');

  if (!token) {
    return false;
  }

  const decodedToken = jwt_decode(token);
  const role = decodedToken.role;

  return role === 'admin' ||  role === 'moderator';
};