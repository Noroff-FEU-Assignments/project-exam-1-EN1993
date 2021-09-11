const baseUrl ='https://pe.enlive.one/wp-json/wp/v2/posts?_embed';
const blogContainer = document.querySelector(".blog");

async function getBlog(url) {
  const response = await fetch(url);
  const blog = await response.json();
  blog.forEach(function(blogs){
    console.log(blog);
    blogContainer.innerHTML += `
    <a "href=bloSpecific.html?id=${blogs.id}">
      <div class='blog--posts'>
        <div class='blog--posts-image'style="background-image:url('${blog.content[0].object.rendered}}')"></div>

      </div>

    </a>
    `
  });
}
getBlog(baseUrl);