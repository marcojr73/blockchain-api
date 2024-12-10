import React, { createContext, ReactNode, useState } from "react"

const initialValue = {
    language: "en",
    setLanguage: () => { }
}

export const translateContext = createContext<{
    language: string;
    setLanguage: (newState: string) => void
}>(initialValue)

export const TranslateProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("en");
    return (
        <translateContext.Provider value={{ language, setLanguage }}>
            {children}
        </translateContext.Provider>
    )
}