import React from 'react'

function BlogPosts() {
    const blogPostsData = [
      {
        imgSrc: "images/blog-posts/coffeeBeans.jpg",
        title: "10 Coffee Recommendations 2021",
        caption: "We're thrilled about our light roast. It was our first coffee we ever roasted...",
        comments: 10,
        views: "25.9K"
      },
      {
        imgSrc: "images/blog-posts/pouringCoffee.jpg",
        title: "12 Health Benefits of Coffee",
        caption: "Coffee has been both praised and mocked for centuries. It has been...",
        comments: 25,
        views: "320K"
      }
    ]
    
    const indColumns = blogPostsData.map(blogPost => (
    <article className="col">
        <div className="blog-img-container">
      <img className="blog-img" src={blogPost.imgSrc} alt=""/>
        <a href="#0">
          <div className="link-box">
          <div className="arrow-container">
            <button type="button" className="oh">  
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 16">
      <path class="stem" d="M5.4995 14.5V0"/>
      <path class="leaf" d="M5.4995 15c-.5-3-2.9-5.6-4.5-6"/>
      <path class="leaf" d="M5.4995 15c.5-3 2.9-5.6 4.5-6"/>
    </svg>
  </button>
          </div>
            </div>
        </a>
          
          </div>
        <div className="blog-info">
        <h3 className="blog-title">{blogPost.title}</h3>
        <p>{blogPost.caption}</p>
        <div className="numbers-and-icons columns">
          <div className="col">
        <img src="images/blog-posts/comments.png" alt="" className="tiny-icon"/>
          <p className="tiny-number">{blogPost.comments}</p>
          </div>
          <div className="col">
        <img src="images/blog-posts/show.png" alt="" className="tiny-icon"/>
          <p className="tiny-number">{blogPost.views}</p>
          </div>
          </div>
          </div>
    </article>
    ))
    
    return (
    <section className="blog-section">
      <h2>Our trending coffee blog posts for this week</h2>
      <div className="columns">
        {indColumns}
      </div>
    </section>
    )
  }

export default BlogPosts