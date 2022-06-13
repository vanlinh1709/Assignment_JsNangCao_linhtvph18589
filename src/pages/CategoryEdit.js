import { getCategory } from "../api/category";
import { updateCategory } from "../api/category";
import router from "../helpers/router";
const CategoryEdit = {
  render: async (ctgId) => {
    const response = await getCategory(ctgId);
    const Category = response.data;

    return `
    <div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Update Categoryy</h3>
            </div>
            <div class="card-body">           
                    <div class="form-group">
                        <label for="">Category Id</label>
                        <input type="text" value = "${Category.id}" id="ctgId" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Name</label>
                        <input type="text" value = "${Category.name}" id="name" class="form-control">
                    </div>
                    <br>             
                    <div class="text-center">
                        <button type="submit" class="btn btn-md btn-primary">Update</button>
                    </div>
            </div>
        </div>
    </div>
</div>
    `;
  },//

  afterRender_Ad: (ctgId) => {
    const submitBtn = document.querySelector('.btn');
    submitBtn.addEventListener('click', async () => {
      const id = document.querySelector('#ctgId').value;
      const name = document.querySelector('#name').value;

      const submitData = {id, name};
      await updateCategory(ctgId, submitData);
      router.navigate('/admin/categories');
    })
  }
}
export default CategoryEdit;