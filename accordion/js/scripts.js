let titles = document.querySelectorAll('.accordion__title');

for (let title of titles) {
  title.addEventListener('click', function () {
    let panel = this.nextElementSibling
    return panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px"
  })
}