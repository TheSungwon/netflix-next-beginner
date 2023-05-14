
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import { getSession, useSession, signOut } from 'next-auth/react'
import { Inter } from 'next/font/google'
import requests from '../../utils/requests';
import axios from 'axios';
import { data } from 'autoprefixer';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] })




export default function Home({movie, ...props}) {

  const {data:session, status} = useSession();

  if(!session) return <Login></Login>

  return ( 
    <main className='relative bg-gradient-to-b from-gray-900/10 to-[#010511]'>
    <Hero movie={movie}/>
    

    {/* <div className='px-3 py-3'>
      <p className="text-3xl font-bold underline">
    Hello world! <br/>
    {session.user.name} 님
    </p>
    <button onClick={signOut}>로그아웃</button>{`\n`}
    </div> */}

    </main>
  )
}
export async function getServerSideProps(context) {
  const session = await getSession(context);

  const {results} = await axios.get(requests.fetchActionMovies).then((res)=>res.data)
  .catch((err)=>err)
  
  return {
    props:{
      session: session,
      movie:{results}
    }
  };
}