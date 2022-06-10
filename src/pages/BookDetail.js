import { getBook } from "../api/book";
//
import reRender from "../helpers/reRender";
import Cart from "../components/Cart";//

const BookDetail = {
  render: async (ctgId, idBook) => {
    //get data
    const response = await getBook(ctgId, idBook);
    const Book = response.data;
    return `
    ${`<div>
        <div>ID: ${Book.id}</div>
        <div>Name: ${Book.name}</div>
        <div>Price: ${Book.price}</div>
        <div>Sale Price: ${Book.sale_price}</div>
        <div>Category id: ${Book.categoryId}</div>
        <div>
                    <input type='number' id='cartValue' value='1' min='1' />
                    <button
                        class='btn btn-info'
                        data-id="${Book.id}"
                        data-name="${Book.name}"
                        data-price="${Book.price}"
                        id='btn-add-cart'
                    >Thêm vào giỏ hàng</button>
                </div>
      <br>
      </div>`}
  `;
  },//end render()
  afterRender: () => {
    const btnAddCart = document.querySelector('#btn-add-cart');
    btnAddCart.addEventListener('click', () => {
        const item = {
            id: btnAddCart.dataset.id,
            name: btnAddCart.dataset.name,
            price: btnAddCart.dataset.price,
            value: +document.querySelector('#cartValue').value || 1
        };

        // Lưu trữ vào localStorage: setItem(key, giá trị bắt buộc là 1 chuỗi)
        // 1. Xem giỏ hàng có gì chưa
        const cartItemsString = localStorage.getItem('cart'); // lấy ra giá trị từ key cart
        // Nếu chưa có thì giá trị là null -> []
        const cartItems = JSON.parse(cartItemsString || '[]');
        // 2. Nếu chưa có gì thì push luôn sv vào
        if (!cartItems.length) {
            cartItems.push(item);
        } else {
            // 2.1 Tìm xem có phần tử nào giống cái đang muốn push vào không
            const existItem = cartItems.find((cartItem) => cartItem.id === item.id);
            if (existItem) {
                existItem.value += item.value;
            } else {
                cartItems.push(item);
            }
        }
        // 3. Set giá trị mới cho giỏ hàng
        localStorage.setItem('cart', JSON.stringify(cartItems));
        reRender('#cart', Cart);
    });
}
};//end BôkDetail
export default BookDetail;
