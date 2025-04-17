fetch('https://dev.to/api/articles?username=usmanzahidcode')
    .then(res => res.json())
    .then(posts => {
        const container = document.getElementById('blog-posts');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "flex items-start gap-4";

            article.innerHTML = `
                <div class="w-24 flex-shrink-0 text-sm text-sky-500 text-right">
                    <time datetime="${post.published_timestamp}">${post.readable_publish_date}</time>
                </div>
                <div class="flex-1">
                    <h3 class="text-base text-left font-semibold leading-snug hover:text-sky-400 transition duration-300">
                        <a href="${post.url}" target="_blank" rel="noopener">${post.title}</a>
                    </h3>
                </div>
            `;

            container.appendChild(article);
        });
    })
    .catch(err => {
        console.error("Failed to fetch blog posts", err);
    });
