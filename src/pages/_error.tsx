import Image from "next/image";
import Link from "next/link";
import React from "react";



const ErrorPage = () => {
  
  return (
    <div className="">
          <div className="w-full mx-auto">
            <div className="text-center mb-5">
              {/* <Image
                src={"/oops.png"}
                alt=""
                height={200}
                width={200}
                className="w-1/2 md:w-1/4 mx-auto bg-transparent"
              /> */}
              <h1 className="font-semibold text-xl md:text-2xl">
                This page isn't available
              </h1>
              <p className="text-xs md:text-base">
                The link you followed may be broken, or the page may have been
                removed. You can visit{" "}
                <Link href="/" className="text-blue-500 hover:cursor-pointer">
                  Homepage
                </Link>
              </p>
            </div>
        </div> 
    </div>
  );
};



export default ErrorPage;
