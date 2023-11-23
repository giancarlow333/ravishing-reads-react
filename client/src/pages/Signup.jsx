
const Signup = () => {

    return (
    <section class= "h-screen w-screen bg-fixed font-serif flex flex-col justify-center items-center backdrop-brightness-75">
        <div class= "h-screen w-screen bg-fixed font-serif flex flex-col justify-center items-center backdrop-brightness-75">
            <div class = "flex flex-row justify-center items-center w-full h-full">
                <div class = "flex flex-col justify-center items-center h-full w-2/4 ">
                    <div class = "flex justify-top items-center  flex-col w-5/6 h-5/6 p-6 ">
                        <img class = "w-32 rounded-2xl border-8 border-amber-400 border-double shadow-white shadow-xl mb-10" src = "./img/avators/bookworm1.jpeg"></img>
                            <h1 class = " text-6xl underline underline-offset-8 decoration-double decoration-4 text-amber-600 sub-pixel-antialiased rounded-2xl mb-8 bg-black bg-opacity-90 brightness-150 font-semibold" > Ravishing Reads</h1>
                                <p class = "text-5xl text-orange-400 sub-pixel-antialiased rounded-2xl bg-black bg-opacity-40 brightness-125"> “There is more treasure in books than in all  the pirate's loot on Treasure Island.” <br></br> ― Walt Disney</p>
                    </div>
                </div>
                <div class = "flex flex-col justify-center items-center h-full w-2/4">
                    <div class = "flex justify-around items-center  flex-col w-5/6 h-5/6 bg-orange-100 bg-opacity-60 backdrop-blur-md shadow-white shadow-inner drop-shadow-2xl rounded-lg" >
                        <form  method="post" action="auth/signup" class = "w-full h-3/4 flex flex-col justify-evenly items-center text-orange-900 " autocomplete="off" >
                            <h3 class = "text-orange-950 text-5xl text-center">Welcome to the Club Bookworm!...</h3> 
                                <input class = " w-10/12  h-20  pl-6 bg-transparent border-b-4 border-orange-900 bg-orange-200 bg-opacity-80 placeholder:text-orange-900 placeholder:italic text-3xl rounded-full" type = "text" name = "username" placeholder = "Enter Your Username..."></input>
                                <input class = " w-10/12  h-20  pl-6 bg-transparent border-b-4 border-orange-900 bg-orange-200 bg-opacity-80 placeholder:text-orange-900 placeholder:italic text-3xl rounded-full" type = "text" name = "name" placeholder = "Enter Your Name..."></input>
                                <input class = " w-10/12  h-20  pl-6 bg-transparent border-b-4 border-orange-900 bg-orange-200 bg-opacity-80 placeholder:text-orange-900 placeholder:italic text-3xl rounded-full" type = "email" name = "email" placeholder = "Enter Your Email..."></input>
                                <input class = " w-10/12  h-20  pl-6 bg-transparent border-b-4 border-orange-900 bg-orange-200 bg-opacity-80 placeholder:text-orange-900 placeholder:italic text-3xl rounded-full" type = "password" name = "password" placeholder = "Enter Your Password..."></input>
                                <input class = " w-10/12  h-20  pl-6 bg-transparent border-b-4 border-orange-900 bg-orange-200 bg-opacity-80 placeholder:text-orange-900 placeholder:italic text-3xl rounded-full" type = "password" name = "confirmation" placeholder = "Confirm Password..."></input>
                                <input class = "w-7/12 h-14 shadow-white shadow-inner drop-shadow-2xl rounded-full bg-stone-900 bg-opacity-60 text-white text-3xl" type = "submit" value = "Submit"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  };
  
  export default Signup;