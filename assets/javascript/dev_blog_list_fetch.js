fetch('https://dev.to/api/articles?username=usmanzahidcode')
    .then(res => res.json())
    .then(posts => {
        const container = document.getElementById('blog-posts');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "flex items-start space-x-4";

            // Use slug to build internal blog post URL
            const internalUrl = `/pages/blog_post.html?slug=${post.slug}`;

            article.innerHTML = `
                <div class="w-24 flex-shrink-0 text-base text-sky-500 text-right">
                    <time datetime="${post.published_timestamp}">${post.readable_publish_date}</time>
                </div>
                <div class="flex-1">
                    <h3 class="text-base text-left hover:text-sky-500 transition duration-300">
                        <a href="${internalUrl}" target="_blank">${post.title}</a>
                    </h3>
                </div>
            `;

            container.appendChild(article);
        });
    })
    .catch(err => {
        console.error("Failed to fetch blog posts", err);
    });
