// Complete Cartoon Data Array categorized by Channel and Type
const cartoons = [
    // --- CARTOON NETWORK ---
    // Pre-2000 Classics
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
    { title: "Batman: The Animated Series", type: "Superhero / Action / Mystery", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Popeye the Sailor", type: "Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Centurions", type: "Sci-Fi / Action", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Captain Planet and the Planeteers", type: "Action / Superhero / Educational", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    
    // 2000–2010 Golden Era
    { title: "Ben 10", type: "Sci-Fi / Superhero / Action", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Samurai Jack", type: "Action / Martial Arts / Sci-Fi", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Codename: Kids Next Door", type: "Action / Secret Agent / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Foster’s Home for Imaginary Friends", type: "Comedy / Fantasy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Grim Adventures of Billy & Mandy", type: "Dark Comedy / Fantasy / Horror", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Chowder", type: "Surreal Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Marvelous Misadventures of Flapjack", type: "Adventure / Dark Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Teen Titans", type: "Superhero / Action / Drama", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Justice League / Justice League Unlimited", type: "Superhero / Action", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Megas XLR", type: "Sci-Fi / Action / Parody", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Camp Lazlo", type: "Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Robotboy", type: "Sci-Fi / Action / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "My Gym Partner’s a Monkey", type: "School Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Generator Rex", type: "Sci-Fi / Action", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Ben 10: Omniverse", type: "Sci-Fi / Superhero / Action-Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    
    // Anime on CN
    { title: "Dragon Ball Z / GT / Super", type: "Anime / Action / Martial Arts", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Pokémon", type: "Anime / Fantasy / Adventure", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Beyblade", type: "Anime / Action / Sports", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Naruto", type: "Anime / Action / Ninja Fantasy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Cardcaptors", type: "Anime / Magical Girl / Fantasy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Transformers: Armada / Cybertron", type: "Anime / Mecha / Sci-Fi", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Digimon", type: "Anime / Fantasy / Sci-Fi", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // 2010s–Present
    { title: "Adventure Time", type: "Fantasy / Adventure / Surreal Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Regular Show", type: "Surreal Comedy / Sci-Fi", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Amazing World of Gumball", type: "Surreal / Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Steven Universe", type: "Sci-Fi / Fantasy / Coming-of-Age", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "We Bare Bears", type: "Slice of Life / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Teen Titans Go!", type: "Superhero / Slapstick Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Clarence", type: "Slice of Life / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Uncle Grandpa", type: "Surreal Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Craig of the Creek", type: "Adventure / Slice of Life", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Powerpuff Girls (2016)", type: "Superhero / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Ben 10 (2016 Reboot)", type: "Sci-Fi / Action-Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "We Baby Bears", type: "Fantasy / Comedy", channel: "Cartoon Network", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // --- NICKELODEON ---
    // Pre-2000 Classics
    { title: "SpongeBob SquarePants", type: "Slapstick / Surreal Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Rugrats", type: "Slice of Life / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Hey Arnold!", type: "Slice of Life / Drama / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Ren & Stimpy Show", type: "Surreal / Gross-out Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Rocko's Modern Life", type: "Satirical / Surreal Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Doug", type: "Coming-of-Age / Slice of Life", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "CatDog", type: "Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Angry Beavers", type: "Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Wild Thornberrys", type: "Adventure / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Rocket Power", type: "Sports / Slice of Life", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "KaBlam!", type: "Sketch Comedy / Variety", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // 2000–2010 Golden Era
    { title: "Avatar: The Last Airbender", type: "Action / High Fantasy / Martial Arts", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Fairly OddParents", type: "Fantasy / Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Danny Phantom", type: "Superhero / Sci-Fi / Action", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Jimmy Neutron, Boy Genius", type: "Sci-Fi / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "My Life as a Teenage Robot", type: "Sci-Fi / Superhero / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "ChalkZone", type: "Fantasy / Adventure", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Invader Zim", type: "Dark Comedy / Sci-Fi", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "El Tigre: Manny Rivera", type: "Superhero / Action-Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "T.U.F.F. Puppy", type: "Secret Agent / Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Back at the Barnyard", type: "Surreal / Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Penguins of Madagascar", type: "Action / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Teenage Mutant Ninja Turtles", type: "Action / Superhero / Sci-Fi", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // Preschool (Nick Jr.)
    { title: "Blue's Clues", type: "Interactive / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Dora the Explorer", type: "Interactive / Adventure / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Go, Diego, Go!", type: "Adventure / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Backyardigans", type: "Musical / Fantasy / Adventure", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Wonder Pets!", type: "Musical / Educational / Adventure", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Team Umizoomi", type: "Interactive / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Bubble Guppies", type: "Musical / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "PAW Patrol", type: "Action / Rescue / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Blaze & The Monster Machines", type: "STEM / Racing / Educational", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // 2010s–Present
    { title: "The Legend of Korra", type: "Action / High Fantasy / Steampunk", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Loud House", type: "Family / Slice of Life / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Casagrandes", type: "Family / Slice of Life / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Rise of the TMNT", type: "Action / Superhero / Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "It's Pony", type: "Comedy / Slice of Life", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Middlemost Post", type: "Comedy / Adventure", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kamp Koral: SpongeBob", type: "Slapstick Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Patrick Star Show", type: "Surreal / Variety Comedy", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Transformers: EarthSpark", type: "Sci-Fi / Action", channel: "Nickelodeon", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // --- DISNEY ---
    // Pre-2000 Classics
    { title: "DuckTales (Original 1987)", type: "Adventure / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Chip 'n Dale: Rescue Rangers", type: "Mystery / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "TaleSpin", type: "Action / Aviation Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Darkwing Duck", type: "Superhero / Action-Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Gargoyles", type: "Dark Fantasy / Action / Drama", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Goof Troop", type: "Family / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Aladdin: The Animated Series", type: "Fantasy / Action / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Little Mermaid", type: "Fantasy / Musical / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Timon & Pumbaa", type: "Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Recess", type: "School Comedy / Slice of Life", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Pepper Ann", type: "Coming-of-Age / Slice of Life", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Hercules: The Animated Series", type: "Mythology / Action-Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // 2000–2010 (Toon Disney, Jetix & Early Disney XD)
    { title: "Phineas and Ferb", type: "Musical / Sci-Fi / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kim Possible", type: "Action / Secret Agent / Teen Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "American Dragon: Jake Long", type: "Urban Fantasy / Superhero", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Proud Family", type: "Slice of Life / Sitcom Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Lilo & Stitch: The Series", type: "Sci-Fi / Comedy / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Brandy & Mr. Whiskers", type: "Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Dave the Barbarian", type: "Fantasy Parody / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Emperor's New School", type: "Comedy / School Life", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kick Buttowski: Suburban Daredevil", type: "Action / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kid vs. Kat", type: "Sci-Fi / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Super Robot Monkey Team Hyperforce Go!", type: "Mecha / Action / Sci-Fi", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Yin Yang Yo!", type: "Martial Arts / Fantasy / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "A.T.O.M. (Alpha Teens On Machines)", type: "Action / Sci-Fi", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Monster Buster Club", type: "Sci-Fi / Action / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Get Ed", type: "Sci-Fi / Action", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Pucca", type: "Action / Slapstick Comedy / Romance", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },

    // 2010s–Present
    { title: "Gravity Falls", type: "Mystery / Supernatural / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Owl House", type: "Dark Fantasy / Horror-Comedy / Adventure", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Amphibia", type: "Isekai Fantasy / Adventure / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Star vs. the Forces of Evil", type: "Magical / Fantasy / Action-Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Wander Over Yonder", type: "Sci-Fi / Musical Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "DuckTales (2017 Reboot)", type: "Adventure / Action-Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Big Hero 6: The Series", type: "Superhero / Sci-Fi / Action", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Proud Family: Louder and Prouder", type: "Slice of Life / Sitcom Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "The Ghost and Molly McGee", type: "Supernatural / Musical Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Big City Greens", type: "Slice of Life / Slapstick Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Hamster & Gretel", type: "Superhero / Musical Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Kiff", type: "Musical / Slice of Life / Comedy", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Moon Girl and Devil Dinosaur", type: "Superhero / Sci-Fi / Action", channel: "Disney", thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
];

let selectedChannel = "All";

// Render Cartoon Cards
function loadCartoons(data) {
    const grid = document.getElementById("cartoonGrid");
    grid.innerHTML = "";

    if (data.length === 0) {
        grid.innerHTML = `<p style="padding: 1rem; color: #94a3b8;">No cartoons found matching your criteria.</p>`;
        return;
    }

    data.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => openPlayer(item.title, item.videoUrl);

        // Displays ONLY the cartoon title and its type/genre (no channel label)
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

// Channel Filter Handler
function filterByChannel(channelName, buttonElement) {
    selectedChannel = channelName;

    // Active button styling
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    if (buttonElement) {
        buttonElement.classList.add("active");
    }

    // Update title
    const titleElement = document.getElementById("sectionTitle");
    titleElement.innerText = channelName === "All" ? "Popular Cartoons of All Time" : `${channelName} Cartoons`;

    applyFilters();
}

// Unified Filter Logic
function applyFilters() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = cartoons.filter(item => {
        const matchesChannel = selectedChannel === "All" || item.channel === selectedChannel;
        const matchesSearch = item.title.toLowerCase().includes(query) || item.type.toLowerCase().includes(query);
        return matchesChannel && matchesSearch;
    });

    loadCartoons(filtered);
}

function filterCartoons() {
    applyFilters();
}

// Slider Controls
function slideLeft() {
    document.getElementById("cartoonGrid").scrollBy({ left: -300, behavior: "smooth" });
}

function slideRight() {
    document.getElementById("cartoonGrid").scrollBy({ left: 300, behavior: "smooth" });
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