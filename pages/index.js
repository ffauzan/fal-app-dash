import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AppList from '../components/AppList'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAustralSign, faFaceRelieved, faHome, faHouse, faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons'
import Header from '../components/Header'


export default function Home(props) {
  // console.log(props.myApps[1])
  return (
    <Layout title="Fal's Apps">
      {/* <div className="flex justify-between max-w-lg lg:max-w-screen-lg mx-auto shadow-md pb-5 px-2">
        <h1 className="text-5xl text-center">
          <FontAwesomeIcon className="hover:text-slate-700" icon={faHouse} />
        </h1>
        <h1 className="text-5xl text-center font-sans">
          Fal&#39;s Apps
        </h1>
        <h1 className="text-5xl text-center">
          <FontAwesomeIcon className="hover:text-slate-700" icon={faUser} />
        </h1>
        <nav className="flex justify-center space-x-1">
          <a href="https://fal.my.id">
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white py-2 text-md px-3 rounded">Home</button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ffauzan">
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white py-2 text-md px-3 rounded">Github</button>
          </a>
				</nav>
      </div> */}
      
      <AppList myApps={props.myApps}></AppList>
    
    </Layout>
  )
}

export function getStaticProps(context) {
  const myApps = [
    {
      name: 'Shy Mail',
      desc: 'A temporary dispossable email',
      url: 'https://shy.my.id',
      githubLink: 'https://github.com',
      imgUrl: 'https://is3.cloudhost.id/fimg/lgm.png'
    },
    {
      name: 'Oof QR',
      desc: 'URL shortener & dynami URL shoortener & dynamic link QR c link QR code uoqebfgo qeofqoe qoefqeo',
      url: 'https://oof.my.id',
      githubLink: 'https://github.com',
      imgUrl: 'https://is3.cloudhost.id/fimg/pp.jpg'
    },
    {
      name: 'Oof QR',
      desc: 'URL shortener & dynamic link QR code',
      url: 'https://oof.my.id',
      githubLink: 'https://github.com',
      imgUrl: 'https://is3.cloudhost.id/fimg/sn.jpg'
    },
    {
      name: 'Oof QR',
      desc: 'URL shortener & dynamic link QR code',
      url: 'https://oof.my.id',
      githubLink: 'https://github.com',
      imgUrl: 'https://is3.cloudhost.id/fimg/lgm.png'
    },
    {
      name: 'Oof QR',
      desc: 'URL shortener & dynamic link QR code',
      url: 'https://oof.my.id',
      githubLink: 'https://github.com',
      imgUrl: 'https://is3.cloudhost.id/fimg/pp.jpg'
    },
  ]

  return {
    props: {myApps}
  }
}
