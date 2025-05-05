function CarCard() {
  return (
    <div className="flex w-full justify-center mt-15 mb-40">
    <div className="flex justify-between w-[90vw]">

      <div className=" car-collection w-[20vw] h-[55vh] bg-[#191919] " >
        
        <div className=" h-[55%] "> <img src="../cars/bmw.png" alt=""  /> </div>

        <div className=" h-[20%] flex justify-around ">

          <div>
            <div className="text-[#be9800] text-2xl">{`JAGUAR`}</div>
            {`JAGUAR F-PACE`}
          </div>

          <div className="h-15 w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center " > 

              <div className="font-extrabold text-xl text-[#d4d4d4]"> {`$ 399/-`} </div> PER DAY

          </div>

        </div>

        <div className=" ml-[5%] flex  " >
          <div className="bg-[#151513] w-35 flex hover:text-white h-12 rounded-full p-4 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4] "> <span>Select </span> <i className="ri-arrow-right-line"></i></div>
        </div>


      </div>

    </div>
    </div>
  )
}

export default CarCard