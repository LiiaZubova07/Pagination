async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

async function main() {
  const postsData = await getData();
  let currentPage = 1;
  let rows = 10;

  function displayList(arrData, rowPerPage, page) {
    const postsEl = document.querySelector('.posts');

	 const start = rowPerPage * page;
	 const end = start + rowPerPage;
  }
  function displayPagination() {}
  function displayPaginationBtn() {}
}
main();
