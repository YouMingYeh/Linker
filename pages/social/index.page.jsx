import React from 'react'
import './style.css'
import logo from './social-media.jpeg'

const buttons = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/',
    icon: <FacebookIcon />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: <InstagramIcon />
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

function FacebookIcon () {
  return (
    <svg class="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  )
}

function InstagramIcon () {
  return (
    <svg class="h-8 w-8"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  )
}
