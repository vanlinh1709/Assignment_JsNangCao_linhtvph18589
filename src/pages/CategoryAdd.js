import { createCategory } from "../api/category";
import router from "../helpers/router";
const CategoryAdd = {
  render: () => {
    return `
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Add new Category</h3>
            </div>
            <div class="card-body">           
                    <div class="form-group">
                        <label for="">Category Id</label>
                        <input type="text" id="ctgId" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" id="name" class="form-control">
                    </div>
                    <br>             
                    <div class="text-center">
                        <button type="submit" class="btn btn-md btn-primary">Add</button>
                    </div>
            </div>
        </div>
    </div>
</div>
    `;
  },//end render()

  afterRender_Ad: () => {
   const submitBtn = document.querySelector('.btn');
   submitBtn.addEventListener('click', async () => {
      const id = document.querySelector('#ctgId').value;
      const name = document.querySelector('#name').value;
      const submitData = {
        id, name 
      };
      await createCategory(submitData);
      router.navigate('/admin/categories');
   })//end addEvent
  }//end afterRender()
}

export default CategoryAdd;