// let weather = {
//     apiKey: "042dd97cfd7cf74f9712148ed0b84fcf",
//     fetchWeather: (city) => {
//         fetch ("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=042dd97cfd7cf74f9712148ed0b84fcf")
//         .then((response) => {
//             if (!response.ok){
//                 alert("No weather found.");
//                 throw new Error("No weather found.");
//             }
//             return response.json();
//         })
//          .then((data) => this.displayWeather(data));
// },

//     displayWeather: function (data){
//         const {name} = data;
//         const {icon, description} = data.weather[0];
//         const {temp, humidity} = data.mian;
//         const {speed} = data.wind;
//         console.log(name,icon,description,temp,humidity,speed);
//     },

// }

const apiKey = "042dd97cfd7cf74f9712148ed0b84fcf";
const fetchWeather =  async (city) => {
const response = await fetch ("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=042dd97cfd7cf74f9712148ed0b84fcf");

            const data = await response.json();
            return data;
    }
 fetchWeather('manchester');
 

            

    // displayWeather: function (data){
    //     const {name} = data;
    //     const {icon, description} = data.weather[0];
    //     const {temp, humidity} = data.mian;
    //     const {speed} = data.wind;
    //     console.log(name,icon,description,temp,humidity,speed);
    // },

// }