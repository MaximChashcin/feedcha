import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {Toaster} from 'react-hot-toast'

import { UserContext } from '../lib/context';
import {useUserData} from '../lib/hooks'
import Metatags from '../components/Metatag';

export default function App({ Component, pageProps }) {
const userData = useUserData();

  return (
    <UserContext.Provider value={{user: userData.user, username: userData.username}}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}
