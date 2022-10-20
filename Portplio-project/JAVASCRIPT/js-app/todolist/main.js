const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');


const createItem = (text) => {
  const itemRow = document.createElement('li');
  itemRow.classList.add('item_row');

  const item = document.createElement('div');
  item.classList.add('item');

  const span = document.createElement('span');
  span.classList.add('item_name');
  span.textContent = text;

  const btnDelete = document.createElement("button");
  btnDelete.classList.add('item_delete');
  btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  btnDelete.addEventListener('click', () => {
    items.removeChild(itemRow);

  })

  const itemDivider = document.createElement('div');
  itemDivider.classList.add('divider');
  item.appendChild(span);
  item.appendChild(btnDelete);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow
}


const onAdd = () => {
  const text = input.value;
  if (!text) {
    input.focus();
    return;
  }
  const itemRow = createItem(text);
  items.appendChild(itemRow);
  itemRow.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();

}
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
})