function addClassToElements(className) {
    // Get all HTML elements
    var elements = document.getElementsByTagName('*');

    // Loop through all elements
    for (var i = 0; i < elements.length; i++) {
        // Add the class to each element
        elements[i].classList.add(className);
    }
}

const prefersMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const setDark = () => {
    document.body.setAttribute('data-theme', 'dark')
    addClassToElements('dark-theme');
}
const setLight = () => {
    document.body.setAttribute('data-theme', 'light');
    addClassToElements('light-theme');

}


prefersMode ? setDark() : setLight()

document.querySelectorAll()


