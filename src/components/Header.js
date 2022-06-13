const Header = {
  render: () => {
    return `
    <header class="bg-dark py-3">
            <div class="container px-4 px-lg-5 my-3">
                <div class="text-center text-white">
                  <img  class="img-fluid" alt="Responsive image" src = "https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/197/original/OrdinaryMonsters_Bookshop_2048x600.jpg?1654522949">
                </div>
            </div>
        </header>
    `;
  }, 
  render_Ad: () => {
    return `
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/admin" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-1">Admin</span>
      </a>

      <a href="/admin" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="/"></use></svg>
        <span class="fs-1"></span>
      </a>

      <ul class="nav nav-pills">
      <li class="nav-item px-4 fs-5"><a href="/" class="nav-link">Books shop</a></li>      
      <li class="nav-item fs-5"><a href="/admin/books" class="nav-link " aria-current="page">Books</a></li>
      <li class="nav-item px-4 fs-5"><a href="/admin/categories" class="nav-link">Category</a></li>      
      </ul>    
    </header>
    `;
  }
} 
export default Header;
