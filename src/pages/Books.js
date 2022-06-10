//Không lấy được toàn bộ book => Lấy từng danh mục rồi tạo thành push vào một array allBooks
import sumCategory from "../helpers/sumCategory";
import { getCtgBooks } from "../api/book";
const Books = {
  //2 nhiệm vụ trong hàm render này:
  //1.Lấy được dữ liệu từ trên api xuống
  //2.Đưa các dữ liệu đó vào trong mã html: use loop
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
  },
};
export default Books;
