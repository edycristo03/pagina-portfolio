
function updateProfileInfo(profileData) {
    /*const photo = document.getElementById ('profile.photo')
    photo.src = profileData.photo
    photo.alt = photo.name*/



}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill} </li>`).join('')




}

/*function updateHardSkills(profileData) {

    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}">
</li>`).join('')
}*/


function updateLenguages(profileData) {

    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => ` <li>${languages}</li>`).join('')
   

}



function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `  <li>
        <h3 ${project.github ? 'class = "github"' : ''}> ${project.name}</h3>
        <a href= ${project.url} target="_blank">${project.url}.br</a>
    </li>
`    }).join('')

}


function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')

    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return ` <li>
        <h3 class="title"> ${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p> ${experience.description} </p>
    </li>`
    }).join('')
}



(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateLenguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()