//your JS code here. If required.
const animalList = [
    'camel',
    'cheetah',
    'elephant',
    'gorilla',
    'koala',
    'lion',
    'polar_bear',
    'tiger',
    'wolf'
];

const animalGallery = document.getElementById('animalGallery');

function renderAnimalPhotos() {
    animalList.forEach(animal => {
        const animalImageDiv = document.createElement('div');
        animalImageDiv.className = 'animal-image';
        const animalImage = document.createElement('img');
        animalImage.src = `https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animal}.jpg`;
        animalImage.alt = animal;
        animalImageDiv.appendChild(animalImage);
        animalGallery.appendChild(animalImageDiv);
    });
}

renderAnimalPhotos();
