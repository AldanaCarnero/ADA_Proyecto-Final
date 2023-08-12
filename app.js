  const getAll = () => {
    document.getElementById('allButton').classList.add('activeButton')
    document.getElementById('maleButton').classList.remove('activeButton')
    document.getElementById('femaleButton').classList.remove('activeButton')
    document.getElementById('genderlessButton').classList.remove('activeButton')
    document.getElementById('unknownButton').classList.remove('activeButton')
    fetch('https://rickandmortyapi.com/api/character/')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;
        
        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
              <p>Name: ${personajes[i].name}</p>
              <p>Gender: ${personajes[i].gender}</p>
              <p>Species: ${personajes[i].species}</p>
              <p>Status: ${personajes[i].status}</p>
              <p>Origin: ${personajes[i].origin.name}</p>
              <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">1</p></div>`
        
        info += `<div id="paginado">
          <button id="next" onclick="nextPage()" class="gender" name="all">></button>
          <button onclick="callApi(${infoPage.pages})" class="gender" name="all">>></button>
        </div>`
        
        return section.innerHTML = info;
      })
  }

  const getFemales = () => {
    document.getElementById('allButton').classList.remove('activeButton')
    document.getElementById('maleButton').classList.remove('activeButton')
    document.getElementById('femaleButton').classList.add('activeButton')
    document.getElementById('genderlessButton').classList.remove('activeButton')
    document.getElementById('unknownButton').classList.remove('activeButton')
    fetch('https://rickandmortyapi.com/api/character/?gender=female')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;

        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
              <p>Name: ${personajes[i].name}</p>
              <p>Gender: ${personajes[i].gender}</p>
              <p>Species: ${personajes[i].species}</p>
              <p>Status: ${personajes[i].status}</p>
              <p>Origin: ${personajes[i].origin.name}</p>
              <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">1</p></div>`

        info += `<div id="paginado">
          <button onclick="nextPage()" class="gender" name="female">></button>
          <button onclick="callApi(${infoPage.pages})" class="gender" name="female">>></button>
        </div>`
        
        return section.innerHTML = info;
      })
  }

  const getMales = () => {
    document.getElementById('allButton').classList.remove('activeButton')
    document.getElementById('maleButton').classList.add('activeButton')
    document.getElementById('femaleButton').classList.remove('activeButton')
    document.getElementById('genderlessButton').classList.remove('activeButton')
    document.getElementById('unknownButton').classList.remove('activeButton')
    fetch('https://rickandmortyapi.com/api/character/?gender=male')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;

        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
              <p>Name: ${personajes[i].name}</p>
              <p>Gender: ${personajes[i].gender}</p>
              <p>Species: ${personajes[i].species}</p>
              <p>Status: ${personajes[i].status}</p>
              <p>Origin: ${personajes[i].origin.name}</p>
              <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">1</p></div>`

        info += `<div id="paginado">
          <button onclick="nextPage()" class="gender" name="male">></button>
          <button onclick="callApi(${infoPage.pages})" class="gender" name="male">>></button>
        </div>`
        
        return section.innerHTML = info;
      })
  }

  const getGenderless = () => {
    document.getElementById('allButton').classList.remove('activeButton')
    document.getElementById('maleButton').classList.remove('activeButton')
    document.getElementById('femaleButton').classList.remove('activeButton')
    document.getElementById('genderlessButton').classList.add('activeButton')
    document.getElementById('unknownButton').classList.remove('activeButton')
    fetch('https://rickandmortyapi.com/api/character/?gender=genderless')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;

        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
              <p>Name: ${personajes[i].name}</p>
              <p>Gender: ${personajes[i].gender}</p>
              <p>Species: ${personajes[i].species}</p>
              <p>Status: ${personajes[i].status}</p>
              <p>Origin: ${personajes[i].origin.name}</p>
              <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">1</p></div>`

        return section.innerHTML = info;
      })
  }

  const getUnknown = () => {
    document.getElementById('allButton').classList.remove('activeButton')
    document.getElementById('maleButton').classList.remove('activeButton')
    document.getElementById('femaleButton').classList.remove('activeButton')
    document.getElementById('genderlessButton').classList.remove('activeButton')
    document.getElementById('unknownButton').classList.add('activeButton')
    fetch('https://rickandmortyapi.com/api/character/?gender=unknown')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;

        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
              <p>Name: ${personajes[i].name}</p>
              <p>Gender: ${personajes[i].gender}</p>
              <p>Species: ${personajes[i].species}</p>
              <p>Status: ${personajes[i].status}</p>
              <p>Origin: ${personajes[i].origin.name}</p>
              <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">1</p></div>`
        
        return section.innerHTML = info;
      })
  }

  const callApi = (page) => {
    document.getElementById('allButton').classList.remove('activeButton')
    document.getElementById('maleButton').classList.remove('activeButton')
    document.getElementById('femaleButton').classList.remove('activeButton')
    let url = ''
    if (document.getElementsByClassName('gender')[0].name === 'female') {
      document.getElementById('femaleButton').classList.add('activeButton')
      url = `https://rickandmortyapi.com/api/character/?gender=female&page=${page}`
    } else if (document.getElementsByClassName('gender')[0].name === 'male') {
      document.getElementById('maleButton').classList.add('activeButton')
      url = `https://rickandmortyapi.com/api/character/?gender=male&page=${page}`
    } else {
      document.getElementById('allButton').classList.add('activeButton')
      url = `https://rickandmortyapi.com/api/character/?page=${page}`
    }
    
    fetch(url)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        const personajes = datos.results;
        const infoPage = datos.info;

        const section = document.getElementById('personajes');
        
        let cantidadPersonajes = infoPage.count
        let info = `<p class="totalPJ">Total de personajes: ${cantidadPersonajes}</p>`

        info += `<div class="cardContainer">`
        for (let i = 0; i < personajes.length; i++) {
            info += `
              <div class="card">
                <p>Name: ${personajes[i].name}</p>
                <p>Gender: ${personajes[i].gender}</p>
                <p>Species: ${personajes[i].species}</p>
                <p>Status: ${personajes[i].status}</p>
                <p>Origin: ${personajes[i].origin.name}</p>
                <p>Location: ${personajes[i].location.name}</p>
                <img src="${personajes[i].image}">
              </div>
            `
        }

        info += `</div><div class="pageStyle">Pagina Actual: <p id="page">${page}</p></div>`

        info += `<div id="paginado">`

        if(page != 1) {
          info += `
            <button onclick="callApi(1)" class="gender" name="${document.getElementsByClassName('gender')[0].name}"><<</button>
            <button onclick="backPage()" class="gender" name="${document.getElementsByClassName('gender')[0].name}"><</button>
          `
        }
        
        if(infoPage.next != null) {
          info += `
            <button onclick="nextPage()" class="gender" name="${document.getElementsByClassName('gender')[0].name}">></button>
            <button onclick="callApi(${infoPage.pages})" class="gender btn-red" name="${document.getElementsByClassName('gender')[0].name}">>></button>
          `
        }

        info += `</div>`
        
        return section.innerHTML = info;
      })
  }

  const nextPage = () => {
    const pageValue = document.getElementById('page').textContent
    let page = parseInt(pageValue) + 1
    callApi(page)
  }

  const backPage = () => {
    const pageValue = document.getElementById('page').textContent
    let page = parseInt(pageValue) - 1
    callApi(page)
  }
  
  document.onload = getAll();