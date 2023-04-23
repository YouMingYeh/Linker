import React from 'react'
import './style.css'
import logo from './work.jpeg'
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { SiOpenai } from "react-icons/si"
const buttons = [
  {
    name: 'GitHub',
    url: 'https://cool.ntu.edu.tw/',
    icon: <AiFillGithub />
  },
  {
    name: 'Discord',
    url: 'https://discord.com/app',
    icon: <BsDiscord />
  },
  {
    name: 'chatGPT',
    url: 'https://chat.openai.com/',
    icon: <SiOpenai />
  },{
    name: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: <AiFillYoutube />
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