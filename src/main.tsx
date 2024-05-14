import 'dayjs/locale/ja';
import dayjs from 'dayjs';
import { Suspense } from 'react';
import utc from 'dayjs/plugin/utc';
import ReactDOM from 'react-dom/client';
import timezone from 'dayjs/plugin/timezone';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import addAuthTokenInterceptor from "./api/addAuthTokenInterceptor";

import App from './App';
import { persistor, store } from './store';



// Extend dayjs with utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

addAuthTokenInterceptor(store);

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </PersistGate>
  </StoreProvider>
);

if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
  console.log = () => { };
}
