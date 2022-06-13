//Không lấy được toàn bộ book => Lấy từng danh mục rồi tạo thành push vào một array allBooks
import sumCategory from "../helpers/sumCategory";
import { getCtgBooks } from "../api/book";

import reRender_Ad from "../helpers/reRender_Ad";

import { delBook } from "../api/book";
const Books = {
  //2 nhiệm vụ trong hàm render này:
  //1.Get data từ api
  //2.Đưa các dữ liệu đó vào trong mã html: use map
  render: async () => {
    const allBooks = [];
    for (let ctgId = 1; ctgId <= sumCategory; ctgId++) {
      const response = await getCtgBooks(ctgId);
      const ctgIdBooks = response.data; //ctgIdBooks: 1 mảng category
      allBooks.push(ctgIdBooks);
    } //get từng danh mục rồi push vào 1 mảng rỗng allBooks
    //allBooks[] giờ sẽ có 4 mảng con, tương ứng với 4 mảng category.
    //  console.log(allBooks);
    
    
    return `
        <div> <h1 class="text-center" >ALL BOOKS</h1></div>
        <div class= "row">
          <div class= "col-9"><a href = "/admin/BookAdd"> 
          <button class = "mx-3 btn btn-info" hidden>Thêm mới </button>
        </a></div>
          <div class= "col-3">
          <div class="form-outline">
          <input id="search-input" type="search" id="form1" class="form-control" />
          <button id="search-button" type="button" class="btn btn-primary">
          Search
            </button>
        </div>
        
          </div>

        </div>
        
               
        </div>
          <hr>
          <div class = "row mx-auto">
        ${
          allBooks
            .map(
              (ctgIdBooks) =>
                `<div class = "col-sm">
                      ${ctgIdBooks
                        .map(
                          (Book) =>
                            `<div>
                      <div>ID: ${Book.id}</div>
                      <div>Name: ${Book.name}</div>
                      <div>Price: ${Book.price}</div>
                      <div>Sale Price: ${Book.sale_price}</div>
                      <div>Category id: ${Book.categoryId}</div>

                      <div>
                
                      <a href = "/category/${Book.categoryId}/books/${Book.id}">
                          <button class = 'btn btn-info'>Detail</button>
                      </a>                               
                    
                        <button  class='btn btn-danger' data-id = "${Book.id}" data-ctgid = "${Book.categoryId}" hidden >Delete</button>

                        <a href = "/admin/${Book.categoryId}/editBook/${Book.id}">
                            <button class='btn btn-warning' hidden>Edit</button>
                        </a>
                                                       
                      </div>
                      <br>
                  </div>`
                        )
                        .join("")}</div>`

              //func
            )
            .join("") //parent map
        }
        </div>`;
  }, //end render();

  afterRender_Ad: () => {
    const btElement = document.querySelectorAll(".btn");
    for (let i = 0; i < btElement.length; i++) {
      btElement[i].removeAttribute("hidden");
    } //endFor

    const btnDelete = document.querySelectorAll(".btn-danger");
    btnDelete.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const btnId = btn.dataset.id;
        const btnctgId = btn.dataset.ctgid;

        await delBook(btnctgId, btnId);
        await reRender_Ad(Books);
      });
    });
    //
//     const searchButton = document.getElementById('search-button');
//     const searchInput = document.getElementById('search-input');
//     searchButton.addEventListener('click', () => {
//     const inputValue = searchInput.value;
//     reRender_Ad(Books);

// });
  },
}; //end obj

export default Books;
