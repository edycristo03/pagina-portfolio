

async function fetchProfileData() {

    const url = 'https://raw.githubusercontent.com/edycristo03/PAGINA-DE-PORTIFOLIO/master/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}