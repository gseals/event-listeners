console.log('this is the link')

const pies = [
    {
      name: 'Dutch Apple Pie',
      imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
      instructor: 'zoeee',
      iceCream: 'Vanilla',
    },
    {
      name: 'Berry Pie',
      imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
      instructor: 'zoeee',
      iceCream: 'banana',
    },
    {
      name: 'Pumpkin Pie',
      imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
      instructor: 'michael',
      iceCream: 'Vanilla',
    },
    {
      name: 'Shoo Fly Pie',
      imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
      instructor: 'michael',
      iceCream: 'Coffee',
    },
    {
      name: 'Pecan Pie',
      imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
      instructor: 'callan',
      iceCream: 'Vanilla',
    },
    {
      name:'Keylime Pie',
      imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
      instructor: 'callan',
      iceCream: 'none',
    },
  ];

  // const printToDom = (toPrint, divId) => {
  //     document.getElementById(divId).innerHTML += toPrint
  // }

  /*   const pieBuilder = (piesArray) => {
    for (let i = 0; i < piesArray.length; i++) {
      const pie = piesArray[i]
      const domString = `
      <div class="card">
          <h2>${pie.name}</h2>
          <img src=${pie.imageUrl} alt='Image of ${pie.name}' />
      </div>
      `
      printToDom(domString, 'pie-zone')
  }
} */


// toPrint represents what we want to print on the page, divId is where
// where are going to print it. the name of the id in the html is this
// target

//the printToDom below is to be used with the dynamic buttons

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint
}

  const pieBuilder = (piesArray) => {
    let domString = ''
    for (let i = 0; i < piesArray.length; i++) {
        const pie = piesArray[i]
        domString = `
        <div class="card">
            <h2>${pie.name}</h2>
            <img src=${pie.imageUrl} alt='Image of ${pie.name}' />
        </div>
        `
        printToDom(domString, 'pie-zone')
    }
  }

//   pieBuilder(pies)

//   document.getElementById('my-button').addEventListener('click', pieBuilder)
//   document.getElementById('my-button').addEventListener('click', () => {
//       pieBuilder(pies)
//   })

// //   document.getElementById('my-button').addEventListener('click', () => {
// //       console.log('🐭')
// //   })

// document.getElementById('person-zoeee').addEventListener('click', () => {
//   //figure out who this instructor is for the button we clicked on  
//   const instructor = 'zoeee'
//   // only get those pies from the list of all the pies
//   const zoesPies = []
//   for (let i = 0; i < pies.length; i++) {
//     const pie = pies[i]
//     if (pie.instructor === instructor) {
//       zoesPies.push(pie)
//     }
//   }
//   // pass small list of pies into the pie builder
//   pieBuilder(zoesPies);
// })

// document.getElementById('person-callan').addEventListener('click', () => {
//   //figure out who this instructor is for the button we clicked on  
//   const instructor = 'callan'
//   // only get those pies from the list of all the pies
//   const callanPies = []
//   for (let i = 0; i < pies.length; i++) {
//     const pie = pies[i]
//     if (pie.instructor === instructor) {
//       callanPies.push(pie)
//     }
//   }
//   // pass small list of pies into the pie builder
//   pieBuilder(callanPies);
// })

// document.getElementById('zoeee').addEventListener('click', (e) => {
//   //figure out who this instructor is for the button we clicked on  
//   const instructor = e.target.id
//   // only get those pies from the list of all the pies
//   const selectedPies = []
//   for (let i = 0; i < pies.length; i++) {
//     const pie = pies[i]
//     if (pie.instructor === instructor) {
//       selectedPies.push(pie)
//     }
//   }
//   // pass small list of pies into the pie builder
//   pieBuilder(selectedPies);
// })

// document.getElementById('michael').addEventListener('click', (e) => {
//   //figure out who this instructor is for the button we clicked on  
//   const instructor = e.target.id
//   // only get those pies from the list of all the pies
//   const selectedPies = []
//   for (let i = 0; i < pies.length; i++) {
//     const pie = pies[i]
//     if (pie.instructor === instructor) {
//       selectedPies.push(pie)
//     }
//   }
//   // pass small list of pies into the pie builder
//   pieBuilder(selectedPies);
// })

// document.getElementById('callan').addEventListener('click', (e) => {
//   //figure out who this instructor is for the button we clicked on  
//   const instructor = e.target.id
//   // only get those pies from the list of all the pies
//   const selectedPies = []
//   for (let i = 0; i < pies.length; i++) {
//     const pie = pies[i]
//     if (pie.instructor === instructor) {
//       selectedPies.push(pie)
//     }
//   }
//   // pass small list of pies into the pie builder
//   pieBuilder(selectedPies);
// })


var buttonClick = (e) => {
    //figure out who this instructor is for the button we clicked on  
    const instructor = e.target.id
    // only get those pies from the list of all the pies
    const selectedPies = []
    for (let i = 0; i < pies.length; i++) {
      const pie = pies[i]
      if (pie.instructor === instructor) {
        selectedPies.push(pie)
      }
    }
    // pass small list of pies into the pie builder
    pieBuilder(selectedPies);
  }
document.getElementById('michael').addEventListener('click', buttonClick);
document.getElementById('callan').addEventListener('click', buttonClick);
document.getElementById('zoeee').addEventListener('click', buttonClick);

document.getElementById('all').addEventListener('click', () => {
      pieBuilder(pies)
  })