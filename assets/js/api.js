async function fetchProfileData () {
    const url= 'https://raw.githubusercontent.com/pedrofrossard/Portfolio-Pedro/master/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}