import { getBook } from "../api/book";
import { updateBook } from "../api/book";
import reRender_Ad from "../helpers/reRender_Ad";
import router from "../helpers/router";
const BookEdit = {
  render: async (ctgId, idBook) => {
    const response = await getBook(ctgId,idBook);
    const infoBook = response.data;
    return `
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Update Book</h3>
            </div>
            <div class="card-body">
                <form action="" method="get" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="">Id</label>
                        <input value = "${infoBook.id}"  type="text" id="id" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input value = "${infoBook.name}" type="text" id="name" class="form-control">
                    </div>
                                
                    <div class="form-group">
                        <label for="">Category Id </label>
                        <input value = "${infoBook.categoryId}" type="text" id="ctgId" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input value = "${infoBook.price}" type="text" id="price" class="form-control">
                    </div>
                    <div class="form-group">
                    <label for="">Sale price</label>
                    <input value = "${infoBook.sale_price}" type="text" id="sale_price" class="form-control">
                </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-sm btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
    `;
  },//end render()
  afterRender_Ad: (ctgId, idBook) => {
    const submitBtn = document.querySelector('.btn');
    submitBtn.addEventListener('click', async () => {
      const id = document.querySelector('#id').value;
      const name = document.querySelector('#name').value;
      const categoryId = document.querySelector('#ctgId').value;
      const sale_price = document.querySelector('#sale_price').value;
      const price = document.querySelector('#price').value;
      const submitData = {
        name, price ,sale_price,id, categoryId
      };
      await updateBook(ctgId, idBook, submitData);
      router.navigate('/admin/books');
  })//end addEvent
}//end afterRender()
}
export default BookEdit;