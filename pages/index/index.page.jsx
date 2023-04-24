import React from 'react'
import './style.css'
import logo from './ntu.png'

const buttons = [
  {
    name: 'NTU COOL',
    url: 'https://cool.ntu.edu.tw/'
  },
  {
    name: 'NTU Webmail',
    url: 'https://ntumail.cc.ntu.edu.tw/'
  },
  {
    name: 'my NTU',
    url: 'https://my.ntu.edu.tw/'
  },
  {
    name: 'NTU Course',
    url: 'https://nol2.aca.ntu.edu.tw/nol/guest/index.php'
  }
]


export { Page }

function Page() {
  return (
    <div className='container'>
      <Logo />
      {
        buttons.map((b,i)=>{
          return (
            <Button key={b.name+i} name={b.name} url={b.url}/>
          )
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
        outline-4 outline-dotted outline-slate-800 dark:outline-slate-100 rounded-full outline-offset-4 mb-16 object-cover"
          alt="logo"
        />
      </a>
    </div>
  );
}

function Button({name, url}) {
  return (
      <button onClick={()=>{
        window.open(url);
      }} className='link w-full'>
        {name}
      </button>
  );
}