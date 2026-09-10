const cartoonData = {
    popular: [
        { 
            title: "Doraemon", 
            type: "Sci-Fi Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/5U2q_e3S9bE"
        },
        { 
            title: "Tom and Jerry", 
            type: "Slapstick Comedy", 
            channel: "Cartoon Network", 
            thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/t0Q2otsqC4I"
        },
        { 
            title: "Shinchan", 
            type: "Slice of Life / Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/8vR4S3z_JdE"
        },
        { 
            title: "Ninja Hattori", 
            type: "Action / Comedy", 
            channel: "Nickelodeon / Disney", 
            thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        { 
            title: "Ben 10 (Original)", 
            type: "Sci-Fi / Action", 
            channel: "Cartoon Network", 
            thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/sA_N3aI6oCo"
        },
        { 
            title: "Pokémon", 
            type: "Anime / Fantasy", 
            channel: "Cartoon Network / Disney", 
            thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/uBYORdr_TY8"
        },
        { 
            title: "SpongeBob SquarePants", 
            type: "Surreal Comedy", 
            channel: "Nickelodeon", 
            thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/r9L4AseD-aA"
        },
        { 
            title: "Phineas and Ferb", 
            type: "Musical / Sci-Fi", 
            channel: "Disney Channel", 
            thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg"
        }
    ],
    "cartoon-network": [
        { 
            title: "Tom and Jerry", 
            type: "Slapstick Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/t0Q2otsqC4I"
        },
        { 
            title: "Dexter’s Laboratory", 
            type: "Sci-Fi / Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/2XQd70M3p9E"
        },
        { 
            title: "The Powerpuff Girls", 
            type: "Superhero / Action / Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/4mmCMUPCNgE"
        },
        { 
            title: "Courage the Cowardly Dog", 
            type: "Horror / Surreal Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/3aG_oKqD-yA"
        },
        { 
            title: "Ben 10", 
            type: "Sci-Fi / Superhero", 
            era: "2000–2010 Golden Era",
            thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/sA_N3aI6oCo"
        },
        { 
            title: "Samurai Jack", 
            type: "Action / Martial Arts", 
            era: "2000–2010 Golden Era",
            thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/VSrv_n4tw7w"
        }
    ],
    nickelodeon: [
        { 
            title: "SpongeBob SquarePants", 
            type: "Slapstick Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/r9L4AseD-aA"
        },
        { 
            title: "Avatar: The Last Airbender", 
            type: "Action / High Fantasy", 
            era: "2000–2010 Golden Era",
            thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/d1EnW4kn1kg"
        },
        { 
            title: "The Fairly OddParents", 
            type: "Fantasy / Slapstick", 
            era: "2000–2010 Golden Era",
            thumbnail: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/K9qN95F5q14"
        },
        { 
            title: "Danny Phantom", 
            type: "Superhero / Sci-Fi", 
            era: "2000–2010 Golden Era",
            thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/74zJkEAn6Yk"
        }
    ],
    disney: [
        { 
            title: "DuckTales", 
            type: "Adventure / Comedy", 
            era: "Pre-2000 Classics",
            thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/gP0Neif7Y4E"
        },
        { 
            title: "Phineas and Ferb", 
            type: "Musical / Sci-Fi", 
            era: "2000–2010 Era",
            thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg"
        },
        { 
            title: "Kim Possible", 
            type: "Action / Secret Agent", 
            era: "2000–2010 Era",
            thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/h_D3VFfhvs4"
        },
        { 
            title: "Gravity Falls", 
            type: "Mystery / Supernatural", 
            era: "2010s–Present",
            thumbnail: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=400&auto=format&fit=crop",
            videoUrl: "https://www.youtube.com/embed/tctX7B9UUMQ"
        }
    ]
};

// Render cards into a specific section grid
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
        card.onclick = () => openPlayer(item.title, item.videoUrl);

        const imgSrc = item.thumbnail || "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop";

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${imgSrc}" alt="${item.title}" loading="lazy">
                <div class="play-overlay">
                    <span>▶</span>
                </div>
            </div>
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

// Search handler
function handleSearch() {
    const query = document.getElementById("searchInput").value;
    renderAllSections(query);
}

// Video Player Modal
function openPlayer(title, videoUrl) {
    document.getElementById("playerTitle").innerText = title;
    
    // Append autoplay parameter
    const autoplayUrl = videoUrl.includes("?") ? `${videoUrl}&autoplay=1` : `${videoUrl}?autoplay=1`;
    document.getElementById("videoPlayer").src = autoplayUrl;
    
    document.getElementById("videoModal").style.display = "flex";
}

function closePlayer() {
    document.getElementById("videoPlayer").src = "";
    document.getElementById("videoModal").style.display = "none";
}

// Initial render
window.onload = () => renderAllSections();