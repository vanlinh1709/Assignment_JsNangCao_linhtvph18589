const Nav = {
  render: () => {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="#!">Book Shop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Category</a>
                             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="http://localhost:3001/category/1/books">Sience Books</a></li>
                                <li><a class="dropdown-item" href="http://localhost:3001/category/2/books">History Books</a></li>
                                <li><a class="dropdown-item" href="http://localhost:3001/category/3/books">Face Book</a></li>
                                <li><a class="dropdown-item" href="http://localhost:3001/category/4/books">Novel </a></li>

                            </ul>
                        </li>
                    </ul>

                    <form class="d-flex">
                    <a class="nav-link" href="http://localhost:3001/admin" >
                        <span>Admin</span>
                    </a>
                    <a href = "http://localhost:3001/cart-detail">
                    <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill"></span>
                        </button>
                    </a>

                        
                    </form>
                </div>
            </div>
        </nav>
    `;
  }
}

export default Nav;