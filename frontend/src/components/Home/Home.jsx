import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
      navigate('/entries/new')
  }
  return (
    <div className='h-screen p-6'>
        <div className="banner bg-gray-300 shadow-md  px-4 py-8 w-full md:w-[80%] rounded-md  mx-auto ">
            <div className='border-b-[1px] border-gray-500 py-4'>
              <h1 className='text-6xl'>Hello 👋</h1>
              <p className='mt-4 tracking-wide text-xl	'>Guestbook is a simple cloud-native web application which allows visitors to leave a public comment without creating a user account.</p>  
            </div>
            <button onClick={handleOnClick} className='p-2 bg-blue-600 mt-4 text-2xl px-5 font-light rounded-md text-white' >Get started</button>
        </div>
    </div>
  )
}

export default Home