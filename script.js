// contiunue on branch



// connections

const singleCountry = document.querySelector(".search-by-country-value")
const SingleCountrySearchButton = document.querySelector(".country-search-button")
const dataStatsDisplayArea = document.querySelector(".div-display-stats")
const tableCountriesDisplay = document.querySelector(".table-display-countries")
const tableRegionDisplay = document.querySelector(".table-display-region")
const getAllCountriesButton = document.querySelector(".country-all-button")
const clearAllDataButton=document.querySelector(".clear-all-button")


// functions

async function getAllCountriesData() {

    let response = await fetch("https://restcountries.com/v3.1/all")
    let allCountriesData = await response.json()
    console.log(allCountriesData)
    return allCountriesData
}

async function getCountryFromSearch(inputvalue) {
    let response = await fetch("https://restcountries.com/v3.1/name/" + inputvalue)
    let singleCountryData = await response.json()
    console.log(singleCountryData)
    return singleCountryData

}


SingleCountrySearchButton.addEventListener("click", async function () {
    let singleCountryValue = singleCountry.value

    let singleCountryData = []

    singleCountryData = await getCountryFromSearch(singleCountryValue)

    createHtmlDataStats(singleCountryData, tableCountriesDisplay)

    
    singleCountry.value=""
})

getAllCountriesButton.addEventListener("click", async function () {
    let allCountryData = []

    allCountryData = await getAllCountriesData()

    createHtmlDataStats(allCountryData, tableCountriesDisplay)

})

clearAllDataButton.addEventListener("click", function clearAll(){
    dataStatsDisplayArea.innerText=""
    tableCountriesDisplay.innerText=""

})



function createHtmlDataStats(countryArray, parameter) {
   

    const headerRow = document.createElement("tr")
    parameter.appendChild(headerRow)

        const firstCountry = countryArray[0];

        for (const key in firstCountry) {
            if (key === "name" || key === "population") {
             const th = document.createElement("th")

                th.classList.add(key)
                th.textContent = key;
                headerRow.appendChild(th)
         }

     }
     let sumPopulation=+0
     let averagePopulation=+1

    const tableBody = document.createElement("tbody")
    parameter.appendChild(tableBody);

        countryArray.forEach(obj => {
             const rowDisplay = document.createElement("tr")

                for (const key in obj) {
                    if (key === "population") {
                       const cell = document.createElement("td")
                       cell.innerText = obj[key];
                        rowDisplay.appendChild(cell);
                        sumPopulation=sumPopulation +obj[key]
                        
                   }
                  if (key === "name") {
                      const cell = document.createElement("td")
                      cell.innerText = obj[key]["common"]
                      rowDisplay.appendChild(cell)

                  }
                }

                 tableBody.appendChild(rowDisplay)

                 averagePopulation=sumPopulation/countryArray.length
     });


    const totalCountries=document.createElement("p")
    totalCountries.innerText="Total countries result : "+countryArray.length
    dataStatsDisplayArea.appendChild(totalCountries)

    const sumAllCountriesPopulation=document.createElement("p") 
    sumAllCountriesPopulation.innerText="Total Countries Population :" + sumPopulation
    dataStatsDisplayArea.appendChild(sumAllCountriesPopulation)

    const averageCountriesPopulation=document.createElement("p")
    averageCountriesPopulation.innerText="Average Population : "+ averagePopulation
    dataStatsDisplayArea.appendChild(averageCountriesPopulation)





}
















// function createRegionStats(countryArray){
   
//         let regionCounts = {};
      
       
//         countryArray.forEach(obj => {
//                for (const key in obj) {
//                    if (key === "region") {
//                     regionCounts=obj.[key]
                      
                     
//                   }
                
          
    //       if (regionCounts.hasOwnProperty(dataRegion)) {
            
    //         regionCounts[dataRegion]++;
    //       } else {
           
    //         regionCounts[dataRegion] = 1;
    //       }
    //     }
      
       
    //     return regionCounts;
    //   }
      
     
      
     
      

      


















