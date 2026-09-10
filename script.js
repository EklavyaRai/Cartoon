// Updated Cartoon Data Array (10 Popular Cartoons with TV Channels)
const cartoons = [
    {
        title: "Tom & Jerry",
        channel: "Cartoon Network / POGO",
        thumbnail: "https://i.pinimg.com/736x/b3/58/f0/b358f0520d00e199e967203478dbcd41.jpg",
        videoUrl: "https://youtu.be/t0Q2otsqC4I?si=EMTvcxitw7V8kbIp"
    },
    {
        title: "SpongeBob SquarePants",
        channel: "Nickelodeon",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Ben 10",
        channel: "Cartoon Network",
        thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Doraemon",
        channel: "Disney Channel / Hungama TV",
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Shin-chan",
        channel: "Hungama TV",
        thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Pokémon",
        channel: "Hungama TV / Cartoon Network",
        thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Oggy and the Cockroaches",
        channel: "Cartoon Network / Nickelodeon",
        thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Chhota Bheem",
        channel: "POGO",
        thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Motu Patlu",
        channel: "Nickelodeon",
        thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "The Powerpuff Girls",
        channel: "Cartoon Network",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
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

        // Updated card element to show Channel details instead of Genre
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p><strong>Channel:</strong> ${item.channel}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Search Filter Functionality
function filterCartoons() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = cartoons.filter(c => 
        c.title.toLowerCase().includes(query) || 
        c.channel.toLowerCase().includes(query)
    );
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