// Cartoon Database Organized by Network & Popularity
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
        { title: "The Jetsons", type: "Sci-Fi / Sitcom Comedy", era: "Pre-2000 Classics" },
        { title: "Scooby-Doo (Where Are You! / What's New)", type: "Mystery / Comedy / Mild Horror", era: "Pre-2000 Classics" },
        { title: "Dexter’s Laboratory", type: "Sci-Fi / Comedy", era: "Pre-2000 Classics" },
        { title: "The Powerpuff Girls (Original)", type: "Superhero / Action / Comedy", era: "Pre-2000 Classics" },
        { title: "Johnny Bravo", type: "Comedy", era: "Pre-2000 Classics" },
        { title: "Courage the Cowardly Dog", type: "Horror / Surreal Comedy", era: "Pre-2000 Classics" },
        { title: "Ed, Edd n Eddy", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Cow and Chicken / I Am Weasel", type: "Surreal / Gross-out Comedy", era: "Pre-2000 Classics" },
        { title: "SWAT Kats: The Radical Squadron", type: "Action / Sci-Fi", era: "Pre-2000 Classics" },
        { title: "Batman: The Animated Series", type: "Superhero / Action / Mystery", era: "Pre-2000 Classics" },
        { title: "Popeye the Sailor", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Centurions", type: "Sci-Fi / Action", era: "Pre-2000 Classics" },
        { title: "Captain Planet and the Planeteers", type: "Action / Superhero", era: "Pre-2000 Classics" },
        { title: "Ben 10 (Original, Alien Force, Ultimate Alien)", type: "Sci-Fi / Superhero", era: "2000–2010 Golden Era" },
        { title: "Samurai Jack", type: "Action / Martial Arts / Sci-Fi", era: "2000–2010 Golden Era" },
        { title: "Codename: Kids Next Door", type: "Action / Secret Agent", era: "2000–2010 Golden Era" },
        { title: "Foster’s Home for Imaginary Friends", type: "Comedy / Fantasy", era: "2000–2010 Golden Era" },
        { title: "The Grim Adventures of Billy & Mandy", type: "Dark Comedy / Horror", era: "2000–2010 Golden Era" },
        { title: "Chowder", type: "Surreal Comedy", era: "2000–2010 Golden Era" },
        { title: "The Marvelous Misadventures of Flapjack", type: "Adventure / Dark Comedy", era: "2000–2010 Golden Era" },
        { title: "Teen Titans", type: "Superhero / Action / Drama", era: "2000–2010 Golden Era" },
        { title: "Justice League / Justice League Unlimited", type: "Superhero / Action", era: "2000–2010 Golden Era" },
        { title: "Megas XLR", type: "Sci-Fi / Action / Parody", era: "2000–2010 Golden Era" },
        { title: "Camp Lazlo", type: "Comedy", era: "2000–2010 Golden Era" },
        { title: "Robotboy", type: "Sci-Fi / Action / Comedy", era: "2000–2010 Golden Era" },
        { title: "My Gym Partner’s a Monkey", type: "School Comedy", era: "2000–2010 Golden Era" },
        { title: "Generator Rex", type: "Sci-Fi / Action", era: "2000–2010 Golden Era" },
        { title: "Ben 10: Omniverse", type: "Sci-Fi / Superhero", era: "2000–2010 Golden Era" },
        { title: "Dragon Ball Z / Dragon Ball GT / Super", type: "Anime / Action", era: "Toonami Block / Anime" },
        { title: "Pokémon (Original Seasons)", type: "Anime / Fantasy", era: "Toonami Block / Anime" },
        { title: "Beyblade (Original / Metal Fusion)", type: "Anime / Action / Sports", era: "Toonami Block / Anime" },
        { title: "Naruto", type: "Anime / Action / Ninja Fantasy", era: "Toonami Block / Anime" },
        { title: "Cardcaptors", type: "Anime / Magical Girl", era: "Toonami Block / Anime" },
        { title: "Transformers: Armada / Cybertron", type: "Anime / Mecha", era: "Toonami Block / Anime" },
        { title: "Digimon", type: "Anime / Fantasy / Sci-Fi", era: "Toonami Block / Anime" },
        { title: "Adventure Time", type: "Fantasy / Adventure", era: "2010s–Present" },
        { title: "Regular Show", type: "Surreal Comedy / Sci-Fi", era: "2010s–Present" },
        { title: "The Amazing World of Gumball", type: "Surreal / Slapstick Comedy", era: "2010s–Present" },
        { title: "Steven Universe", type: "Sci-Fi / Fantasy", era: "2010s–Present" },
        { title: "We Bare Bears", type: "Slice of Life / Comedy", era: "2010s–Present" },
        { title: "Teen Titans Go!", type: "Superhero / Slapstick", era: "2010s–Present" },
        { title: "Clarence", type: "Slice of Life / Comedy", era: "2010s–Present" },
        { title: "Uncle Grandpa", type: "Surreal Comedy", era: "2010s–Present" },
        { title: "Craig of the Creek", type: "Adventure / Slice of Life", era: "2010s–Present" },
        { title: "The Powerpuff Girls (2016 Reboot)", type: "Superhero / Comedy", era: "2010s–Present" },
        { title: "Ben 10 (2016 Reboot)", type: "Sci-Fi / Action-Comedy", era: "2010s–Present" },
        { title: "We Baby Bears", type: "Fantasy / Comedy", era: "2010s–Present" }
    ],
    nickelodeon: [
        { title: "SpongeBob SquarePants (1999–present)", type: "Slapstick / Surreal Comedy", era: "Pre-2000 Classics" },
        { title: "Rugrats", type: "Slice of Life / Comedy", era: "Pre-2000 Classics" },
        { title: "Hey Arnold!", type: "Slice of Life / Drama / Comedy", era: "Pre-2000 Classics" },
        { title: "The Ren & Stimpy Show", type: "Surreal / Gross-out Comedy", era: "Pre-2000 Classics" },
        { title: "Rocko's Modern Life", type: "Satirical / Surreal Comedy", era: "Pre-2000 Classics" },
        { title: "Doug", type: "Coming-of-Age / Slice of Life", era: "Pre-2000 Classics" },
        { title: "CatDog", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "The Angry Beavers", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "The Wild Thornberrys", type: "Adventure / Comedy", era: "Pre-2000 Classics" },
        { title: "Rocket Power", type: "Sports / Slice of Life", era: "Pre-2000 Classics" },
        { title: "KaBlam!", type: "Sketch Comedy / Variety", era: "Pre-2000 Classics" },
        { title: "Avatar: The Last Airbender", type: "Action / High Fantasy", era: "2000–2010 Golden Era" },
        { title: "The Fairly OddParents", type: "Fantasy / Slapstick Comedy", era: "2000–2010 Golden Era" },
        { title: "Danny Phantom", type: "Superhero / Sci-Fi / Action", era: "2000–2010 Golden Era" },
        { title: "The Adventures of Jimmy Neutron, Boy Genius", type: "Sci-Fi / Comedy", era: "2000–2010 Golden Era" },
        { title: "My Life as a Teenage Robot", type: "Sci-Fi / Superhero", era: "2000–2010 Golden Era" },
        { title: "ChalkZone", type: "Fantasy / Adventure", era: "2000–2010 Golden Era" },
        { title: "Invader Zim", type: "Dark Comedy / Sci-Fi", era: "2000–2010 Golden Era" },
        { title: "El Tigre: The Adventures of Manny Rivera", type: "Superhero / Action-Comedy", era: "2000–2010 Golden Era" },
        { title: "T.U.F.F. Puppy", type: "Secret Agent / Slapstick", era: "2000–2010 Golden Era" },
        { title: "Back at the Barnyard", type: "Surreal / Slapstick Comedy", era: "2000–2010 Golden Era" },
        { title: "The Penguins of Madagascar", type: "Action / Comedy", era: "2000–2010 Golden Era" },
        { title: "Teenage Mutant Ninja Turtles (2003 / 2012)", type: "Action / Superhero", era: "2000–2010 Golden Era" },
        { title: "Blue's Clues", type: "Interactive / Educational", era: "Preschool (Nick Jr.)" },
        { title: "Dora the Explorer", type: "Interactive / Adventure", era: "Preschool (Nick Jr.)" },
        { title: "Go, Diego, Go!", type: "Adventure / Educational", era: "Preschool (Nick Jr.)" },
        { title: "The Backyardigans", type: "Musical / Fantasy", era: "Preschool (Nick Jr.)" },
        { title: "Wonder Pets!", type: "Musical / Educational", era: "Preschool (Nick Jr.)" },
        { title: "Team Umizoomi", type: "Interactive / Educational", era: "Preschool (Nick Jr.)" },
        { title: "Bubble Guppies", type: "Musical / Educational", era: "Preschool (Nick Jr.)" },
        { title: "PAW Patrol", type: "Action / Rescue / Educational", era: "Preschool (Nick Jr.)" },
        { title: "Blaze and the Monster Machines", type: "STEM / Racing", era: "Preschool (Nick Jr.)" },
        { title: "The Legend of Korra", type: "Action / High Fantasy", era: "2010s–Present" },
        { title: "The Loud House", type: "Family / Slice of Life", era: "2010s–Present" },
        { title: "The Casagrandes", type: "Family / Slice of Life", era: "2010s–Present" },
        { title: "Rise of the Teenage Mutant Ninja Turtles", type: "Action / Superhero", era: "2010s–Present" },
        { title: "It's Pony", type: "Comedy / Slice of Life", era: "2010s–Present" },
        { title: "Middlemost Post", type: "Comedy / Adventure", era: "2010s–Present" },
        { title: "Kamp Koral: SpongeBob's Under Years", type: "Slapstick Comedy", era: "2010s–Present" },
        { title: "The Patrick Star Show", type: "Surreal / Variety Comedy", era: "2010s–Present" },
        { title: "Transformers: EarthSpark", type: "Sci-Fi / Action", era: "2010s–Present" }
    ],
    disney: [
        { title: "DuckTales (Original 1987)", type: "Adventure / Comedy", era: "Pre-2000 Classics" },
        { title: "Chip 'n Dale: Rescue Rangers", type: "Mystery / Adventure", era: "Pre-2000 Classics" },
        { title: "TaleSpin", type: "Action / Aviation Adventure", era: "Pre-2000 Classics" },
        { title: "Darkwing Duck", type: "Superhero / Action-Comedy", era: "Pre-2000 Classics" },
        { title: "Gargoyles", type: "Dark Fantasy / Action / Drama", era: "Pre-2000 Classics" },
        { title: "Goof Troop", type: "Family / Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Aladdin: The Animated Series", type: "Fantasy / Action / Adventure", era: "Pre-2000 Classics" },
        { title: "The Little Mermaid", type: "Fantasy / Musical / Adventure", era: "Pre-2000 Classics" },
        { title: "Timon & Pumbaa", type: "Slapstick Comedy", era: "Pre-2000 Classics" },
        { title: "Recess", type: "School Comedy / Slice of Life", era: "Pre-2000 Classics" },
        { title: "Pepper Ann", type: "Coming-of-Age / Slice of Life", era: "Pre-2000 Classics" },
        { title: "Hercules: The Animated Series", type: "Mythology / Action-Comedy", era: "Pre-2000 Classics" },
        { title: "Phineas and Ferb", type: "Musical / Sci-Fi / Slapstick", era: "2000–2010 Era" },
        { title: "Kim Possible", type: "Action / Secret Agent", era: "2000–2010 Era" },
        { title: "American Dragon: Jake Long", type: "Urban Fantasy / Superhero", era: "2000–2010 Era" },
        { title: "The Proud Family", type: "Slice of Life / Sitcom", era: "2000–2010 Era" },
        { title: "Lilo & Stitch: The Series", type: "Sci-Fi / Comedy", era: "2000–2010 Era" },
        { title: "Brandy & Mr. Whiskers", type: "Slapstick Comedy", era: "2000–2010 Era" },
        { title: "Dave the Barbarian", type: "Fantasy Parody / Comedy", era: "2000–2010 Era" },
        { title: "The Emperor's New School", type: "Comedy / School Life", era: "2000–2010 Era" },
        { title: "Kick Buttowski: Suburban Daredevil", type: "Action / Slapstick", era: "2000–2010 Era" },
        { title: "Kid vs. Kat", type: "Sci-Fi / Slapstick Comedy", era: "2000–2010 Era" },
        { title: "Super Robot Monkey Team Hyperforce Go!", type: "Mecha / Action / Sci-Fi", era: "2000–2010 Era" },
        { title: "Yin Yang Yo!", type: "Martial Arts / Fantasy", era: "2000–2010 Era" },
        { title: "A.T.O.M. (Alpha Teens On Machines)", type: "Action / Sci-Fi", era: "2000–2010 Era" },
        { title: "Monster Buster Club", type: "Sci-Fi / Action / Comedy", era: "2000–2010 Era" },
        { title: "Get Ed", type: "Sci-Fi / Action", era: "2000–2010 Era" },
        { title: "Pucca", type: "Action / Slapstick / Romance", era: "2000–2010 Era" },
        { title: "Gravity Falls", type: "Mystery / Supernatural", era: "2010s–Present" },
        { title: "The Owl House", type: "Dark Fantasy / Horror-Comedy", era: "2010s–Present" },
        { title: "Amphibia", type: "Isekai Fantasy / Adventure", era: "2010s–Present" },
        { title: "Star vs. the Forces of Evil", type: "Magical / Fantasy / Action", era: "2010s–Present" },
        { title: "Wander Over Yonder", type: "Sci-Fi / Musical Comedy", era: "2010s–Present" },
        { title: "DuckTales (2017 Reboot)", type: "Adventure / Action-Comedy", era: "2010s–Present" },
        { title: "Big Hero 6: The Series", type: "Superhero / Sci-Fi", era: "2010s–Present" },
        { title: "The Proud Family: Louder and Prouder", type: "Slice of Life / Sitcom", era: "2010s–Present" },
        { title: "Ghost and Molly McGee", type: "Supernatural / Musical Comedy", era: "2010s–Present" },
        { title: "Big City Greens", type: "Slice of Life / Slapstick", era: "2010s–Present" },
        { title: "Hamster & Gretel", type: "Superhero / Musical Comedy", era: "2010s–Present" },
        { title: "Kiff", type: "Musical / Slice of Life", era: "2010s–Present" },
        { title: "Moon Girl and Devil Dinosaur", type: "Superhero / Sci-Fi / Action", era: "2010s–Present" }
    ]
};

