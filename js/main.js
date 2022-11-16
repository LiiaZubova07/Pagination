async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function main() {
  const postsData = await getData();
  //с какой страницы начинать
  let currentPage = 1;
  //сколько элементов на странице отображать
  let rows = 10;
  //информация, сколько стр отображать, какая страница
  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');
	 postsEl.innerHTML = '';
	 //после того, как page1 будет приходить, будем уменьшать на 1
	 page--;

    //начальное значение
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    //получаю срез от начала до конца
    const paginatedData = arrData.slice(start, end);

    //создаю хтмл элементы и положу в postEl
    paginatedData.forEach((el) => {
      //
      const postEl = document.createElement('div');
      //к div присвою класс .post
      postEl.classList.add('post');
      //в post положить элемент айди
      postEl.innerText = `${el.title}`;
      //добавляю пост в posts
      postsEl.appendChild(postEl);
    });
  }
  //кол-во элементов на странице
  function displayPagination(arrData, rowPerPage) {
    const paginationEl = document.querySelector('.pagination');
    //количество страниц
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    //чтобы класть список (li)
    const ulEl = document.createElement('ul');
    ulEl.classList.add('pagination__list');

    //пишу цикл, который запускается pagesCount раз
    for (let i = 0; i < pagesCount; i++) {
      //первая кнопка = 1; вторая кнопка = 2, ...
      const liEl = displayPaginationBtn(i + 1);
      //создаю li и аппендю в ulEl
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
  }

  function displayPaginationBtn(page) {
    //
    const liEl = document.createElement('li');
    //навешиваю стиль
    liEl.classList.add('pagination__item');
    //в li положила номер страницы
    liEl.innerText = page;
	 if(currentPage == page){
		liEl.classList.add('pagination__item-active');
	 }

    liEl.addEventListener('click', () => {
      currentPage = page;
      displayList(postsData, rows, currentPage);

		let currentItemLi = document.querySelector('li.pagination__item-active');
		currentItemLi.classList.remove('pagination__item-active');

		liEl.classList.add('pagination__item-active');
    });
    return liEl;
  }

  displayList(postsData, rows, currentPage);
  displayPagination(postsData, rows);
}

main();
