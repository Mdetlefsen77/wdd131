const input = document.querySelector('#favchap');
const button = document.querySelector('#add-chapter');
const list = document.querySelector('#list');

button.addEventListener("click", function () {
    if (input.value.trim() !== '') {
        const deleteButton = document.createElement('button');
        const li = document.createElement('li');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        input.value = "";
        input.focus();
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

    } else {

        window.alert('Please add a chapter');
        input.focus();
    }
});
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});