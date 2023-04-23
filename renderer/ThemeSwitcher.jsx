import React, {useState, useEffect} from 'react';



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
        {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    )
}

function LightModeIcon () {
    return (
        <svg class="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="3" />  <line x1="12" y1="5" x2="12" y2="3" />  <line x1="17" y1="7" x2="18.4" y2="5.6" />  <line x1="19" y1="12" x2="21" y2="12" />  <line x1="17" y1="17" x2="18.4" y2="18.4" />  <line x1="12" y1="19" x2="12" y2="21" />  <line x1="7" y1="17" x2="5.6" y2="18.4" />  <line x1="6" y1="12" x2="4" y2="12" />  <line x1="7" y1="7" x2="5.6" y2="5.6" /></svg>
    )
}

function DarkModeIcon () {
    return (
        <svg class="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="3" x2="12" y2="21" />  <path d="M12 9l4.65 -4.65" />  <path d="M12 14.3l7.37 -7.37" />  <path d="M12 19.6l8.85 -8.85" /></svg>
    )
}

export default ThemeSwitcher