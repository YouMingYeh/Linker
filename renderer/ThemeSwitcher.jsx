import React, {useState, useEffect} from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import "./style.css"
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState();
    useEffect(()=>{
        const localTheme = localStorage.getItem('theme')
        if(localTheme){
            setTheme(localTheme);
        }
        else if(window.matchMedia("prefer-color-scheme: dark").matches) {
            
            localStorage.setItem("theme", "dark");
            setTheme('dark');
        } else {
            localStorage.setItem("theme", "light");
            setTheme('light');
        }
    }, [])
    useEffect(()=>{
        if(!theme) return;
        
        if(theme == 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light");
        }
    },[theme]);

    const handleSwitch = () => {
        if(theme == 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <button  onClick={handleSwitch} className='button rounded-full'>
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </button>
    )
}

export default ThemeSwitcher