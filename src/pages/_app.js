import React from "react";
import "../styles/index.css";
import 'antd/dist/antd.css';
import {ClientConfigStoreProvider} from "../helpers/context";
import {useRouter} from "next/router";
import {QueryClient, QueryClientProvider} from "react-query";
import {config} from "../helpers/client_config";


export function clientConfigReducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.payload;

    default:
      return state;
  }
}

const queryClient = new QueryClient();

function MyApp({Component, pageProps}) {
  const {query} = useRouter();
  const {locale} = query;

  //const {shortLocale, messages} = useI18n(locale);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild?.(jssStyles);
    }
  }, []);

  return (
   
      <QueryClientProvider client={queryClient}>
        <ClientConfigStoreProvider initialState={config} reducer={clientConfigReducer}>
          <Component {...pageProps} />
        </ClientConfigStoreProvider>
      </QueryClientProvider>
   
  );
}
export default MyApp;
