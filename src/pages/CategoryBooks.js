import { getCtgBooks } from "../api/book";
const CategoryBooks = {
  render: async (ctgId) => {
    //get data
    const response = await getCtgBooks(ctgId);
    const { data } = response;

    return `      
        <div class = "row">
        ${data
          .map(
            (Book) => `
                  <div class = col-sm>
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
                    </div>
                      `
          )
          .join("")}      
      </div>`;
  },
};
export default CategoryBooks;
