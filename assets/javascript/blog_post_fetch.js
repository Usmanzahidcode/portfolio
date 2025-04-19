// Extract slug from query string
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

// Elements
const postTitle = document.getElementById('post-title');
const postBody = document.getElementById('post-body');

// Handle missing slug
if (!slug) {
    postTitle.textContent = "Post not found";
    postBody.innerHTML = "<p class='text-red-500'>No blog post specified.</p>";
} else {
    fetch(`https://dev.to/api/articles/usmanzahidcode/${slug}`)
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch post");
            return res.json();
        })
        .then(post => {
            // Populate content
            postTitle.textContent = post.title;
            document.getElementById('post-date').textContent = post.readable_publish_date;
            document.getElementById('post-read-time').textContent = `${post.reading_time_minutes} min read`;
            document.getElementById('post-cover').src = post.cover_image || '';
            postBody.innerHTML = post.body_html;

            // Set page title
            document.title = `${post.title} | Usman Zahid`;

            // Tags
            const tagsContainer = document.getElementById('post-tags');
            post.tags.forEach(tag => {
                const tagElement = document.createElement('span');
                tagElement.textContent = `#${tag}`;
                tagElement.className = 'bg-sky-500 text-sky-100 text-xs px-4 py-2 rounded-full';
                tagsContainer.appendChild(tagElement);
            });

            // Canonical
            const canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = post.canonical_url;
            document.head.appendChild(canonical);

            // Add the visible link
            document.getElementById('canonical-link').href = post.canonical_url;

            // Cleanup code UI junk (Comes from dev.to for maximizing or minimizing the code blocks)
            document.querySelectorAll('.highlight__panel').forEach(panel => panel.remove());
        })
        .catch(err => {
            console.error('Failed to load blog post', err);
            postTitle.textContent = "Error loading post";
            postBody.innerHTML = "<p class='text-red-500'>Something went wrong while loading the post.</p>";
        });
}
