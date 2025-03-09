document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('6dh47d-blog-posts-container');
    const username = 'usmanzahidcode';

    // Fetch blog posts from the API
    const fetchPosts = async () => {
        try {
            const response = await fetch(`https://dev.to/api/articles?username=${username}&page=1&per_page=3`);
            if (!response.ok) {
                throw new Error('Dev.to API: Network response was not ok');
            }
            const posts = await response.json();
            renderPosts(posts);
        } catch (error) {
            console.error('Error fetching posts: ', error);
        }
    };

    // Process the cover image URL to remove unnecessary parameters
    const processCoverImageUrl = (url) => {
        return url.replace(/(width=\d+,|height=\d+,|fit=[^,]+,|gravity=[^,]+,)/g, '');
    };

    // Render the fetched posts into the DOM
    const renderPosts = (posts) => {
        posts.forEach(post => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-4 animate-box';

            const postDiv = document.createElement('div');
            postDiv.className = 'fh5co-blog';

            const backgroundImage = post.cover_image ? `background-image: url(${processCoverImageUrl(post.cover_image)});` : '';

            postDiv.innerHTML = `
                <a href="${post.url}" class="blog-bg" style="${backgroundImage}" target="_blank"></a>
                <div class="blog-text">
                    <span class="posted_on">${post.readable_publish_date}</span>
                    <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
                    <p>${post.description || 'No description available.'}</p>
                    <ul class="stuff">
                        <li><i class="icon-heart2"></i>${post.public_reactions_count}</li>
                        <li><i class="icon-pencil3"></i>${post.comments_count}</li>
                        <li><a href="${post.url}" target="_blank">Read More<i class="icon-arrow-right22"></i></a></li>
                    </ul>
                </div>`;

            colDiv.appendChild(postDiv);
            blogPostsContainer.appendChild(colDiv);
        });
    };

    // Initialize content waypoint for animations
    const contentWayPoint = () => {
        let i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
                i++;
                $(this.element).addClass('item-animate');

                setTimeout(() => {
                    $('body .animate-box.item-animate').each(function (k) {
                        const el = $(this);
                        setTimeout(() => {
                            const effect = el.data('animate-effect') || 'fadeInUp';
                            el.addClass(`${effect} animated-fast`);
                            el.removeClass('item-animate');
                        }, k * 100);
                    });
                }, 50);
            }
        }, {offset: '85%'});
    };

    // Fetch posts and initialize animations
    fetchPosts().then(contentWayPoint);
});