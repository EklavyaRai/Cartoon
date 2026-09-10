// Cartoon Data Array
const cartoons = [
    {
        title: "Spider-Man Animated",
        genre: "Action / Superhero",
        thumbnail: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Tom & Jerry",
        genre: "Comedy / Classic",
        thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Batman: The Animated Series",
        genre: "Action / Mystery",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "SpongeBob SquarePants",
        genre: "Comedy / Family",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
];

// Function to Render Cards
function loadCartoons(data) {
    const grid = document.getElementById("cartoonGrid");
    grid.innerHTML = "";

    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openPlayer(item.title, item.videoUrl);

        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.genre}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Filter Functionality
function filterCartoons() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = cartoons.filter(c => c.title.toLowerCase().includes(query));
    loadCartoons(filtered);
}

// Modal Player Controls
function openPlayer(title, url) {
    document.getElementById("playerTitle").innerText = title;
    document.getElementById("videoPlayer").src = url + "?autoplay=1";
    document.getElementById("videoModal").style.display = "flex";
}

function closePlayer() {
    document.getElementById("videoPlayer").src = "";
    document.getElementById("videoModal").style.display = "none";
}

// Initial Load
window.onload = () => loadCartoons(cartoons);
