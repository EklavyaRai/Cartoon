const cartoonData = {
    popular: [
        { 
            title: "Doraemon", 
            type: "Sci-Fi Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://i.pinimg.com/736x/3b/7d/19/3b7d194a719a6248430ba4dd62c5f5a7.jpg",
            videoUrl: "https://youtu.be/DSQ6j3a8H5Y?si=zS1DhBlDdSrFY79J"
        },
        { 
            title: "Tom and Jerry", 
            type: "Slapstick Comedy", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg",
            videoUrl: "https://www.youtube.com/embed/t0Q2otsqC4I"
        },
        { 
            title: "Shinchan", 
            type: "Slice of Life / Comedy", 
            channel: "Disney (Hungama TV)", 
            thumbnail: "https://i.pinimg.com/736x/0a/5f/07/0a5f073bd75fece31a6e68442f505fc5.jpg",
            videoUrl: "https://youtu.be/eXX-4Jy31cc?si=Jh1syruHUJfQb1Qz"
        },
        { 
            title: "Ninja Hattori", 
            type: "Slice of Life / Comedy", 
            channel: "Nickelodeon / Disney", 
            thumbnail: "https://i.pinimg.com/736x/d5/6a/e3/d56ae300c79ed1a355529ce5c540782a.jpg",
            videoUrl: "https://youtu.be/1RK1b8zGXPI?si=xihNC98SRAOiXonL"
        },
        { 
            title: "Ben 10 (Original)", 
            type: "Sci-Fi / Action", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/1200x/c2/74/c6/c274c6f102b8819d566ed66a8967d1bb.jpg",
            videoUrl: "https://youtu.be/146wAzknjmM?si=gqzT9h_ZrIJSUP-g"
        },
        { 
            title: "Pokémon", 
            type: "Anime / Fantasy", 
            channel: "Cartoon Network / Disney", 
            thumbnail: "https://i.pinimg.com/736x/6f/86/f0/6f86f02638796339f25c01c1e457dcfa.jpg",
            videoUrl: "https://www.youtube.com/embed/uBYORdr_TY8"
        },
        { 
            title: "SpongeBob SquarePants", 
            type: "Surreal Comedy", 
            channel: "Nickelodeon", 
            thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg",
            videoUrl: "https://www.youtube.com/embed/r9L4AseD-aA"
        },
        { 
            title: "Phineas and Ferb", 
            type: "Musical / Sci-Fi", 
            channel: "Disney Channel", 
            thumbnail: "https://i.pinimg.com/1200x/31/8f/09/318f09c1431bf7ad9a758c0442a4f24c.jpg",
            videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg"
        },
        { 
            title: "Dragon Ball Z", 
            type: "Anime / Action", 
            channel: "Cartoon Network", 
            thumbnail: "https://i.pinimg.com/736x/74/79/8b/74798b82e4e8b085eefd60c375f039e0.jpg",
            videoUrl: "https://www.youtube.com/embed/2M-yKvdI_I8"
        }
    ],
    "cartoon-network": [
        { title: "Tom and Jerry", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/30/4f/7e/304f7e6c2594371e06bdd5b20c30bf04.jpg", videoUrl: "https://www.youtube.com/embed/t0Q2otsqC4I" },
        { title: "Looney Tunes / Baby Looney Tunes", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/65/61/03/65610312b411ef9166fb5463440f2906.jpg", videoUrl: "https://youtu.be/U2oliAFLDwU?si=J3K7GOZsK1YE9L6F" },
        { title: "The Flintstones", type: "Sitcom / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/97/a8/f3/97a8f304b62dd2a4f4971eedc45dadc1.jpg", videoUrl: "https://youtu.be/Y5aY2NKTyE4?si=V58Vm_MJ4_clDTg9" },
        { title: "The Jetsons", type: "Sci-Fi / Sitcom Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/e4/c9/b4/e4c9b4149f0c4d84cbbc4e5ef53b7ba8.jpg", videoUrl: "https://youtu.be/9cJICMtMUg4?si=kDTWc3YVSajL7QPv" },
        { title: "Scooby-Doo", type: "Mystery / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/bc/b2/7a/bcb27a110104460a39ffe07b634b54a5.jpg", videoUrl: "https://www.youtube.com/embed/hTq6nwO4oJU" },
        { title: "Dexter’s Laboratory", type: "Sci-Fi / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/a0/69/a0/a069a01745ec9eb7cb1bf17a5995bd88.jpg", videoUrl: "https://www.youtube.com/embed/2XQd70M3p9E" }
    ],
    nickelodeon: [
        { title: "SpongeBob SquarePants", type: "Slapstick / Surreal Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg", videoUrl: "https://youtu.be/07QPKPgBL5Y?si=KoNGGClBsQCJviZv" },
        { title: "Rugrats", type: "Slice of Life / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/ce/55/d0/ce55d0c03679abbe10c2747ded8ac13f.jpg", videoUrl: "https://youtu.be/nnS_BTG3hmI?si=AOZHJ7tXr-QxnrJC" },
        { title: "Hey Arnold!", type: "Slice of Life / Drama", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/5e/52/4e/5e524e5d22398cf2589a2c72ca8341f7.jpg", videoUrl: "https://youtu.be/uT63MnVrxJg?si=gx-2O1jLqGz1LPCq" }
    ],
    disney: [
        { title: "DuckTales", type: "Adventure / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/3c/31/f0/3c31f0a9ae32087ebe40ce21be506910.jpg", videoUrl: "https://youtu.be/6Apo2Ol4pMI?si=LeyTeTgNFZLwWnqS" },
        { title: "Chip 'n Dale", type: "Mystery / Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/9c/2e/a3/9c2ea33e1990f950980918e7b748d5af.jpg", videoUrl: "https://youtu.be/Uh6Gu3sVoL0?si=KTLlbcn9p1LQxO1l" },
        { title: "TaleSpin", type: "Action / Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/b9/37/e7/b937e7d59940abdbe2ed017b3c9c2ca8.jpg", videoUrl: "https://youtu.be/-u7H828HUsc?si=sH0jmvuh1GOWt4bV" }
    ]
};

// --- RENDER LOGIC ---

function formatVideoUrl(url) {
    if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
}

function getAllCartoons() {
    let list = [];
    Object.values(cartoonData).forEach(category => {
        list = list.concat(category);
    });
    return list;
}

function createCardHtml(item) {
    const badgeText = item.channel || item.era || '';
    const safeTitle = item.title.replace(/'/g, "\\'");
    const embedUrl = formatVideoUrl(item.videoUrl);

    return `
        <div class="card" onclick="openShowcase('${safeTitle}')">
            <div class="card-img-wrapper">
                <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/220x220?text=No+Image'">
                <div class="play-overlay">
                    <span>▶</span>
                </div>
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <span class="genre">${item.type}</span>
                ${badgeText ? `<span class="badge">${badgeText}</span>` : ''}
            </div>
        </div>
    `;
}

function renderAllSections() {
    const sections = ['popular', 'cartoon-network', 'nickelodeon', 'disney'];

    sections.forEach(key => {
        const gridElement = document.getElementById(`grid-${key}`);
        if (gridElement && cartoonData[key]) {
            gridElement.innerHTML = cartoonData[key].map(item => createCardHtml(item)).join('');
        }
    });
}

// --- SEARCH SUGGESTIONS DROP-DOWN (Picture 3 behavior) ---

function handleSearch() {
    const input = document.getElementById('searchInput');
    const query = input.value.toLowerCase().trim();
    const dropdown = document.getElementById('searchDropdown');
    const clearBtn = document.getElementById('clearBtn');

    if (query.length > 0) {
        clearBtn.style.display = 'inline';
    } else {
        clearBtn.style.display = 'none';
        dropdown.style.display = 'none';
        return;
    }

    const allCartoons = getAllCartoons();
    const matches = allCartoons.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.type.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        dropdown.innerHTML = matches.slice(0, 6).map(item => {
            const safeTitle = item.title.replace(/'/g, "\\'");
            return `
                <div class="search-dropdown-item" onclick="selectSearchItem('${safeTitle}')">
                    <span class="icon">🔍</span>
                    <span>${item.title}</span>
                </div>
            `;
        }).join('');
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('clearBtn').style.display = 'none';
    document.getElementById('searchDropdown').style.display = 'none';
}

function selectSearchItem(title) {
    document.getElementById('searchDropdown').style.display = 'none';
    openShowcase(title);
}

// Close search dropdown when clicking outside
document.addEventListener('click', function(e) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(e.target)) {
        document.getElementById('searchDropdown').style.display = 'none';
    }
});

// --- SHOWCASE INTERFACE (Picture 1 customized layout) ---

function openShowcase(title) {
    const allCartoons = getAllCartoons();
    const selected = allCartoons.find(c => c.title === title) || allCartoons[0];

    const modal = document.getElementById('showcaseModal');
    const hero = document.getElementById('showcaseHero');
    const heroTitle = document.getElementById('heroTitle');
    const playBtn = document.getElementById('heroPlayBtn');
    const showcaseGrid = document.getElementById('showcaseGrid');

    hero.style.backgroundImage = `url('${selected.thumbnail}')`;
    heroTitle.innerText = selected.title;
    
    const embedUrl = formatVideoUrl(selected.videoUrl);
    const safeTitle = selected.title.replace(/'/g, "\\'");
    playBtn.onclick = function() {
        openPlayer(safeTitle, embedUrl);
    };

    // Render remaining recommendations tray
    const filteredTray = allCartoons.filter(c => c.title !== selected.title);
    showcaseGrid.innerHTML = filteredTray.map(item => createCardHtml(item)).join('');

    modal.style.display = 'block';
}

function closeShowcase() {
    document.getElementById('showcaseModal').style.display = 'none';
}

// --- MODAL PLAYER CONTROLS ---

function openPlayer(title, videoUrl) {
    const modal = document.getElementById('videoModal');
    const playerTitle = document.getElementById('playerTitle');
    const videoPlayer = document.getElementById('videoPlayer');

    if (modal && playerTitle && videoPlayer) {
        playerTitle.innerText = title;
        videoPlayer.src = formatVideoUrl(videoUrl);
        modal.style.display = 'flex';
    }
}

function closePlayer() {
    const modal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    if (modal && videoPlayer) {
        modal.style.display = 'none';
        videoPlayer.src = '';
    }
}

// Close player modal when clicking outside modal content
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closePlayer();
    }
};

document.addEventListener('DOMContentLoaded', renderAllSections);