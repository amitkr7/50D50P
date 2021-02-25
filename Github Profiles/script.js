const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username)

    createUserCard(data)
    getRepos(username)
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('No Profile Found with this username')
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (error) {
    createErrorCard('Error Fetching Repos')
  }
}

function createUserCard({
  avatar_url,
  login,
  followers,
  following,
  public_repos,
  bio,
}) {
  const cardHtml = ` <div class="card">
            <div>
                <img src="${avatar_url}" alt="User Profile" class="avatar">
            </div>

            <div class="user-info">
                <h2>${login}</h2>
                <p>${
                  bio === null
                    ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dignissimos!'
                    : bio
                }</p>

                <ul>
                    <li>${followers}<strong>Followers</strong></li>
                    <li>${following}<strong>Following</strong></li>
                    <li>${public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">

                </div>
            </div>
        </div>`

  main.innerHTML = cardHtml
}

function createErrorCard(msg) {
  const cardHtml = `
    <div class="card">
    <h1>${msg}</h1>
    </div>
    `
  main.innerHTML = cardHtml
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos')

  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement('a')

    repoEl.classList.add('repo')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name

    reposEl.appendChild(repoEl)
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)

    search.value = ''
  }
})
