"use client";

import App from "./app";
import { TranslateProvider } from "./providers/translateProvider";
import "./translate/i18n";

export default function Home() {
    return (
        <TranslateProvider>
            <App />
        </TranslateProvider>
    );
}