

//função para a música tocar ao clicar em qualquer lugar da página

const playMusic = () => {
    const audio = document.getElementById('music')
    audio.play()
    audio.volume = 0.1
}

//chamando o evento da função playmusic
window.addEventListener('click', function() {
    playMusic()
})

//função para mudar o tema da página e mudar a música conforme o tema
const switchTheme = () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    const theme = document.body.classList[0]
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music')
    audio.src = `assets/musics/${music}`
    audio.play()
    audio.volume = 0.1

}

