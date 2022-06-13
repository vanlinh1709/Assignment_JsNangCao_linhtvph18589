//libary
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AdminHomePage from "./components/AdminHomePage";
//Pages
import Books from "./pages/Books";
import CategoryBooks from "./pages/CategoryBooks";
import BookDetail from "./pages/BookDetail";
import CartDetail from "./pages/CartDetail";
import BookAdd from "./pages/BookAdd";
import BookEdit from "./pages/BookEdit";
import Categories from "./pages/Categories";
import CategoryAdd from "./pages/CategoryAdd";
import CategoryEdit from "./pages/CategoryEdit";
//
import router from "./helpers/router"; //obj router từ class Navigo
//

//render(): Hàm sinh ra các page bên người dùng
const render = async (content, ctgId, idBook) => {
  //content tương ứng với obj, tên content thể hiện nội dung của page đó.
  document.querySelector("#nav").innerHTML = Nav.render();
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#content").innerHTML = await content.render(ctgId,idBook);
  document.querySelector("#footer").innerHTML = Footer.render();

  if (content.afterRender) {
    content.afterRender();
  } 
};
// render_Ad(): Hàm sinh ra các page bên người dùng
const render_Ad = async (content, ctgId, idBook) => {
  //content tương ứng với obj, tên content thể hiện nội dung của page đó.
  document.querySelector("#header").innerHTML = Header.render_Ad();
  document.querySelector("#content").innerHTML = await content.render(ctgId,idBook);
  if (content.afterRender_Ad) {
     content.afterRender_Ad(ctgId, idBook);
  } 
};
//FLOW - FIRST
//Điều hướng yêu cầu trang.
router.on({
  //routre.on nhận obj là tham số
  "/": () => render(Books),
  "/category/:id/books": (data) => render(CategoryBooks, data.data.id),
  "/category/:id/books/:action": (data) =>
    render(BookDetail, data.data.id, data.data.action),
  "/cart-detail": () => render(CartDetail),
  //
  "/admin": () => render_Ad(AdminHomePage),
  "/admin/books": () => render_Ad(Books),
  "/admin/BookAdd": () => render_Ad(BookAdd),
  '/admin/:id/editBook/:action': (data) => render_Ad(BookEdit, data.data.id, data.data.action), 
  //
  '/admin/categories': () => render_Ad(Categories),
  '/admin/CategoryAdd': () => render_Ad(CategoryAdd),  
  'adminCategory/:id' :(data) => render_Ad(CategoryEdit, data.data.id),
});
router.resolve();
