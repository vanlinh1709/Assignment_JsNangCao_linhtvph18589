import { getCategories } from "../api/category";
import { delCategory } from "../api/category";
import reRender_Ad from "../helpers/reRender_Ad";
import router from "../helpers/router";
const Categories = {

  render: async () => {
    const response =  await getCategories();
    const {data} = response;
    return `
    <div class = "mb-1">
      <a href = "/admin/CategoryAdd/">
        <button class = "btn btn-info">Add new category</button>
      </a>
    <hr>
    </div>
    ${data.map((Category) => {
      return `
        <div class = "row">
        <div class = "col-sm">
          <div>Id: ${Category.id} </div>
          <div>Name: ${Category.name} </div>
        </div>

        <div class = "col-sm">
          <div>
            <button class = "btn btn-danger" data-id = "${Category.id}">Delete</button>
            <a href = "/adminCategory/${Category.id}"> <button class = "btn btn-warning">Edit</button></a>
          </div>
        </div>
        </div>
        <br><hr>
      `;
    }).join("")    
    }     
    `;
  },//
  afterRender_Ad: () => {
    const submitBtn = document.querySelectorAll('.btn-danger');
    submitBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const btnId = btn.dataset.id;
        await delCategory(btnId);
        reRender_Ad(Categories);
      })
    })
  }
}
export default Categories;