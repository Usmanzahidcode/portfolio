// Fetches the post details through slug provided in the url params.

// Extract slug from query string
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

// If slug exists, fetch the post
if (slug) {
    fetch(`https://dev.to/api/articles/usmanzahidcode/${slug}`)
        .then(res => res.json())
        .then(post => {
            console.log(post);
            document.getElementById('post-title').textContent = post.title;
            document.getElementById('post-date').textContent = new Date(post.published_timestamp).toDateString();
            document.getElementById('post-cover').src = post.cover_image || '';
            document.getElementById('post-body').innerHTML = post.body_html; // safe if using Dev.to API
        })
        .catch(err => {
            console.error('Failed to load blog post', err);
        });
}
