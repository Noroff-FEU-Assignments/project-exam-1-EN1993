
import menuBurger from "./menuBurger.js";

export default function createMenu() {

  const {pathname} = document.location
  const container = document.getElementById("navContainer");


  container.innerHTML =`
  
  
                        <header>
                          <a href="index.html" class="logo"><img src="/images/logo.jpg" alt=" word travel website logo"></a>
                          <label for="humburger-menu"></i>
                            <div class="menu-btn">
                              <div class="menu-btn-burger"></div>
                            </div>
                          </label>
                          <input type="checkbox" id="humburger-menu">
                          
                          <nav>
                              <ul>
                                  <li><a href="index.html" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}"> Home </a></li>
                                  <li><a href="blog.html" class="${pathname === "/blog.html" ? "active" :""}"> Blog </a></li>
                                  <li><a href="about.html" class="${pathname === "/about.html" ? "active" :""}"> About </a></li>
                                  <li><a href="contact.html" class="${pathname === "/contact.html" ? "active" :""}"> Contact</a></li>
                              </ul>
                              <div class="search-point">
                                  <i class="fas fa-search"></i>
                                  <input type="search" id="search" placeholder="search">
                              </div> 
                          </nav>
                        </header>
  
  
  
  
  
  `
  menuBurger();

}