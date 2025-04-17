fetch('https://dev.to/api/articles?username=usmanzahidcode')
    .then(res => res.json())
    .then(posts => {
        const container = document.getElementById('blog-posts');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "flex max-w-xl gap-5 items-center justify-start";

            article.innerHTML = `
                <time class="text-sm text-sky-500 text-left" datetime="${post.published_timestamp}">${post.readable_publish_date}</time>
                <h3 class="text-lg text-left font-semibold leading-snug text-white group-hover:text-sky-400 transition duration-300">
                    <a href="${post.url}" target="_blank" rel="noopener">${post.title}</a>
                </h3>
            `;

            container.appendChild(article);
        });
    })
    .catch(err => {
        console.error("Failed to fetch blog posts", err);
    });