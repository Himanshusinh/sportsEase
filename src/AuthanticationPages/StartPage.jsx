import { useNavigate } from 'react-router-dom';


const StartPage = () => {

    const navigate = useNavigate();

    const handlesignup = () => {
        navigate('/signup')
    }

    const handlelogin = () => {
        navigate('/login');
    }

  return (
    <>
        <div>
            <img className="w-[100vw] h-[100vh]" src="src/assets/authImages/sandro-schuh-HgwY_YQ1m0w-unsplash.jpg" />

            <div className="z-1 mt-[-600px]">
                <h1 className="text-8xl ml-10 font-bold text-white">SportsEAS<span className="text-red-600">E</span></h1>
            </div>

            <div className="flex flex-col gap-8 mt-12 ml-10">
                <button className="w-64 h-10 rounded-lg text-lg bg-white hover:bg-black hover:text-white" onClick={handlesignup}>Sign Up</button>
                <button className="w-64 h-10 rounded-lg text-lg bg-white hover:bg-black hover:text-white" onClick={handlelogin}>Log In</button>
            </div>
        </div>   
    </>
  )
}

export default StartPage