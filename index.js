const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainContainer = document.getElementById("main-container");
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        themeToggle.src = "images/moon.png";
    } else {
        themeToggle.src = "images/sunny.png";
    }
});

renderPosts()

function renderPosts(){
    let postHtml = "";

    for(let i=0; i<posts.length; i++){
        postHtml += `
            <section class="post">
                <div class="user-info">
                    <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s profile pictures">
                    <div class="creator">
                        <p class="larger-font">${posts[i].name}</p>
                        <p class="smaller-font">${posts[i].location}</p>
                    </div>
                </div>
                
                <img class="selfie" src="${posts[i].post}" alt="Post by ${posts[i].username}">
                
                <div class="icons">
                    <img class="icon icon-heart" src="images/icon-heart.png" alt="like">
                    <img class="icon icon-comment" src="images/icon-comment.png" alt="comment">
                    <img class="icon icon-dm" src="images/icon-dm.png" alt="share">
                </div>
                
                <div class="comment-section">
                    <p class="larger-font"><span class="likes">${posts[i].likes}</span> likes</p>
                    <p><span class="commenter larger-font">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>
        `
    }
        mainContainer.insertAdjacentHTML("beforeend", postHtml);
}


mainContainer.addEventListener("click",function(e){
    if(e.target.classList.contains("icon-heart")){

    const post = e.target.closest(".post");
    const likesEl = post.querySelector(".likes");

    let likes = parseInt(likesEl.textContent);

    if(e.target.classList.contains("icon-heart-clicked")){
        e.target.classList.remove("icon-heart-clicked")
        likesEl.textContent = likes - 1;
    }else{
        e.target.classList.add("icon-heart-clicked")
        likesEl.textContent = likes + 1;
    }
  }
})


