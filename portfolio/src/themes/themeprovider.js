import { useContext, useState, createContext } from 'react';
import { global_theme } from './theme';

const initialState = {
    theme: 'dark',
    setTheme: ()=>{}
}

const Context = createContext(initialState);

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialState.theme);

    
    return (
        <MyContext.ThemeProvider value={{theme, setTheme}}>
            <style jsx global>
                {`
                body {
                    background-color:${global_theme[theme].base};
                    color: ${global_theme[theme].text};
                    transition: all 0.5s linear;
                }
                `}
            </style>
            {children}
        </MyContext.ThemeProvider>
    )
}

export default ThemeProvider;

export const useTheme = () => {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}