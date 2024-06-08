
import { useState } from 'react';
import './dashboard.css';

import {firebaseApp} from '../../config/firebase.config'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import { jwtDecode } from "jwt-decode";
import { useGlobalContext } from '../../context/globalcontext';
const Login=({OpenPage,setIsOpen,setLoginSuccess})=>
{


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(firebaseApp);
    const provider=new GoogleAuthProvider();
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [OpenSignIn,setSignIn]=useState(false);
    const [name,setName]=useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const {addUser,getUser}=useGlobalContext();
    // FOR Login PAGE 

      //******** ********* ********* ********* ********* ********* ********* ********* ********* ********* ********* */
      const loginWithGoogle=async()=>
      {
        try{

            const res= await signInWithPopup(auth,provider).then((userCred)=>
            {    
                    
                    try
                    {
                            if(userCred._tokenResponse.emailVerified)
                            {
                                 const user = userCred.user;
                                const getToken=async ()=>
                                {
                                  const user = userCred.user;
                                  const idToken = await user.getIdToken();
                                  const decodedToken = jwtDecode(idToken)
                                  localStorage.setItem("token",idToken);
                                }
                              // const idToken = await user.getIdToken();
                                getToken();
                                const user1={
                                  name:user.displayName,
                                  email:user.email
                                }
                                addUser(user1);
                              setLoginSuccess(true);  
                              console.log(userCred); 
                              toast.success("Login Successfully!", {
                                position: "top-center"
                            }); 
                            }

                            onClose();
                    }
                catch(err)
                {
                    toast.error("authantication failed!", {
                        position: "top-center"
                    });
                }
            })
        }
        catch(err)
        {
            toast.error("authantication failed!", {
                position: "top-center"
            });
        }

    }

     

      
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
  
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
      const onClose=()=>
      {
            setIsOpen(false);
            setSignIn(false)
      }
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const idToken = await user.getIdToken();
            const decodedToken = jwtDecode(idToken)
            localStorage.setItem("token",idToken);
            const user1={
              email:user.email
            }
             getUser(user1);
             setLoginSuccess(true);   

          toast.success("Login Successfully!", {
            position: "top-center"
        });
        setEmail('');
        setPassword('');
        onClose();

         
        } catch (error) {
          // Handle login errors
          toast.info("invalid-credential!", {
            position: "top-center"
        });
        }
      };
      
  
  
        
        const handleSignupPage=()=>
        {
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
            setIsOpen(false);
            setSignIn(true);

        }
  
  


  
        // FOR SIGNUP  PAGE 
  
        //******** ********* ********* ********* ********* ********* ********* ********* ********* ********* ********* */
        const handleNameChange=(e)=>
        {
            setName(e.target.value);
        }
  
        const handleUsernameChange = (event) => {
          setUsername(event.target.value);
        };
      
        const handleFullnameChange = (event) => {
          setFullname(event.target.value);
        };
      
        
      
        const handleConfirmPasswordChange = (event) => {
          setConfirmPassword(event.target.value);
        };
       
        const handleSignup = async (e) => {
                e.preventDefault();
                if (password !== confirmPassword) {
                    toast.info("Passwords do not match!", {
                        position: "top-center"
                    });
                    return;
                }
                if(name.trim()=== "")
                {
                  toast.info("name field should not blank!", {
                    position: "top-center"
                });
                  return;
                }
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    const user = userCredential.user;

                    const idToken = await user.getIdToken();
                    const decodedToken = jwtDecode(idToken);

                    localStorage.setItem("token",idToken);

                    toast.success("SignIn Successfully!", {
                        position: "top-center"
                    });
                    const user1={
                      name:name,
                      email:decodedToken.email
                    }
                    addUser(user1);
                    setEmail('');
                    setPassword('');
                    setName('');
                    setLoginSuccess(true);   

                    onClose();
                    // Update user profile with additional information (if needed)
                    // await updateProfile(userCredential.user, { displayName: username });
                } catch (error) {
                    // Handle sign-up errors
                   if((error.message).includes('password'))
                   {
                        console.log('hello');
                          toast.info("Enter Atleast 6 character password !", {
                            position: "top-center"
                        });
                   }
                   else if((error.message).includes('email-already-in-use'))
                   {
                        toast.info("email-already-in-use!", {
                            position: "top-center"
                        });

                   }
                   else
                   {
                    toast.info("Invalid Input!", {
                        position: "top-center"
                    });
                   }
                }
        };


  
      
  
  
        const handleLoginClick=()=>
        {
            setEmail('');
            setPassword('')
            setConfirmPassword('')
            setName('');

            setSignIn(false);
            setIsOpen(true);
        }
  
    return(<>
        <ToastContainer />

        <div className={`modal ${OpenPage  ? 'open' : ''} overflow-auto`}>

      <div className="bg-gray-800 bg-opacity-75 fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-dark_50 rounded-xl shadow-xl max-w-xl w-full h-fit max-h-full border border-gray-200 dark:border-zinc-800 slide-in">

          <div className="px-5 py-3">
            <div className="flex justify-between items-center">
              <button onClick={onClose} className="text-zinc-600 dark:text-zinc-100 hover:text-zinc-700 ml-auto bg-[#fafafa] dark:bg-dark p-2 rounded-full border border-zinc-300 dark:border-zinc-800">
                <div className="sr-only">Close</div>
                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"></path>
                </svg>
              </button>

            </div>
          </div>
          <div className="max-w-sm mx-auto mt-4 mb-12 md:p-0 p-8 relative font-dmSans">
            <div className="mx-auto text-center pb-4">
              <h1 className="font-dmSans text-zinc-700 font-bold text-2xl dark:text-light_10">Welcome back to</h1>
              <h1 className="text-blue-600 font-amaranth font-bold text-5xl">Online Edu</h1>
            </div>
            <div class="max-w-md w-full bg-transparent rounded mb-6" onClick={loginWithGoogle}>
                <div id="googleSignInBtn" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
                    Sign In with Google
                </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col flex-wrap -mx-3 mb-4">
                <div className="w-full px-3 relative">
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    className={`form-input w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none ${email ? 'text-gray-900' : 'text-gray-300'}`} 
                    required 
                    placeholder="john@gmail.com" 
                  />

                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-1 right-auto left-[22px] top-[12px] w-[20px] h-[20px] stroke-gray-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-8">
                <div className="w-full relative px-3">
                <input 
                      type="password" 
                      name="password" 
                      value={password} 
                      onChange={handlePasswordChange} 
                      className={`form-input w-full border border-gray-400 focus:outline-none ${password ? 'text-gray-900' : 'text-gray-300'} py-2 pl-10 pr-4`} 
                      required 
                      placeholder="******" 
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-1 right-auto left-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300">
                    <circle cx="12" cy="16" r="1"></circle>
                    <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                    <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                  </svg>
                  
                </div>
                <button type="button" className="text-red-600 hover:text-red-700 font-semibold transition duration-150 ease-in-out ml-auto text-sm mt-3">Forgot Password?</button>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button type="submit" className="text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-2 border-l-2 border-r-2 active:border-red-700 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 border-red-700 text-white w-full">Login</button>
                </div>
              </div>
            </form>
            <div className="flex"></div>
            <div className="text-gray-600 text-center mt-6">Don’t you have an account? <button className="text-blue-600 font-semibold hover:text-blue-300 transition duration-150 ease-in-out" onClick={handleSignupPage}>Create account</button></div>
          </div>
        </div>
      </div>
      </div>


      <div className={`modal ${OpenSignIn ? 'open' : ''} overflow-auto`}>
  <div className="bg-gray-800 bg-opacity-75 fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-dark_50 rounded-xl shadow-xl max-w-xl w-full h-fit max-h-full border border-gray-200 dark:border-zinc-800 slide-in">
      <div className="px-5 py-3">
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="text-zinc-600 dark:text-zinc-100 hover:text-zinc-700 ml-auto bg-[#fafafa] dark:bg-dark p-2 rounded-full border border-zinc-300 dark:border-zinc-800">
            <div className="sr-only">Close</div>
            <svg className="w-4 h-4 fill-current">
              <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="max-w-sm mx-auto mt-4 mb-12 md:p-0 p-8 relative font-dmSans">
        <div className="mx-auto text-center pb-4">
          <h1 className="font-dmSans text-zinc-700 font-bold text-2xl dark:text-light_10">Create an Account</h1>
        </div>
        <div class="max-w-md w-full bg-transparent rounded mb-6" onClick={loginWithGoogle}>
                <div id="googleSignInBtn" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md mb-4">
                    Sign In with Google
                </div>
            </div>
        <form onSubmit={handleSignup}>
         <div className="flex flex-col flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 relative">
              <input 
                type="name" 
                name="name" 
                value={name} 
                onChange={handleNameChange} 
                className={`form-input w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none ${name ? 'text-gray-900' : 'text-gray-300'}`} 
                required 
                placeholder="Enter Name" 
              />
              
                    
            </div>
          </div> 
          <div className="flex flex-col flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 relative">
              <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange} 
                className={`form-input w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none ${email ? 'text-gray-900' : 'text-gray-300'}`} 
                required 
                placeholder="Email" 
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-1 right-auto left-[22px] top-[12px] w-[20px] h-[20px] stroke-gray-300" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                    
            </div>
          </div>
          <div className="flex flex-col flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 relative">
              <input 
                type="password" 
                name="password" 
                value={password} 
                onChange={handlePasswordChange} 
                className={`form-input w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none ${password ? 'text-gray-900' : 'text-gray-300'}`} 
                required 
                placeholder="Password" 
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-1 right-auto left-[22px] top-[10px] w-[20px] h-[20px] stroke-gray-300">
                    <circle cx="12" cy="16" r="1"></circle>
                    <rect x="3" y="10" width="18" height="12" rx="2"></rect>
                    <path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
                  </svg>
            </div>
          </div>
          <div className="flex flex-col flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 relative">
              <input 
                type="password" 
                name="confirmPassword" 
                value={confirmPassword} 
                onChange={handleConfirmPasswordChange} 
                className={`form-input w-full py-2 pl-10 pr-4 border border-gray-400 rounded-md focus:outline-none ${confirmPassword ? 'text-gray-900' : 'text-gray-300'}`} 
                required 
                placeholder="Confirm Password" 
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-8">
            <div className="w-full px-3">
              <button type="submit" className="text-md rounded-lg relative inline-flex items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-2 border-l-2 border-r-2 active:border-red-700 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-500 border-red-700 text-white w-full">Sign Up</button>
            </div>
          </div>
        </form>
        <div className="flex"></div>
        <div className="text-gray-600 text-center mt-6">Already have an account? <button onClick={handleLoginClick} className="text-blue-600 font-semibold hover:text-blue-300 transition duration-150 ease-in-out">Login</button></div>
      </div>
    </div>
  </div>
</div>
</>
    )

}

export default Login;