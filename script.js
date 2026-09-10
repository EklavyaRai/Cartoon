const cartoonData = {
    popular: [
        { title: "Doraemon", type: "Sci-Fi Comedy", channel: "Disney (Hungama TV)", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" },
        { title: "Tom and Jerry", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop" },
        { title: "Shinchan", type: "Slice of Life / Comedy", channel: "Disney (Hungama TV)", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop" },
        { title: "Ninja Hattori", type: "Action / Comedy", channel: "Nickelodeon / Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop" },
        { title: "Ben 10 (Original & Alien Force)", type: "Sci-Fi / Action", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop" },
        { title: "Pokémon", type: "Anime / Fantasy", channel: "Cartoon Network / Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop" },
        { title: "SpongeBob SquarePants", type: "Surreal Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop" },
        { title: "Phineas and Ferb", type: "Musical / Sci-Fi", channel: "Disney Channel", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop" },
        { title: "Oggy and the Cockroaches", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop" },
        { title: "Dragon Ball Z", type: "Anime / Martial Arts", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop" }
    ],
    "cartoon-network": [
        { title: "Tom and Jerry", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Looney Tunes / Baby Looney Tunes", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "The Flintstones", type: "Sitcom / Comedy", era: "Pre-2000 Classics" },
        { title: "Dexter’s Laboratory", type: "Sci-Fi / Comedy", era: "Pre-2000 Classics" },
        { title: "The Powerpuff Girls", type: "Superhero / Action / Comedy", era: "Pre-2000 Classics" },
        { title: "Johnny Bravo", type: "Comedy", era: "Pre-2000 Classics" },
        { title: "Courage the Cowardly Dog", type: "Horror / Surreal Comedy", era: "Pre-2000 Classics" },
        { title: "Ben 10", type: "Sci-Fi / Superhero", era: "2000–2010 Golden Era" },
        { title: "Samurai Jack", type: "Action / Martial Arts / Sci-Fi", era: "2000–2010 Golden Era" },
        { title: "Codename: Kids Next Door", type: "Action / Secret Agent", era: "2000–2010 Golden Era" },
        { title: "Adventure Time", type: "Fantasy / Adventure", era: "2010s–Present" },
        { title: "Regular Show", type: "Surreal Comedy / Sci-Fi", era: "2010s–Present" }
    ],
    nickelodeon: [
        { title: "SpongeBob SquarePants", type: "Slapstick / Surreal Comedy", era: "Pre-2000 Classics" },
        { title: "Hey Arnold!", type: "Slice of Life / Drama / Comedy", era: "Pre-2000 Classics" },
        { title: "CatDog", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Avatar: The Last Airbender", type: "Action / High Fantasy", era: "2000–2010 Golden Era" },
        { title: "The Fairly OddParents", type: "Fantasy / Slapstick Comedy", era: "2000–2010 Golden Era" },
        { title: "Danny Phantom", type: "Superhero / Sci-Fi / Action", era: "2000–2010 Golden Era" },
        { title: "The Adventures of Jimmy Neutron", type: "Sci-Fi / Comedy", era: "2000–2010 Golden Era" },
        { title: "PAW Patrol", type: "Action / Rescue / Educational", era: "Preschool (Nick Jr.)" },
        { title: "The Loud House", type: "Family / Slice of Life", era: "2010s–Present" }
    ],
    disney: [
        { title: "DuckTales", type: "Adventure / Comedy", era: "Pre-2000 Classics" },
        { title: "Recess", type: "School Comedy / Slice of Life", era: "Pre-2000 Classics" },
        { title: "Phineas and Ferb", type: "Musical / Sci-Fi / Slapstick", era: "2000–2010 Era" },
        { title: "Kim Possible", type: "Action / Secret Agent", era: "2000–2010 Era" },
        { title: "Gravity Falls", type: "Mystery / Supernatural", era: "2010s–Present" },
        { title: "The Owl House", type: "Dark Fantasy / Horror-Comedy", era: "2010s–Present" }
    ]
};

// Render cards into a specific section's grid
function renderSection(categoryKey, containerId, filterText = "") {
    const grid = document.getElementById(containerId);
    grid.innerHTML = "";

    const list = cartoonData[categoryKey] || [];
    const filtered = list.filter(item => 
        item.title.toLowerCase().includes(filterText.toLowerCase()) || 
        item.type.toLowerCase().includes(filterText.toLowerCase()) ||
        (item.era && item.era.toLowerCase().includes(filterText.toLowerCase()))
    );

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-results">No cartoons found matching your search.</p>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openPlayer(item.title);

        const imgSrc = item.thumbnail || "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop";

        card.innerHTML = `
            <img src="${imgSrc}" alt="${item.title}" loading="lazy">
            <div class="card-info">
                <h3>${item.title}</h3>
                <p class="genre">${item.type}</p>
                <span class="badge">${item.era || item.channel}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Render all sections on load
function renderAllSections(filterText = "") {
    renderSection("popular", "grid-popular", filterText);
    renderSection("cartoon-network", "grid-cartoon-network", filterText);
    renderSection("nickelodeon", "grid-nickelodeon", filterText);
    renderSection("disney", "grid-disney", filterText);
}

// Search bar filters content across all sections in real-time
function handleSearch() {
    const query = document.getElementById("searchInput").value;
    renderAllSections(query);
}

// Video Player Modal
function openPlayer(title) {
    document.getElementById("playerTitle").innerText = title;
    document.getElementById("videoPlayer").src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
    document.getElementById("videoModal").style.display = "flex";
}

function closePlayer() {
    document.getElementById("videoPlayer").src = "";
    document.getElementById("videoModal").style.display = "none";
}

// Initial render
window.onload = () => renderAllSections();