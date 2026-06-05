const instrumentsArr = [
  { category: "Woodwinds", instrument: "Flute", price: 500 },
  { category: "Woodwinds", instrument: "Clarinet", price: 200 },
  { category: "Woodwinds", instrument: "Oboe", price: 4000 },
  { category: "Brass", instrument: "Trumpet", price: 200 },
  { category: "Brass", instrument: "Trombone", price: 300 },
  { category: "Brass", instrument: "French Horn", price: 4300 },
  { category: "Percussion", instrument: "Drum Set", price: 500 },
  { category: "Percussion", instrument: "Xylophone", price: 3000 },
  { category: "Percussion", instrument: "Cymbals", price: 200 },
  { category: "Percussion", instrument: "Marimba", price: 3000 }
]
const box_instruments=document.querySelector(".box-instruments")
const select_instrument=document.querySelector(".select-instrument")
const search_input=document.getElementById("search-input")
const sort_by_price=document.getElementById("sort-by-price")
function filter_instruments(Category=select_instrument.value){
    if(Category=="All"){
        box_instruments.innerHTML=""
        for(let instr of instrumentsArr){
            const instrument_card=document.createElement("div")
            instrument_card.setAttribute("class","card")
            const instrument_name=document.createElement("h1")
            instrument_name.innerHTML=instr.instrument
            const instrument_price=document.createElement("p")
            instrument_price.innerHTML=instr.price
            instrument_card.append(instrument_name)
            instrument_card.append(instrument_price)
            box_instruments.append(instrument_card)
        }
    }
    else{
        let filtered_instruments=instrumentsArr.filter((inst)=>{return inst.category===Category})
        box_instruments.innerHTML=""
        for(let instr2 of filtered_instruments){
          const instrument_card1=document.createElement("div")
          instrument_card1.setAttribute("class","card")
          const instrument_name1=document.createElement("h1")
          instrument_name1.innerHTML=instr2.instrument
          const instrument_price1=document.createElement("p")
          instrument_price1.innerHTML=instr2.price
          instrument_card1.append(instrument_name1)
          instrument_card1.append(instrument_price1)
          box_instruments.append(instrument_card1) 
        }
    } 
}
filter_instruments()
select_instrument.addEventListener("change",()=>{
    filter_instruments()
})
function search_by_name(Search=search_input.value){
    let filtered_by_names=instrumentsArr.filter((inst)=>{return String(inst.instrument).startsWith(Search)})
        box_instruments.innerHTML=""
        for(let instr3 of filtered_by_names){
          const instrument_card2=document.createElement("div")
          instrument_card2.setAttribute("class","card")
          const instrument_name2=document.createElement("h1")
          instrument_name2.innerHTML=instr3.instrument
          const instrument_price2=document.createElement("p")
          instrument_price2.innerHTML=instr3.price
          instrument_card2.append(instrument_name2)
          instrument_card2.append(instrument_price2)
          box_instruments.append(instrument_card2) 
        }
}

search_input.addEventListener("input",()=>{
    search_by_name()
})
function Sort_by_price(){
   if(sort_by_price.value==="LOW-HIGH"){
       var sorted_instruments=instrumentsArr.sort((a,b)=>{return a.price-b.price})
   }
   else if(sort_by_price.value==="HIGH-LOW"){
       var sorted_instruments=instrumentsArr.sort((a,b)=>{return b.price-a.price})
   }
   else{var sorted_instruments=instrumentsArr}
        box_instruments.innerHTML=""
        for(let instr4 of sorted_instruments){
          const instrument_card4=document.createElement("div")
          instrument_card4.setAttribute("class","card")
          const instrument_name4=document.createElement("h1")
          instrument_name4.innerHTML=instr4.instrument
          const instrument_price4=document.createElement("p")
          instrument_price4.innerHTML=instr4.price
          instrument_card4.append(instrument_name4)
          instrument_card4.append(instrument_price4)
          box_instruments.append(instrument_card4) 
        }
}
sort_by_price.addEventListener("change",()=>{
    Sort_by_price()
})

