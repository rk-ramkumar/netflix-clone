import React from "react";

const SignIn = () => {
  return (
    <>
      <div class="bg-loginBg w-screen h-screen backdrop-contrast-100">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex justify-start uppercase text-5xl p-9 font-extrabold text-red-500 brightness-100">
          Netflicks
        </div>
        <div className="flex-grow container w-[600px] mx-auto mt-10 px-4 sm:px-0 rounded-md backdrop-opacity-10 backdrop-invert bg-black/70">
          <div className="max-w-3xl mx-auto flex-col p-6">
            <h2 className="text-start font-bold text-4xl">Sign In</h2>
            <div className=" mb-4">
              <input
                className="p-4 rounded-md"
                placeholder="Email or phone number"
              />
            </div>
            <div>
              <input
                className="p-4 rounded-md"
                placeholder="Password"
              />
            </div>

            <div className="flex-grow"><button>Sign In</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
