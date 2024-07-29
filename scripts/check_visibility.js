function checkVisibility(repository) {
    let repository_link = `https://github.com/bokix01/${repository}`;
    fetch(repository_link)
        .then(() => {
            return `<a target="_blank" href="${repository_link}"><i class="fa-brands fa-github"></i>View project source code</a>`;
        })
        .catch(() => {
            return `<a class="private" href="#"><i class="fa-solid fa-lock"></i>Project source code is private</a>`
        })
}
