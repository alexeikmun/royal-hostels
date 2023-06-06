import jwt_decode from 'jwt-decode';
import { useStore } from '@nanostores/react';
import { session, loggedUser } from '../../../store/authStore';
import { useState, useMemo } from 'react';
import type { TokenUser } from '../../../types/user';

type DecodedToken = {
  user: TokenUser;
  [key: string]: any;
};

export const UserProfile = () => {
  const [user, setUser] = useState<TokenUser>();
  const encoded = useStore(session);

  const decodedUser = useMemo(() => decodeToken(), [encoded]);

  function decodeToken() {
    const accessToken = encoded.accessToken;

    if (accessToken) {
      const decodedToken: DecodedToken = jwt_decode(accessToken as string);
      console.log('🚀 decodedToken:', decodedToken);
      setUser(decodedToken.user);
      loggedUser.set(decodedToken.user);
      return decodedToken.user;
    } else {
      return 'user not found';
    }
  }

  return <div>{JSON.stringify(decodedUser)}</div>;
};
