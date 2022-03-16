const headerContainerBtn = document.querySelector('.header-container-btn')
const sectionContent = document.querySelector('.section-content')

headerContainerBtn.addEventListener('click', () => {  
    sectionContent.classList.add('section-content-toggle')
})