import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/redux/store";


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="min-h-screen flex flex-col">

        <main className="container mx-auto px-4 py-6 flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  )
}
