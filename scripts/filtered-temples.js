document.addEventListener("DOMContentLoaded", function () {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    const gallery = document.getElementById('gallery');
    const title = document.getElementById('album-title');

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Oakland California",
            location: "Oakland, California",
            dedicated: "1964, November, 17",
            area: 95000,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/02-Oakland-Temple-Exterior-2236160.jpg"
        },
        {
            templeName: "Sacramento California",
            location: "Sacramento, California",
            dedicated: "2006, September, 3",
            area: 19500,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/400x250/sacramento-temple-769989-wallpaper.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41010,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
        }
    ];

    function createTempleCard(templesList = temples) {
        gallery.innerHTML = '';
        templesList.forEach(temple => {
            const card = document.createElement('section');
            const name = document.createElement('h3');
            const location = document.createElement('p');
            const dedicated = document.createElement('p');
            const area = document.createElement('p');
            const image = document.createElement('img');

            image.setAttribute('src', temple.imageUrl);
            image.setAttribute('alt', temple.templeName);
            image.setAttribute('loading', 'lazy');
            name.textContent = `Name: ${temple.templeName}`;
            location.textContent = `Location: ${temple.location}`;
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;
            area.textContent = `Area: ${temple.area} sqft`;

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(image);
            gallery.appendChild(card);
        });
    }

    function filterTemples(filterFunc, titleText) {
        const filteredTemples = temples.filter(filterFunc);
        createTempleCard(filteredTemples);
        title.textContent = titleText;
    }

    document.getElementById('home').addEventListener('click', () => {
        createTempleCard();
        title.textContent = "Home";
    });

    document.getElementById('old').addEventListener('click', () => {
        filterTemples(temple => new Date(temple.dedicated).getFullYear() < 1900, "Old Temples");
    });

    document.getElementById('new').addEventListener('click', () => {
        filterTemples(temple => new Date(temple.dedicated).getFullYear() > 2000, "New Temples");
    });

    document.getElementById('large').addEventListener('click', () => {
        filterTemples(temple => temple.area > 90000, "Large Temples");
    });

    document.getElementById('small').addEventListener('click', () => {
        filterTemples(temple => temple.area < 10000, "Small Temples");
    });

    createTempleCard();

    function getCurrentYear() {
        return new Date().getFullYear();
    }

    function getLastModified() {
        return new Date(document.lastModified).toLocaleString();
    }

    document.getElementById("currentyear").textContent = getCurrentYear();
    document.getElementById("lastModified").textContent = getLastModified();

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});
