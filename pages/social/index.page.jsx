import React from 'react'
import './style.css'
import logo from './social-media.jpeg'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";


const buttons = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/',
    icon: <AiFillFacebook />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: <AiFillInstagram />
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
          className="h-52 w-fit 
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
