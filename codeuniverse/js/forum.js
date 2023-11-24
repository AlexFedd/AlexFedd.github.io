const upVotes = document.querySelectorAll('.upvote')
const downVotes = document.querySelectorAll('.downvote')
const posts = document.querySelectorAll('.post');

posts.forEach(post => {
    post.addEventListener('click', e => {
        if(e.target === post.querySelector('.upvote')) {
            post.querySelector('.post__votes-count').innerHTML = Number(post.querySelector('.post__votes-count').innerHTML) + 1
        } else 
        if(e.target === post.querySelector('.downvote')) {
            post.querySelector('.post__votes-count').innerHTML = Number(post.querySelector('.post__votes-count').innerHTML) - 1
        }
    })
})