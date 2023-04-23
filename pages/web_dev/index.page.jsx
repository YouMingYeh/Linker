import React from 'react'
import './style.css'
import logo from './dev.png'
import { AiOutlineBgColors } from "react-icons/ai";
import { SiVite, SiMui, SiTailwindcss } from "react-icons/si"

const buttons = [
  {
    name: 'vite',
    url: 'https://vite-plugin-ssr.com/',
    icon: <SiVite />
  },
  {
    name: 'material-ui',
    url: 'https://mui.com/',
    icon: <SiMui />
  },
  {
    name: 'color UI',
    url: 'https://colorsui.com/',
    icon: <AiOutlineBgColors />
  },{
    name: 'Tailwind',
    url: 'https://tailwindcss.com/docs/installation',
    icon: <SiTailwindcss />
  }
]


export { Page }

function Page() {
  return (
    <div className='container'>
      <Logo />
      {
  buttons.map((b, i) => {
    return (
      <Button
        key={b.name + i}
        name={b.name}
        url={b.url}
        icon={b.icon}
      />
    );
  })
}
      
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">

        <img
          src={logo}
          className="h-52 w-52 
        outline-4 outline-dotted outline-slate-800 dark:outline-slate-100 rounded-full outline-offset-4 "
          alt="logo"
        />
      </a>
    </div>
  );
}
function Button({ name, url, icon }) {
  return (
    <button
      onClick={() => {
        window.open(url);
      }}
      className="link w-full align-middle flex justify-between"
    >
      {icon}
      {name}
      <span></span>
    </button>
  );
}
