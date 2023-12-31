'use client'

import store from "@/store/store";
import { Provider } from "react-redux";
import "../styles/base.scss";

function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <Provider store={store}>
            <html lang='en'>
                <body>{children}</body>
            </html>
        </Provider>
    );
}

export default RootLayout;