let currentTabKey = "popular";

// Render Grid Content based on active tab
function renderTabContent(key, filterText = "") {
    const grid = document.getElementById("cartoonGrid");
    grid.innerHTML = "";

    const list = cartoonData[key] || [];
    const filtered = list.filter(item => 
        item.title.toLowerCase().includes(filterText.toLowerCase()) || 
        item.type.toLowerCase().includes(filterText.toLowerCase()) ||
        (item.era && item.era.toLowerCase().includes(filterText.toLowerCase()))
    );

    if (filtered.length === 0) {
        grid.innerHTML = `<p class="no-results">No cartoons found in this section.</p>`;
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

// Tab Switching Mechanism
function switchTab(event, key) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
    
    currentTabKey = key;
    
    const titles = {
        "popular": "Popular Cartoons of All Time",
        "cartoon-network": "Cartoon Network Shows",
        "nickelodeon": "Nickelodeon Shows",
        "disney": "Disney Channel & XD Shows"
    };
    
    document.getElementById("tabTitle").innerText = titles[key];
    document.getElementById("searchInput").value = "";
    renderTabContent(key);
}

// Live Search Handling
function handleSearch() {
    const query = document.getElementById("searchInput").value;
    renderTabContent(currentTabKey, query);
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

// Initialize default tab on start
window.onload = () => renderTabContent("popular");