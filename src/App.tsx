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

function App() {
  const [heroCard, setHeroCard] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bmw = '../cars/bmw.png'
  const merc = '../cars/merc.png'
  const audi = '../cars/audi.png'

  const car = [bmw, merc, audi]
  const [pickup, setPickup] = React.useState<Date>()
  const [rtn, setRtn] = React.useState<Date>()
  const [series, setSeries] = useState(0)

  function toggleMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function left() {
    if (heroCard != 0){
      setHeroCard(heroCard - 1)
    }
  }
  
  function right() {
    if (heroCard != 2){
      setHeroCard(heroCard + 1)
    }
  }

  function sLeft() {
    if (series != 0){
      setSeries(series - 1)
    }
  }
  
  function sRight() {
    if (series != 2){
      setSeries(series + 1)
    }
  }

  useEffect(() => {
    if (heroCard == 2) {
      document.querySelector('#rbtn')?.classList.remove('hover:bg-[#E1C038]')
    } else {
      document.querySelector('#rbtn')?.classList.add('hover:bg-[#E1C038]')
    }
    
    if (heroCard == 0) {
      document.querySelector('#lbtn')?.classList.remove('hover:bg-[#E1C038]')
    } else {
      document.querySelector('#lbtn')?.classList.add('hover:bg-[#E1C038]')
    }
  }, [heroCard])

  useEffect(() => {
    if(heroCard == 0){
      document.querySelector('#car1')?.classList.add('bg-[#AA8B00]')
    } else {
      document.querySelector('#car1')?.classList.remove('bg-[#AA8B00]')
    } 
    
    if(heroCard == 1){
      document.querySelector('#car2')?.classList.add('bg-[#AA8B00]')
    } else {
      document.querySelector('#car2')?.classList.remove('bg-[#AA8B00]')
    } 
    
    if(heroCard == 2){
      document.querySelector('#car3')?.classList.add('bg-[#AA8B00]')
    } else {
      document.querySelector('#car3')?.classList.remove('bg-[#AA8B00]')
    }
  }, [heroCard])

  useEffect(() => {
    if(series == 0){
      document.querySelector('#els')?.classList.add('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    } else {
      document.querySelector('#els')?.classList.remove('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    } 
    
    if(series == 1){
      document.querySelector('#eis')?.classList.add('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    } else {
      document.querySelector('#eis')?.classList.remove('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    } 
    
    if(series == 2){
      document.querySelector('#prs')?.classList.add('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    } else {
      document.querySelector('#prs')?.classList.remove('bg-[#8975246f]', 'border-[#E1C038]', 'text-white')
    }
  }, [series])

  return (
    <>
      <nav className="flex items-center justify-between w-full h-auto md:h-[100px] bg-[#151513] p-4 md:px-8">
        <h1 className="text-[#FFDEAD] text-3xl md:text-4xl">HausDerWagen</h1>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <i className="ri-menu-3-line text-3xl"></i>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-[grey]">
          <h4>Home</h4>
          <h4>Colletion</h4>
          <h4>About</h4>
          <h4>T&C</h4>
        </div>
        
        <div className="hidden md:flex gap-3">
          <Button className="text-white bg-[rgba(0,0,0,0)] border border-[#E1C038]">
            Rent a Car
          </Button>
          <Button className="text-white bg-[#E1C038]">SIGN UP</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-[72px] left-0 w-full bg-[#151513] z-50 transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <h4 className="text-[grey] py-2 border-b border-[#333]">Home</h4>
          <h4 className="text-[grey] py-2 border-b border-[#333]">Colletion</h4>
          <h4 className="text-[grey] py-2 border-b border-[#333]">About</h4>
          <h4 className="text-[grey] py-2 border-b border-[#333]">T&C</h4>
          <div className="flex flex-col gap-3 mt-2">
            <Button className="text-white bg-[rgba(0,0,0,0)] border border-[#E1C038]">
              Rent a Car
            </Button>
            <Button className="text-white bg-[#E1C038]">SIGN UP</Button>
          </div>
        </div>
      </div>

      <div id="main" className="flex w-full justify-center items-center text-justify flex-wrap mt-1">
        <div className="flex flex-col w-full">
          <div id="hero" className="flex flex-col md:flex-row w-[92vw] mx-auto h-auto md:h-[75vh] bg-[#191919] rounded-xl md:rounded-4xl justify-between pl-2 md:pl-6">
            <div className="flex w-full md:w-[45%] text-2xl md:text-4xl tracking-[-2px] flex-col mt-7 font-light px-4 md:px-10">
              <p>DISCOVER THE</p>
              <span className="text-4xl md:text-6xl mt-6 text-[#EBE061] font-semibold leading-tight">
                FREEDOM OF THE OPEN ROAD
              </span>
              <p className="text-base md:text-xl mt-6 md:mt-10">Hit the road your way with flexible rentals, great rates, and the perfect car for every journey. Your next adventure starts here.</p>
              <Button className="text-white text-lg md:text-xl bg-[rgba(0,0,0,0)] border border-[#E1C038] w-full md:w-70 h-12 md:h-20 mt-6 md:mt-10">
                Explore Our Price <i className="ri-arrow-right-s-fill ml-3 text-2xl md:text-3xl"></i>
              </Button>
            </div>
            
            <div className="w-full md:w-[55%] relative flex mt-4 md:mr-8 flex-col">
              <ul className="flex gap-2 md:gap-5 justify-center md:justify-end items-center w-full z-10">
                <li id="lbtn" onClick={left} className='w-8 h-8 md:w-10 md:h-10 hover:bg-[#E1C038] bg-[#282625] flex justify-center items-center rounded-full'><i className="ri-arrow-left-s-fill"></i></li>
                <li id="car1" onClick={()=>setHeroCard(0)} className="h-[60px] w-[100px] md:h-[90px] md:w-[155px] bg-[#282625] rounded-xl md:rounded-2xl relative overflow-hidden">
                  <img className="absolute mt-3 w-full h-auto object-contain" src="../cars/bmw.png" alt="" />
                </li>
                <li id="car2" onClick={()=>setHeroCard(1)} className="h-[60px] w-[100px] md:h-[90px] md:w-[155px] bg-[#282625] rounded-xl md:rounded-2xl relative overflow-hidden">
                  <img className="absolute mt-3 w-full h-auto object-contain" src="../cars/merc.png" alt="" />
                </li>
                <li id="car3" onClick={()=>setHeroCard(2)} className="h-[60px] w-[100px] md:h-[90px] md:w-[155px] bg-[#282625] rounded-xl md:rounded-2xl relative overflow-hidden">
                  <img className="absolute mt-3 md:mt-5 w-full h-auto object-contain" src="../cars/audi.png" alt="" />
                </li>
                <li id="rbtn" onClick={right} className="w-8 h-8 md:w-10 md:h-10 hover:bg-[#E1C038] bg-[#282625] flex justify-center items-center rounded-full"><i className="ri-arrow-right-s-fill"></i></li>
              </ul>

              <div id="car" className="w-full h-[300px] md:h-screen mt-4 md:mt-7 ml-0 md:ml-15 flex justify-center">
                <div id="brd" className="hidden md:block w-[40vmax] h-[40vmax] border-t border-dashed border-[#EBE061] rounded-full"></div>
                <img id="img" className="w-[90%] md:w-[50vw] object-contain" src={car[heroCard]} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="search" className="flex w-full justify-center items-center mt-10 md:mt-20">
        <div id="container" className="bg-[#191919] w-[90vw] md:w-[80vw] h-auto py-6 md:h-[20vh] text-lg md:text-2xl md:pt-7 flex flex-col md:flex-row justify-center md:justify-around gap-4 px-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="location" className="block mb-2 text-xl md:text-2xl dark:text-white">
              <i className="mr-2 ri-compass-discover-fill"></i>Choose A Location
            </label>
            <Select>
              <SelectTrigger className="w-full md:w-[280px] border-[#E1C038] bg-[#151513] hover:bg-[#E1C038]">
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

          <div className="flex flex-col gap-3">
            <label>Pick Up Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full md:w-[280px] justify-start border-[#E1C038] bg-[#151513] hover:bg-[#E1C038] text-left font-normal",
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

          <div className="flex flex-col gap-3">
            <label>Return Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full md:w-[280px] justify-start text-left border-[#E1C038] bg-[#151513] hover:bg-[#E1C038] font-normal",
                    !rtn && "text-muted-foreground"
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

          <div className="bg-[#ffeb9d] h-12 w-12 md:h-15 md:w-15 flex justify-center items-center rounded-full hover:bg-[#E1C038] border-2 border-[#8c7000] mx-auto md:mx-0">
            <i className="ri-search-2-line text-3xl md:text-4xl"></i>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center mt-16 md:mt-30">
        <div className="w-[90vw] flex flex-col md:flex-row justify-between items-center md:items-end">
          <div className="text-[#675F43] text-2xl md:text-3xl text-center md:text-left mb-4 md:mb-0">
            OUR LUXURIOUS
            <div className="text-white text-4xl md:text-5xl mt-2">
              COLLECTION
            </div>
          </div>

          <div className="flex items-center gap-10 md:gap-20 text-3xl md:text-4xl">
            <i onClick={sLeft} className="ri-arrow-left-double-line cursor-pointer"></i>
            <i onClick={sRight} className="ri-arrow-right-double-line cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="flex w-[90vw] justify-start gap-2 md:gap-5 text-[grey] items-center mt-8 md:mt-15 overflow-x-auto pb-2">
          <div id="els" onClick={()=>setSeries(0)} className="p-3 md:p-4 bg-[#191919] border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white whitespace-nowrap">ELEGANT SERIES</div>
          <div id="eis" onClick={()=>setSeries(1)} className="p-3 md:p-4 bg-[#191919] border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white whitespace-nowrap">ELITE SERIES</div>
          <div id="prs" onClick={()=>setSeries(2)} className="p-3 md:p-4 bg-[#191919] border-1 border-[#897524] hover:border-[#E1C038] hover:bg-[#8975246f] hover:text-white whitespace-nowrap">PERFORMANCE SERIES</div>
        </div>
      </div>

      <div className="flex w-full justify-center mt-8 md:mt-15 mb-20 md:mb-40">
        <div className="flex flex-col md:flex-row gap-6 md:justify-between w-[90vw]">
          <div className="car-collection w-full md:w-[25vw] h-auto md:h-[60vh] bg-[#191919] p-4">
            <div className="h-[200px] md:h-[55%] flex items-center justify-center overflow-hidden">
              <img src="../cars/jaguar.png" alt="" className="w-full h-auto object-contain" />
            </div>

            <div className="h-auto md:h-[20%] mt-5 flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start gap-4 md:gap-0">
              <div className="text-center md:text-left">
                <div className="text-[#be9800] text-xl md:text-2xl">{`JAGUAR`}</div>
                {`JAGUAR XF 25T`}
              </div>

              <div className="h-auto md:h-15 w-full md:w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center">
                <div className="font-extrabold text-lg md:text-xl text-[#d4d4d4]">{`$ 499/-`}</div> PER DAY
              </div>
            </div>

            <div className="flex justify-center md:justify-start md:ml-[7%] mt-4 md:mt-0">
              <div className="bg-[#151513] w-full md:w-35 flex hover:text-white h-12 md:h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4]">
                <span>Select</span> <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </div>
          </div>

          <div className="car-collection w-full md:w-[25vw] h-auto md:h-[60vh] bg-[#191919] p-4">
            <div className="h-[200px] md:h-[55%] flex items-center justify-center overflow-hidden">
              <img src="../cars/mercs.png" alt="" className="w-full h-auto object-contain" />
            </div>

            <div className="h-auto md:h-[20%] mt-5 flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start gap-4 md:gap-0">
              <div className="text-center md:text-left">
                <div className="text-[#be9800] text-xl md:text-2xl">{`MERCEDES`}</div>
                {`MERCEDES-BENZ GLC`}
              </div>

              <div className="h-auto md:h-15 w-full md:w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center">
                <div className="font-extrabold text-lg md:text-xl text-[#d4d4d4]">{`$ 749/-`}</div> PER DAY
              </div>
            </div>

            <div className="flex justify-center md:justify-start md:ml-[7%] mt-4 md:mt-0">
              <div className="bg-[#151513] w-full md:w-35 flex hover:text-white h-12 md:h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4]">
                <span>Select</span> <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </div>
          </div>

          <div className="car-collection w-full md:w-[25vw] h-auto md:h-[60vh] bg-[#191919] p-4">
            <div className="h-[200px] md:h-[55%] flex items-center justify-center overflow-hidden">
              <img src="../cars/jeep.png" alt="" className="w-full h-auto object-contain" />
            </div>

            <div className="h-auto md:h-[20%] mt-5 flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start gap-4 md:gap-0">
              <div className="text-center md:text-left">
                <div className="text-[#be9800] text-xl md:text-2xl">{`JEEP`}</div>
                {`JEEP GRAND CHEROKEE`}
              </div>

              <div className="h-auto md:h-15 w-full md:w-30 p-2 text-[.6rem] rounded-2xl border border-[#897524] hover:border-[#E1C038] flex flex-col items-center">
                <div className="font-extrabold text-lg md:text-xl text-[#d4d4d4]">{`$ 399/-`}</div> PER DAY
              </div>
            </div>

            <div className="flex justify-center md:justify-start md:ml-[7%] mt-4 md:mt-0">
              <div className="bg-[#151513] w-full md:w-35 flex hover:text-white h-12 md:h-15 rounded-[.5rem] text-xl pl-3 justify-start items-center border border-[#897524] hover:border-[#E1C038] text-[#d4d4d4]">
                <span>Select</span> <i className="ri-arrow-right-line ml-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;