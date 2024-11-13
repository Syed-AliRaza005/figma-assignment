import Image from "next/image";

export default function Home() {
  return (
    <div className="width-[1486px]
height-[960.57px]

">
    <div className=" bg-white h-[80%]">
      {/* header */}
      <div className="h-[134px] bg-yellow-600">
      <h1 className="left-9 top-5 font-medium text-[75px] font-serif text-white">
        MANZZARI</h1>
       </div> 
      
       
       {/* text */}
       <div className="float-left w-1/2 
       place-items-center" >
     
      <h2 className="font-bold text-[40px] font-mono ">IMPECCABLE <br /> CRAFTSMANSHIP AND <br />FINESSE
      </h2>
      
      <p className="font-medium bg-regal-yellow textext-wrap text-yellow-600 " >An example of intricate workmanship and detail,<br /> elegant necklaces and long and short chains form a part of our <br /> desirable collection.</p>

      <button className="bg-yellow-600 w-[247.67x] h-[49.2px] left-[107.49px] top-[710.32px] gap-[8.6px] p-[8.6px] rounded-[8.6px]">
        <p className="width-[177px] height-[38px] text-3xl font-medium text-white font-sans">EXPORT NOW</p>
        </button>
         </div>
      
        {/* image */}
       <div className="float-right w-1/2 top-[198px] justify-items-center">      
          <Image
          className="dark:invert"
          src="/img.svg"
          alt="image"
          width={462}
          height={647}
          
        />
        </div>
        </div>
    
        </div>
  );
}
