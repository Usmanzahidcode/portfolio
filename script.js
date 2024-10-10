document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('6dh47d-blog-posts-container');
    const username = 'usmanzahidcode';

    const fetchPosts = async () => {
        try {
            const response = await fetch(`https://dev.to/api/articles?username=${username}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const posts = await response.json();

            renderPosts(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const processCoverImageUrl = (url) => {
        return url.replace(/(width=\d+,|height=\d+,|fit=[^,]+,|gravity=[^,]+,)/g, '');
    };

    const renderPosts = (posts) => {
        posts.forEach(post => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4';

            const postDiv = document.createElement('div');
            postDiv.className = 'fh5co-blog animate-box';

            const backgroundImage = post.cover_image ? `background-image: url(${processCoverImageUrl(post.cover_image)});` : '';

            postDiv.innerHTML = `
                <a href="${post.url}" class="blog-bg" style="${backgroundImage}"></a>
                <div class="blog-text">
                    <span class="posted_on">${post.readable_publish_date}</span>
                    <h3><a href="${post.url}">${post.title}</a></h3>
                    <p>${post.description || 'No description available.'}</p>
                    <ul class="stuff">
                        <li><i class="icon-heart2"></i>${post.public_reactions_count}</li>
                        <li><i class="icon-eye2"></i>${post.comments_count}</li>
                        <li><a href="${post.url}">Read More<i class="icon-arrow-right22"></i></a></li>
                    </ul>
                </div>`;

            colDiv.appendChild(postDiv);
            blogPostsContainer.appendChild(colDiv);
        });
    };

    fetchPosts();
});