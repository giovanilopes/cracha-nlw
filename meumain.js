const LinksSocialMedia = {
  github: 'giovanilopes',
  youtube: 'nome2',
  facebook: 'nome3',
  instagram: 'nome4',
  twitter: 'nome5'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

//JSON e API - api.github.com/users/nomedousuario
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia[social]}`

  // alert(url)

  //fetch pega o conteudo da pagina e traz para o JS como resposta
  //o retorno vai para dentro do then
  fetch(url)
    .then(response => response.json()) //transformando em json
    .then(data => {
      userName.textContent = data.name //trocando o nome do cracha para o nome do github
      userBio.textContent = data.bio //trocando a descricao pela bio do github
      userLink.href = data.html_url //adiciona o link do github no usuario
      UserImage.src = data.avatar_url //muda a foto do perfil pela do github
      userLogin.textContent = data.login //muda o nome do usuario do github
    })
}

getGitHubProfileInfos()
