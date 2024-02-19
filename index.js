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

function setValueTo(node, className, value) {
    let el = node.getElementsByClassName(className)[0]
    if(el.tagName == "IMG") {
        el.src = value
    }
    else {
        el.textContent = value
    }
}

function renderPosts() {
    for(let i=0; i < posts.length; i++) {
        let postEl = postTemplate.cloneNode(true)

        keys.forEach(function(key) {
            setValueTo(postEl, `post-${key}`, posts[i][key])
        })
        
        mainEl.appendChild(postEl)
    }
}

const mainEl = document.getElementById("main-element")
const postTemplate = document.getElementsByClassName("post")[0]
mainEl.innerHTML = ""

let keys = Object.keys(posts[0])

renderPosts()