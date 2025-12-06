const viewmoreBtn = document.getElementById('view-more')
const viewMore = document.getElementById('view-more-blogs')
const humburger = document.getElementById('humburger')

document.addEventListener('click',function(e){

  if (e.target.dataset.btn === 'view'){
    viewMore.innerHTML += 
                `<article class="blog">
                    <a>
                        <img class="blog-img" src="images/7.png" alt="Laptop on a desk showing a quote on the screen that reads “I design and develop experiences that make people’s lives simple.”">
                        <p class="blog-date">JULY 23, 2022 (current date)</p>
                        <h2>Blog seven</h2>
                        <p class="blog-p">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                    </a>
                </article>

                <article class="blog">
                    <a>
                        <img class="blog-img" src="images/5.png" alt="Laptop on a desk showing a quote on the screen that reads “I design and develop experiences that make people’s lives simple.”">
                        <p class="blog-date">JULY 23, 2022 (current date)</p>
                        <h2>Blog eight</h2>
                        <p class="blog-p">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                    </a>
                </article>

                <article class="blog">
                    <a>
                        <img class="blog-img" src="images/6.png" alt="Laptop on a desk showing a quote on the screen that reads “I design and develop experiences that make people’s lives simple.”">
                        <p class="blog-date">JULY 23, 2022 (current date)</p>
                        <h2>Blog nine</h2>
                        <p class="blog-p">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                    </a>
                </article> `
  } else if (e.target.dataset.btn === 'humburger'){
    humburger.classList.toggle('open')
  }     
})