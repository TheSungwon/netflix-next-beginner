import Logo from "./Logo";
import {FcGoogle} from "react-icons/fc"
import { signIn } from "next-auth/react";



const Login= () =>{
    return(
        <>
        <div className="login_bg_gradient bg-cover h-screen
        grid place-items-center">
            <Logo style="w-52 absolute top-0 left-0 m-8"/>
<div className="bg-[rgba(172,230,96,0.4)] p-10 w-80 space-y-6">
        <div className="text-3xl font-medium">
            <h3 className="my-5">sign in</h3>
            <button className="bg-white text-black flex gap-2 items-center p-4 text-xl"
            onClick={()=> signIn()}>
                <FcGoogle className="text-3xl"/>
                sign in with google
            </button>
        </div>
</div>
        </div>
        </>
    )
}

export default Login;