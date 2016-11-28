import { createRouter } from '@exponent/ex-navigation';
import MainScreen from '../screens/MainScreen';

const Router = createRouter(() =>
   ({
     main: () => MainScreen
   })
);

export default Router;
