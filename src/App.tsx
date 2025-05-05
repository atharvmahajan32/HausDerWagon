import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { el } from "node_modules/date-fns/locale/el.d.cts";




function App() {

  const [heroCard,setHeroCard] = useState(0);
  const bmw = '../cars/bmw.png'
  const merc = '../cars/merc.png'
  const audi = '../cars/audi.png'

  const car = [bmw, merc, audi]
  const [pickup, setPickup] = React.useState<Date>()
  const [rtn, setRtn] = React.useState<Date>()
  const [series, setSeries] = useState(0)

  function left () {

    if (heroCard != 0){
    setHeroCard(heroCard - 1)
    }

  }
  
  function right () {

    if (heroCard != 2){
      setHeroCard(heroCard + 1)
    }
    

  }

  function sLeft () {

    if (series != 0){
    setSeries(series - 1)
    }

  }
  
  function sRight () {

    if (series != 2){
      setSeries(series + 1)
    }
    

  }







  useEffect( () => {

    if (heroCard == 2 ) {

      document.querySelector('#rbtn')?.classList.remove('hover:bg-[#E1C038]')


      }else  {

        document.querySelector('#rbtn')?.classList.add('hover:bg-[#E1C038]')

      }
    
    if (heroCard == 0) {
  
      document.querySelector('#lbtn')?.classList.remove('hover:bg-[#E1C038]')
    }else{
      document.querySelector('#lbtn')?.classList.add('hover:bg-[#E1C038]')
    }

  },[heroCard] )


   useEffect( () => {

    if(heroCard == 0){
        document.querySelector('#car1')?.classList.add('bg-[#AA8B00]')

    }else{
      document.querySelector('#car1')?.classList.remove('bg-[#AA8B00]')
    } 
    
    if(heroCard == 1){

      document.querySelector('#car2')?.classList.add('bg-[#AA8B00]')
    }else{
      document.querySelector('#car2')?.classList.remove('bg-[#AA8B00]')
    } 
    
    if(heroCard == 2){

      document.querySelector('#car3')?.classList.add('bg-[#AA8B00]')
    }else{
      document.querySelector('#car3')?.classList.remove('bg-[#AA8B00]')
    }

  },[heroCard] )


  useEffect( () => {

    if(series == 0){
      document.querySelector('#els')?.classList.add('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')

    }else{
      document.querySelector('#els')?.classList.remove('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')
    } 
    
    if(series == 1){

      document.querySelector('#eis')?.classList.add('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')
    }else{
      document.querySelector('#eis')?.classList.remove('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')
    } 
    
    if(series == 2){

      document.querySelector('#prs')?.classList.add('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')
    }else{
      document.querySelector('#prs')?.classList.remove('bg-[#8975246f]' ,'border-[#E1C038]', 'text-white')
    }

    }, [series] )


  return (
    <>
      <nav className=" flex items-center justify-around gap-50 w-full h-[100px] bg-[#151513] p-2 ">
        <h1 className="text-[#FFDEAD]  text-4xl">HausDerWagen</h1>
        <div className=" flex gap-6 text-[grey] max-sm:hidden">
          <h4>Home</h4>
          <h4>Colletion</h4>
          <h4>About</h4>
          <h4>T&C</h4>
          <h4></h4>
        </div>
        <div className="flex gap-3 right max-sm:hidden">
          <Button className="text-white bg-[rgba(0,0,0,0)] border border-[#E1C038]">
            Rent a Car
          </Button>
          <Button className="  text-white  bg-[#E1C038] ">SIGN UP</Button>
        </div>
 
        <i className="ri-menu-3-line text-white text-4xl  sm:hidden gap-1 "></i>
      </nav>


      <div id="main" className="flex w-full justify-center items-center text-justify flex-wrap mt-1 ">
        <div className="flex flex-col ">
          <div id="hero" className="flex w-[92vw] h-[75vh] bg-[#191919] rounded-4xl  justify-between pl-6 ">
            <div className="flex  w-[45%] text-4xl tracking-[-2px] flex-col mt-7 font-light px-10">
              <p>DISCOVER THE</p>
              <span className="text-6xl mt-6 text-[#EBE061] font-semibold leading-20">
                FREEDOM OF THE OPEN ROAD
              </span>
              <p className="text-xl mt-10">Hit the road your way with flexible rentals, great rates, and the perfect car for every journey. Your next adventure starts here.</p>
              <Button className="text-white text-xl bg-[rgba(0,0,0,0)] border border-[#E1C038] w-70 h-20 mt-10">
                Explore Our Price <i className="ri-arrow-right-s-fill ml-3 text-3xl"></i>
            
              </Button>

            </div>
            <div className="w-[55%] relative flex mt-4 mr-8 flex-col ">

              <ul className="flex gap-5 justify-end items-center w-full z-15">
                <li id="lbtn" onClick={left} className=' w-10 h-10 hover:bg-[#E1C038] bg-[#282625] flex justify-center items-center  rounded-full ' > <i className="ri-arrow-left-s-fill"></i> </li>
                <li id="car1" onClick={()=>setHeroCard(0)} className="h-[90px] w-[155px] bg-[#282625] rounded-2xl relative"> <img className=" absolute mt-3 " src="../cars/bmw.png" alt=""  /> </li>
                <li id="car2" onClick={()=>setHeroCard(1)} className="h-[90px] w-[155px] bg-[#282625] rounded-2xl relative"> <img className=" absolute mt-3 rotate-y-20 " src="../cars/merc.png" alt=""  /> </li>
                <li id="car3" onClick={()=>setHeroCard(2)} className="h-[90px] w-[155px] bg-[#282625] rounded-2xl relative"> <img className=" absolute mt-5 rotate-y-15 " src="../cars/audi.png" alt=""  /> </li>
                <li id="rbtn" onClick= {right} className="w-10 h-10 hover:bg-[#E1C038] bg-[#282625] flex justify-center items-center rounded-full " > <i className="ri-arrow-right-s-fill"></i> </li>
  
              </ul>

              <div id="car" className="  w-full h-screen  mt-7 ml-15">

              <div id="brd" className="w-[40vmax] h-[40vmax]   border-t border-dashed    border-[#EBE061] rounded-full"></div>

              <img id="img" className="w-[50vw] " src={car[heroCard]} alt=""  />

              </div>
              
            </div>
            
          </div>
        </div>
      </div>

      <div id="search" className="flex w-full justify-center items-center mt-20 " >
      <div id="container" className="bg-[#191919] w-[80vw] h-[20vh] text-2xl pt-7 flex justify-around " >


      
        <div className=" flex flex-col gap-1">
        <label htmlFor="loaction" className="block mb-2 text-2xl  dark:text-white"> <i className=" mr-2 ri-compass-discover-fill"></i>Choose A Location </label>
        <Select>
          <SelectTrigger className="w-[280px]  border-[#E1C038] bg-[#151513] hover:bg-[#E1C038] ">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dl">Delhi</SelectItem>
            <SelectItem value="mu">Mumbai</SelectItem>
            <SelectItem value="ch">Chennai</SelectItem>
            <SelectItem value="bl">Bengaluru</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div className=" flex flex-col gap-3">
        <label> Pick Up Date </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start  border-[#E1C038] bg-[#151513] hover:bg-[#E1C038] text-left font-normal",
                !pickup && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {pickup ? format(pickup, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={pickup}
              onSelect={setPickup}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        </div>

        <div className=" flex flex-col gap-3">
          <label>Return Date </label>
          <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left border-[#E1C038] bg-[#151513] hover:bg-[#E1C038] font-normal",
                !pickup && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {rtn ? format(rtn, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={rtn}
              onSelect={setRtn}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        </div>

        <div className=" bg-[#ffeb9d] h-15 w-15 flex justify-center items-center rounded-full hover:bg-[#E1C038] border-2 border-[#8c7000] " >
          <i className="ri-search-2-line text-4xl " ></i>
        </div>


      {/* </form> */}


      </div>
      </div>

      <div className="flex w-full justify-center mt-30">

      <div className="w-[90vw] flex justify-between"> 
        <div className="text-[#675F43] text-3xl  ">
          OUR LUXURIOUS
          <div className="text-white text-5xl mt-2">
            COLLECTION
          </div>
        </div>

        <div className="h-full flex items-end gap-20 text-4xl" >
        <i onClick={sLeft} className="ri-arrow-left-double-line"></i>
        <i onClick={sRight} className="ri-arrow-right-double-line"></i>

        </div>


      </div>
      </div>


      <div className="flex w-full justify-center">
      <div className="flex w-[90vw] justify-start gap-5 text-[grey] items-center mt-15 ">

        <div id="els"  onClick={()=>setSeries(0)} className=" p-4 bg-[#191919] neow border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white ">ELEGANT SERIES</div>
        <div id="eis" onClick={()=>setSeries(1)} className=" p-4 bg-[#191919] neow border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white ">ELITE SERIES</div>
        <div id="prs" onClick={()=>setSeries(2)} className=" p-4 bg-[#191919] neow border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white  ">PERFORMANCE SERIES</div>

      </div>
      </div>

      <div className="flex w-full justify-center mt-15 mb-40">
      <div className="flex justify-between w-[90vw]">

        <div className=" car-collection w-[25vw] h-[60vh] bg-[#191919] " >
          
          <div className=" h-[55%] "> <img src="../cars/jaguar.png" alt=""  /> </div>

          <div className=" h-[20%] mt-5 flex justify-around  ">

            <div>
              <div className="text-[#be9800] text-2xl">{`JAGUAR`}</div>
              {`JAGUAR XF 25T`}
            </div>

            <div className="h-15 w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center " > 

                <div className="font-extrabold text-xl text-[#d4d4d4]"> {`$ 499/-`} </div> PER DAY

            </div>

          </div>

          <div className=" ml-[7%] flex" >
            <div className="bg-[#151513] w-35 flex hover:text-white h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4] "> <span>Select </span> <i className="ri-arrow-right-line  "></i></div>
          </div>


        </div>

        <div className=" car-collection w-[25vw] h-[60vh] bg-[#191919] " >
          
          <div className=" h-[55%] "> <img src="../cars/mercs.png" alt=""  /> </div>

          <div className=" h-[20%] mt-5 flex justify-around  ">

            <div>
              <div className="text-[#be9800] text-2xl">{`MERCEDES`}</div>
              {`MERCEDES-BENZ GLC`}
            </div>

            <div className="h-15 w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center " > 

                <div className="font-extrabold text-xl text-[#d4d4d4]"> {`$ 749/-`} </div> PER DAY

            </div>

          </div>

          <div className=" ml-[7%] flex  " >
            <div className="bg-[#151513] w-35 flex hover:text-white h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4] "> <span>Select </span> <i className="ri-arrow-right-line  "></i></div>
          </div>


        </div>

        <div className=" car-collection w-[25vw] h-[60vh] bg-[#191919] " >
          
          <div className=" h-[55%] "> <img src="../cars/jeep.png" alt=""  /> </div>

          <div className=" h-[20%] mt-5 flex justify-around  ">

            <div>
              <div className="text-[#be9800] text-2xl">{`JEEP`}</div>
              {`JEEP GRAND CHEROKEE`}
            </div>

            <div className="h-15 w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center " > 

                <div className="font-extrabold text-xl text-[#d4d4d4]"> {`$ 399/-`} </div> PER DAY

            </div>

          </div>

          <div className=" ml-[7%] flex  " >
            <div className="bg-[#151513] w-35 flex hover:text-white h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4] "> <span>Select </span> <i className="ri-arrow-right-line  "></i></div>
          </div>


        </div>

      </div>
      </div>

      




    </>
  );
}

export default App;
