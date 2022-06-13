import { createBook } from "../api/book";
import router from "../helpers/router";
const BookAdd = {
  render: () => {
  return `
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Thêm sách</h3>
            </div>
            <div class="card-body">
                <form action="" method="get" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="">Id</label>
                        <input type="text" id="id" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" id="name" class="form-control">
                    </div>
                                
                    <div class="form-group">
                        <label for="">Category Id </label>
                        <input type="text" id="ctgId" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" id="price" class="form-control">
                    </div>
                    <div class="form-group">
                    <label for="">Sale price</label>
                    <input type="text" id="sale_price" class="form-control">
                </div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-sm btn-primary">Thêm</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    `;
  },//end render()

  afterRender_Ad: () => {
   const submitBtn = document.querySelector('.btn');
   submitBtn.addEventListener('click', async () => {
    console.log(submitBtn);
      const id = document.querySelector('#id').value;
      const name = document.querySelector('#name').value;
      const categoryId = document.querySelector('#ctgId').value;
      const sale_price = document.querySelector('#sale_price').value;
      const price = document.querySelector('#price').value;
      const submitData = {
        name, price ,sale_price,id, categoryId
      };
      await createBook(categoryId, submitData);
      router.navigate('/admin/books')
   })//end addEvent
  }//end afterRender()

  };//End obj



export default BookAdd;