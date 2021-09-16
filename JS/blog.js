const baseUrl ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed';
const blogContainer = document.querySelector(".blog");

async function getBlog(url) {
  const response = await fetch(url);
  const blog = await response.json();
  blog.forEach(function(blogs){
    blogContainer.innerHTML += `
      <a href="blogSpecific.html?id=${blogs.id}">
        <div class='blog'>
          <div class='blog--posts-image'style="background-image:url('${blogs._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
          <span class='featuredmedia-text'><h4>${blogs._embedded["wp:featuredmedia"]["0"].title.rendered}</h4></span>
          
        </div>
      </a>  
    `
  });
}
getBlog(baseUrl);


const viewMoreTitle = document.querySelector(".blog-post-specific-title");

const viewMoreContainer = document.querySelector(".blog-post-specific");

const viewMoreButton = document.querySelector(".view-more");

function viewMoreSection() {
  viewMoreTitle.style.display ="flex";
  viewMoreContainer.style.display ="flex";
}

viewMoreButton.onclick = viewMoreSection;