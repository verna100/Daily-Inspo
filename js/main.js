document.querySelector('button').addEventListener('click', getApi)



let calKey= config.CAL_API_KEY

function getApi(){
  let country = document.querySelector('input').value
  const url =`https://calendarific.com/api/v2/holidays?api_key=${calKey}&country=${country}&year=2022`;
fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.response.holidays.country.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}      
getApi()

// getQuote()
// function getapi(url)
// {
//   // const response = await fetch(url);
//   let data = await response.json();
//   console.log(data);
// }

// getapi(api_url);

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://zenquotes.io/api/random'

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         // document.querySelector('h2').innerText = data;
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// getFetch()