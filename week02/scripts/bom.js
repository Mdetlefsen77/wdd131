const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn'); // Corrigir a seleção do botão
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Verifique se o campo de entrada não está vazio
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        // Adicione o capítulo ao elemento <li>
        li.textContent = input.value;

        // Crie o botão de exclusão e adicione-o ao elemento <li>
        deleteBtn.textContent = '❌';
        li.appendChild(deleteBtn);

        // Adicione o elemento <li> à lista <ul>
        list.appendChild(li);

        // Adicione um evento de clique ao botão de exclusão
        deleteBtn.addEventListener('click', function() {
            // Remova o elemento <li> quando o botão de exclusão for clicado
            list.removeChild(li);
            // Limpe o valor do campo de entrada
            input.value = '';
            // Envie o foco de volta para o campo de entrada
            input.focus();
        });

        // Limpe o valor do campo de entrada após a adição do capítulo
        input.value = '';

        // Envie o foco de volta para o campo de entrada
        input.focus();
    } else {
        // Se o campo de entrada estiver vazio, exiba uma mensagem ou faça nada
        // Você pode adicionar uma mensagem para o usuário ou simplesmente retornar
        // para manter o foco no campo de entrada
        input.focus();
    }
});
