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
  function displayPagination() {}
  function displayPaginationBtn() {}

  displayList(postsData,rows, currentPage );
}

main();
