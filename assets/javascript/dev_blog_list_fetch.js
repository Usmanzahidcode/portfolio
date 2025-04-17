fetch('https://dev.to/api/articles?username=usmanzahidcode')
    .then(res => res.json())
    .then(posts => {
        const container = document.getElementById('blog-posts');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.className = "flex max-w-xl flex-col items-start justify-between";

            article.innerHTML = `
                    <div class="flex items-center gap-x-4 text-sm text-gray-500">
                        <time datetime="${post.published_timestamp}">${post.readable_publish_date}</time>
                    </div>
                    <div class="group relative">
                        <h3 class="mt-3 text-lg font-semibold leading-snug text-white group-hover:text-sky-400 transition duration-300">
                            <a href="${post.url}" target="_blank" rel="noopener">
                                <span class="absolute inset-0"></span>
                                ${post.title}
                            </a>
                        </h3>
                    </div>
                `;

            container.appendChild(article);
        });
    })
    .catch(err => {
        console.error("Failed to fetch blog posts", err);
    });