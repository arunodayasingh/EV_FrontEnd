import Main from "layout/layout";

import Image from "next/image";

export default function Home() {


    const banner = (
        <div className="relative">
            <div className="w-full " >
                <Image
                    src=""
                    alt="banner"
                    className="h-full object-cover mx-auto"
                    width={1920}
                    height={450}
                    priority
                />
            </div>

            <div className="lg:container pt-2 mx-auto">
                <div className="lg:w-1/5 px-2 lg:absolute text-white lg:top-20 -top-28">
                    <div className="md:w-80 py-2 w-full bg-white border rounded text-black">
                        hi
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Main >
                <div className="lg:w-3/4">
                    hi
                </div>
                <div className="lg:w-1/4">
                    h12
                </div>
            </Main>

        </>
    )

}
