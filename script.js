// Complete Cartoon Data Array categorized by Channel and Type
const cartoons = [
    // --- CARTOON NETWORK ---
    { title: "Tom and Jerry", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/t0Q2otsqC4I" },
    { title: "Looney Tunes / Baby Looney Tunes", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Flintstones", type: "Sitcom / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Jetsons", type: "Sci-Fi / Sitcom Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Scooby-Doo", type: "Mystery / Comedy / Mild Horror", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Dexter’s Laboratory", type: "Sci-Fi / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Powerpuff Girls (Original)", type: "Superhero / Action / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Johnny Bravo", type: "Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Courage the Cowardly Dog", type: "Horror / Surreal Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Ed, Edd n Eddy", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Cow and Chicken / I Am Weasel", type: "Surreal / Gross-out Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "SWAT Kats: The Radical Squadron", type: "Action / Sci-Fi", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // --- NICKELODEON ---
    { title: "SpongeBob SquarePants", type: "Slapstick / Surreal Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Rugrats", type: "Slice of Life / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Hey Arnold!", type: "Slice of Life / Drama / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Ren & Stimpy Show", type: "Surreal / Gross-out Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Avatar: The Last Airbender", type: "Action / High Fantasy / Martial Arts", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Fairly OddParents", type: "Fantasy / Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Danny Phantom", type: "Superhero / Sci-Fi / Action", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Jimmy Neutron, Boy Genius", type: "Sci-Fi / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // --- DISNEY ---
    { title: "DuckTales (Original 1987)", type: "Adventure / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Chip 'n Dale: Rescue Rangers", type: "Mystery / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Phineas and Ferb", type: "Musical / Sci-Fi / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kim Possible", type: "Action / Secret Agent / Teen Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Gravity Falls", type: "Mystery / Supernatural / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Owl House", type: "Dark Fantasy / Horror-Comedy / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

// Helper to render cards into a specific container
function renderRow(containerId, items) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = `<p style="padding: 1rem; color: #94a3b8;">No cartoons found.</p>`;
        return;
    }

    items.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openPlayer(item.title, item.videoUrl);

        card.innerHTML = `
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.type}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Load all vertical rows
function loadAllRows() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = cartoons.filter(item => 
        item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query)
    );

    // Row 1: Popular (first 10 items)
    renderRow("popularGrid", filtered.slice(0, 10));

    // Row 2: Cartoon Network
    renderRow("cnGrid", filtered.filter(item => item.channel === "Cartoon Network"));

    // Row 3: Nickelodeon
    renderRow("nickGrid", filtered.filter(item => item.channel === "Nickelodeon"));

    // Row 4: Disney
    renderRow("disneyGrid", filtered.filter(item => item.channel === "Disney"));
}

function filterCartoons() {
    loadAllRows();
}

// Individual Slider Control per Row
function slideRow(elementId, distance) {
    document.getElementById(elementId).scrollBy({ left: distance, behavior: "smooth" });
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
window.onload = () => loadAllRows();