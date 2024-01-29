/* Новые элементы должны добавляться в список по нажатию на Enter */

const input = document.querySelector('#input');
const itemsContainer = document.querySelector('#items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const itemText = input.value;

        if (itemText != '') {              /* Пустые элементы не должны добавляться */
            const newItem = document.createElement('div');
            newItem.textContent = itemText;

            newItem.addEventListener('click', function() {  /* Если кликнуть на элемент списка, он зачеркивается */
                newItem.classList.toggle('done');           /* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
            });
                
            itemsContainer.append(newItem);
        }     
        
        input.value = ''; /* Очищать input после добавления нового элемента в список */
    }
});