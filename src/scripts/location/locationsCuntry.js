const locationCountry=document.querySelector('.location-Country')

const getLocation=async()=>{
    try {
        const res=await fetch("http://ip-api.com/json/")
        const data=await res.json()
        locationCountry.innerHTML=data.country
    } catch (error) {
        console.error(`error for location: ${error}`);
    }
}
getLocation()