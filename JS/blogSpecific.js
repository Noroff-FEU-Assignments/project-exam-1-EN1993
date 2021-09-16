
const querystring = document.location.search;
const parms = new URLSearchParams(querystring);
const id = parms.get("id");


const url = "https://pe.enlive.one/wp-json/wp/v2/posts?_embed/30";

const blogSpecificContainer = document.querySelector(".blog-specific");

async function blogSpecific() {
  const response = await fetch(url);
  const specific = await response.json();
  
  blogSpecificContainer.innerHTML += `
  
    <div>
        
      <div class='blog--specific-image'style="background-image:url('${specific._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
      <span class='featuredmedia-specific-text'><h4>${specific._embedded["wp:featuredmedia"]["0"].title.rendered}</h4></span> 
        
    </div>
  
  
  
  `
}
blogSpecific();