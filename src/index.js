//libary
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
//
import Books from "./pages/Books";
import CategoryBooks from "./pages/CategoryBooks";
import BookDetail from "./pages/BookDetail";
import CartDetail from "./pages/CartDetail";
//
import router from "./helpers/router"; //obj router từ class Navigo
//

//FLOW- SECOND
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
//FLOW - FIRST
//Điều hướng yêu cầu trang.
router.on({
  //routre.on nhận obj là tham số
  "/": () => render(Books), //và đây là những phương thức.
  "/category/:id/books": (data) => render(CategoryBooks, data.data.id),
  "/category/:id/books/:action": (data) =>
    render(BookDetail, data.data.id, data.data.action),
  "/cart-detail": () => render(CartDetail),
});
router.resolve();
