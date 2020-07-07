import Axios from 'axios';

export const AllCountries = async() => {
    try {
        //const apiresponse = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        const { data: {countryitems} } = await Axios.get("https://api.thevirustracker.com/free-api?countryTotals=ALL");
        console.log(countryitems);
            let countriesdata  =[];
          Object.entries(countryitems[0]).map((item) => {
                let country={code:item[1].code,title:item[1].title,data:item[1]}
                countriesdata.push(country);
                return 1;
            });
        
        return countriesdata;
        } catch(error) {
                console.log(error);
    }
}


export const GetDailyData = async(country) => {
    console.log(country);

    try {
       
        let changeableUrl = "https://api.thevirustracker.com/free-api?countryTimeline="+country;
        console.log(changeableUrl);
        const { data: {timelineitems} } = await Axios.get(changeableUrl);
        console.log(timelineitems);
            let countriesdata  =[];
      
             Object.entries(timelineitems[0]).map((item) => {
                    let dailydata={date:item[0],total_cases:item[1].total_cases,total_deaths:item[1].total_deaths,total_recoveries:item[1].total_recoveries}
                countriesdata.push(dailydata);
                return 1;
            });
        return countriesdata;
        } catch(error) {
                console.log(error);
    }
}