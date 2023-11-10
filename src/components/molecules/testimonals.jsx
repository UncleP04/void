import Image from "next/image";
import React from "react";
import Screen1 from '../../../public/Image/screen1.png'
import Screen2 from '../../../public/Image/screen2.png'
import Screen3 from '../../../public/Image/screen3.png'
import Screen4 from '../../../public/Image/screen4.png'
import '../style.css'

const Testimonals = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] h-[400px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "transparent transparent" }}>
                <Image src={Screen1} alt="testimonale.png" width={700} height={300} className="w-[100%] h-[100%]"/>
                <Image src={Screen2} alt="testimonale.png" width={700} height={300} className="w-[100%] h-[100%]"/>
                <Image src={Screen3} alt="testimonale.png" width={700} height={300} className="w-[100%] h-[100%]"/>
                <Image src={Screen4} alt="testimonale.png" width={700} height={300} className="w-[100%] h-[100%]"/>
            </div>
        </div>
    )
}

export default Testimonals;