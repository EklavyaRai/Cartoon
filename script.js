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
        { title: "Scooby-Doo (Where Are You! / What's New)", type: "Mystery / Comedy / Mild Horror", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/bc/b2/7a/bcb27a110104460a39ffe07b634b54a5.jpg", videoUrl: "https://www.youtube.com/embed/hTq6nwO4oJU" },
        { title: "Dexter’s Laboratory", type: "Sci-Fi / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/a0/69/a0/a069a01745ec9eb7cb1bf17a5995bd88.jpg", videoUrl: "https://www.youtube.com/embed/2XQd70M3p9E" },
        { title: "The Powerpuff Girls (Original)", type: "Superhero / Action / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/3RpxCsc3/powerpuff-girls.jpg", videoUrl: "https://www.youtube.com/embed/4mmCMUPCNgE" },
        { title: "Johnny Bravo", type: "Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/L4hQ6fG9/johnny-bravo.jpg", videoUrl: "https://www.youtube.com/embed/exe0IEBNE_0" },
        { title: "Courage the Cowardly Dog", type: "Horror / Surreal Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/Fs5342C4/courage.jpg", videoUrl: "https://www.youtube.com/embed/3aG_oKqD-yA" },
        { title: "Ed, Edd n Eddy", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/6pP3T9mB/ed-edd-eddy.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "Cow and Chicken / I Am Weasel", type: "Surreal / Gross-out Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/k47tV1tP/cow-and-chicken.jpg", videoUrl: "https://www.youtube.com/embed/F41s-b3sV1A" },
        { title: "SWAT Kats: The Radical Squadron", type: "Action / Sci-Fi", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/Bv1XmHz2/swat-kats.jpg", videoUrl: "https://www.youtube.com/embed/K_AdxJWFUh4" },
        { title: "Batman: The Animated Series", type: "Superhero / Action / Mystery", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/MGF76k7Z/batman-tas.jpg", videoUrl: "https://www.youtube.com/embed/rrmUk2YUm14" },
        { title: "Popeye the Sailor", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/0jH1K1vM/popeye.jpg", videoUrl: "https://www.youtube.com/embed/d3O7xPvhXzU" },
        { title: "Centurions", type: "Sci-Fi / Action", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/RVTGzD1q/centurions.jpg", videoUrl: "https://www.youtube.com/embed/szC-sR1f25M" },
        { title: "Captain Planet and the Planeteers", type: "Action / Superhero / Educational", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/c4W28vQ2/captain-planet.jpg", videoUrl: "https://www.youtube.com/embed/ogMBLRHJYXU" },
        { title: "Ben 10 (Original, Alien Force, Ultimate Alien)", type: "Sci-Fi / Superhero / Action", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/L8WkS89x/ben10.jpg", videoUrl: "https://www.youtube.com/embed/sA_N3aI6oCo" },
        { title: "Samurai Jack", type: "Action / Martial Arts / Sci-Fi", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/SsdqXvVn/samurai-jack.jpg", videoUrl: "https://www.youtube.com/embed/VSrv_n4tw7w" },
        { title: "Codename: Kids Next Door", type: "Action / Secret Agent / Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/hPByD1Z1/knd.jpg", videoUrl: "https://www.youtube.com/embed/5T8L3A8K_sE" },
        { title: "Foster’s Home for Imaginary Friends", type: "Comedy / Fantasy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/Pq9tT5dM/fosters.jpg", videoUrl: "https://www.youtube.com/embed/G1E98XyH_A8" },
        { title: "The Grim Adventures of Billy & Mandy", type: "Dark Comedy / Fantasy / Horror", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/L5K4hVb8/billy-mandy.jpg", videoUrl: "https://www.youtube.com/embed/p1A4c14k_r4" },
        { title: "Chowder", type: "Surreal Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/D8gN3D8V/chowder.jpg", videoUrl: "https://www.youtube.com/embed/l5921-E3MUI" },
        { title: "The Marvelous Misadventures of Flapjack", type: "Adventure / Dark Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/d1X2mNyD/flapjack.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Teen Titans", type: "Superhero / Action / Drama", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/pT3Y09kZ/teen-titans.jpg", videoUrl: "https://www.youtube.com/embed/yP23g3B9z74" },
        { title: "Justice League / Justice League Unlimited", type: "Superhero / Action", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/V6MvCg2S/justice-league.jpg", videoUrl: "https://www.youtube.com/embed/4g5M_s3T1gI" },
        { title: "Megas XLR", type: "Sci-Fi / Action / Parody", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/2S5k50L6/megas-xlr.jpg", videoUrl: "https://www.youtube.com/embed/0x9uX0m_gC4" },
        { title: "Camp Lazlo", type: "Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/0jC2nL3M/camp-lazlo.jpg", videoUrl: "https://www.youtube.com/embed/K8m83C_y1fM" },
        { title: "Robotboy", type: "Sci-Fi / Action / Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/90p50bHq/robotboy.jpg", videoUrl: "https://www.youtube.com/embed/V6S_x8L3v0M" },
        { title: "My Gym Partner’s a Monkey", type: "School Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/kX47vJqD/gym-partner-monkey.jpg", videoUrl: "https://www.youtube.com/embed/M8C5C8k0rM4" },
        { title: "Generator Rex", type: "Sci-Fi / Action", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/3R9Xz6vM/generator-rex.jpg", videoUrl: "https://www.youtube.com/embed/0G6C_sW_Xp0" },
        { title: "Ben 10: Omniverse", type: "Sci-Fi / Superhero / Action-Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/N0c3qGsb/ben10-omniverse.jpg", videoUrl: "https://www.youtube.com/embed/3A8u2V9gK0M" },
        { title: "Dragon Ball Z / Dragon Ball GT / Super", type: "Anime / Action / Martial Arts", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/2yX8dMTh/dbz.jpg", videoUrl: "https://www.youtube.com/embed/2M-yKvdI_I8" },
        { title: "Pokémon (Original Seasons)", type: "Anime / Fantasy / Adventure", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/Kz4Y6kXp/pokemon.jpg", videoUrl: "https://www.youtube.com/embed/uBYORdr_TY8" },
        { title: "Beyblade (Original / Metal Fusion)", type: "Anime / Action / Sports", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/j5P4kRvy/beyblade.jpg", videoUrl: "https://www.youtube.com/embed/nS4l8eR0L0I" },
        { title: "Naruto", type: "Anime / Action / Ninja Fantasy", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/c4f2s9V9/naruto.jpg", videoUrl: "https://www.youtube.com/embed/j2hiC9ALVlk" },
        { title: "Cardcaptors", type: "Anime / Magical Girl / Fantasy", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/T3RkNzCg/cardcaptors.jpg", videoUrl: "https://www.youtube.com/embed/8K74I_H1A8Y" },
        { title: "Transformers: Armada / Cybertron", type: "Anime / Mecha / Sci-Fi", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/44C5k0hK/transformers-armada.jpg", videoUrl: "https://www.youtube.com/embed/28K7_3kG_mE" },
        { title: "Digimon", type: "Anime / Fantasy / Sci-Fi", era: "Toonami Block / Anime", thumbnail: "https://i.postimg.cc/qM6XkV70/digimon.jpg", videoUrl: "https://www.youtube.com/embed/lA_S3gM209g" },
        { title: "Adventure Time", type: "Fantasy / Adventure / Surreal Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/4ydxptS9/adventure-time.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "Regular Show", type: "Surreal Comedy / Sci-Fi", era: "2010s–Present", thumbnail: "https://i.postimg.cc/pLsK3KqZ/regular-show.jpg", videoUrl: "https://www.youtube.com/embed/y894sR_0X8s" },
        { title: "The Amazing World of Gumball", type: "Surreal / Slapstick Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/7Y0hS8zG/gumball.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Steven Universe", type: "Sci-Fi / Fantasy / Coming-of-Age", era: "2010s–Present", thumbnail: "https://i.postimg.cc/mD8T1mGk/steven-universe.jpg", videoUrl: "https://www.youtube.com/embed/8A1k_3A_9d0" },
        { title: "We Bare Bears", type: "Slice of Life / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/85F1qPnk/we-bare-bears.jpg", videoUrl: "https://www.youtube.com/embed/1kS3Z2K8M9s" },
        { title: "Teen Titans Go!", type: "Superhero / Slapstick Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/vH4kZ2S1/teen-titans-go.jpg", videoUrl: "https://www.youtube.com/embed/4g5M_s3T1gI" },
        { title: "Clarence", type: "Slice of Life / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/6qS3sV0g/clarence.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Uncle Grandpa", type: "Surreal Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/NfsJq6YQ/uncle-grandpa.jpg", videoUrl: "https://www.youtube.com/embed/y894sR_0X8s" },
        { title: "Craig of the Creek", type: "Adventure / Slice of Life", era: "2010s–Present", thumbnail: "https://i.postimg.cc/Y2R9J5gK/craig-creek.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "The Powerpuff Girls (2016 Reboot)", type: "Superhero / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/3RpxCsc3/powerpuff-girls.jpg", videoUrl: "https://www.youtube.com/embed/4mmCMUPCNgE" },
        { title: "Ben 10 (2016 Reboot)", type: "Sci-Fi / Action-Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/L8WkS89x/ben10.jpg", videoUrl: "https://www.youtube.com/embed/sA_N3aI6oCo" },
        { title: "We Baby Bears", type: "Fantasy / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/85F1qPnk/we-bare-bears.jpg", videoUrl: "https://www.youtube.com/embed/1kS3Z2K8M9s" }
    ],
    nickelodeon: [
        { title: "SpongeBob SquarePants (1999–present)", type: "Slapstick / Surreal Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/15/28/31/1528315696535196b07d7bcde8c1eed4.jpg", videoUrl: "https://youtu.be/07QPKPgBL5Y?si=KoNGGClBsQCJviZv" },
        { title: "Rugrats", type: "Slice of Life / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/ce/55/d0/ce55d0c03679abbe10c2747ded8ac13f.jpg", videoUrl: "https://youtu.be/nnS_BTG3hmI?si=AOZHJ7tXr-QxnrJC" },
        { title: "Hey Arnold!", type: "Slice of Life / Drama / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/5e/52/4e/5e524e5d22398cf2589a2c72ca8341f7.jpg", videoUrl: "https://youtu.be/uT63MnVrxJg?si=gx-2O1jLqGz1LPCq" },
        { title: "The Ren & Stimpy Show", type: "Surreal / Gross-out Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/37/c1/c3/37c1c3ab702902305d5016a683c4c73e.jpg", videoUrl: "https://youtu.be/GCwK1spnyMU?si=c9cA_vCHQftQeQi4" },
        { title: "Rocko's Modern Life", type: "Satirical / Surreal Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/df/a0/c3/dfa0c32b74775e87dbfbd6f61ba85f20.jpg", videoUrl: "https://www.youtube.com/embed/k8K2d4P3yE0" },
        { title: "Doug", type: "Coming-of-Age / Slice of Life", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/10/e5/12/10e512fda1a137eb073af065b93d46cf.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "CatDog", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/YqM8T8n1/catdog.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "The Angry Beavers", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/Pq0n2qJm/angry-beavers.jpg", videoUrl: "https://www.youtube.com/embed/k8K2d4P3yE0" },
        { title: "The Wild Thornberrys", type: "Adventure / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/MGF7v5Pz/wild-thornberrys.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "Rocket Power", type: "Sports / Slice of Life", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/3Rpxv2Jk/rocket-power.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "KaBlam!", type: "Sketch Comedy / Variety", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/kG874cPy/kablam.jpg", videoUrl: "https://www.youtube.com/embed/k8K2d4P3yE0" },
        { title: "Avatar: The Last Airbender", type: "Action / High Fantasy / Martial Arts", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/kG7T01Yg/avatar.jpg", videoUrl: "https://www.youtube.com/embed/d1EnW4kn1kg" },
        { title: "The Fairly OddParents", type: "Fantasy / Slapstick Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/J0bZ3qKk/fairly-oddparents.jpg", videoUrl: "https://www.youtube.com/embed/K9qN95F5q14" },
        { title: "Danny Phantom", type: "Superhero / Sci-Fi / Action", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/RVTGzD1q/danny-phantom.jpg", videoUrl: "https://www.youtube.com/embed/74zJkEAn6Yk" },
        { title: "The Adventures of Jimmy Neutron, Boy Genius", type: "Sci-Fi / Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/8P2L6b4R/jimmy-neutron.jpg", videoUrl: "https://www.youtube.com/embed/0G6C_sW_Xp0" },
        { title: "My Life as a Teenage Robot", type: "Sci-Fi / Superhero / Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/44C5k0hK/teenage-robot.jpg", videoUrl: "https://www.youtube.com/embed/V6S_x8L3v0M" },
        { title: "ChalkZone", type: "Fantasy / Adventure", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/c4W2m4L9/chalkzone.jpg", videoUrl: "https://www.youtube.com/embed/K8m83C_y1fM" },
        { title: "Invader Zim", type: "Dark Comedy / Sci-Fi", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/c4W28vQ2/invader-zim.jpg", videoUrl: "https://www.youtube.com/embed/p1A4c14k_r4" },
        { title: "El Tigre: The Adventures of Manny Rivera", type: "Superhero / Action-Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/mD8T7P1M/el-tigre.jpg", videoUrl: "https://www.youtube.com/embed/0x9uX0m_gC4" },
        { title: "T.U.F.F. Puppy", type: "Secret Agent / Slapstick Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/T3RkP3m9/tuff-puppy.jpg", videoUrl: "https://www.youtube.com/embed/5T8L3A8K_sE" },
        { title: "Back at the Barnyard", type: "Surreal / Slapstick Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/s2x0fMvL/barnyard.jpg", videoUrl: "https://www.youtube.com/embed/M8C5C8k0rM4" },
        { title: "The Penguins of Madagascar", type: "Action / Comedy", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/R01gM5Nk/penguins-madagascar.jpg", videoUrl: "https://www.youtube.com/embed/1kS3Z2K8M9s" },
        { title: "Teenage Mutant Ninja Turtles (2003 / 2012)", type: "Action / Superhero / Sci-Fi", era: "2000–2010 Golden Era", thumbnail: "https://i.postimg.cc/2yX8vQ3B/tmnt.jpg", videoUrl: "https://www.youtube.com/embed/yP23g3B9z74" },
        { title: "Blue's Clues", type: "Interactive / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/26L135V1/blues-clues.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "Dora the Explorer", type: "Interactive / Adventure / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/Kz4Y8kM2/dora.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "Go, Diego, Go!", type: "Adventure / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/L8WkS89x/diego.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "The Backyardigans", type: "Musical / Fantasy / Adventure", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/Y2R9J5gK/backyardigans.jpg", videoUrl: "https://www.youtube.com/embed/G1E98XyH_A8" },
        { title: "Wonder Pets!", type: "Musical / Educational / Adventure", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/26L135V1/wonder-pets.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "Team Umizoomi", type: "Interactive / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/8P2L6b4R/team-umizoomi.jpg", videoUrl: "https://www.youtube.com/embed/0G6C_sW_Xp0" },
        { title: "Bubble Guppies", type: "Musical / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/26L135V1/bubble-guppies.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "PAW Patrol", type: "Action / Rescue / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/R01gM5Nk/paw-patrol.jpg", videoUrl: "https://www.youtube.com/embed/1kS3Z2K8M9s" },
        { title: "Blaze and the Monster Machines", type: "STEM / Racing / Educational", era: "Preschool (Nick Jr.)", thumbnail: "https://i.postimg.cc/mD8T7P1M/blaze.jpg", videoUrl: "https://www.youtube.com/embed/0x9uX0m_gC4" },
        { title: "The Legend of Korra", type: "Action / High Fantasy / Steampunk", era: "2010s–Present", thumbnail: "https://i.postimg.cc/kG7T01Yg/legend-of-korra.jpg", videoUrl: "https://www.youtube.com/embed/d1EnW4kn1kg" },
        { title: "The Loud House", type: "Family / Slice of Life / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/7Y0hS8zG/loud-house.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "The Casagrandes", type: "Family / Slice of Life / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/7Y0hS8zG/casagrandes.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Rise of the Teenage Mutant Ninja Turtles", type: "Action / Superhero / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/2yX8vQ3B/rise-tmnt.jpg", videoUrl: "https://www.youtube.com/embed/yP23g3B9z74" },
        { title: "It's Pony", type: "Comedy / Slice of Life", era: "2010s–Present", thumbnail: "https://i.postimg.cc/6qS3sV0g/its-pony.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Middlemost Post", type: "Comedy / Adventure", era: "2010s–Present", thumbnail: "https://i.postimg.cc/Y2R9J5gK/middlemost-post.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "Kamp Koral: SpongeBob's Under Years", type: "Slapstick Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/J0bZ1xKp/kamp-koral.jpg", videoUrl: "https://www.youtube.com/embed/r9L4AseD-aA" },
        { title: "The Patrick Star Show", type: "Surreal / Variety Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/J0bZ1xKp/patrick-star-show.jpg", videoUrl: "https://www.youtube.com/embed/r9L4AseD-aA" },
        { title: "Transformers: EarthSpark", type: "Sci-Fi / Action", era: "2010s–Present", thumbnail: "https://i.postimg.cc/44C5k0hK/earthspark.jpg", videoUrl: "https://www.youtube.com/embed/28K7_3kG_mE" }
    ],
    disney: [
        { title: "DuckTales (Original 1987)", type: "Adventure / Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/3c/31/f0/3c31f0a9ae32087ebe40ce21be506910.jpg", videoUrl: "https://youtu.be/6Apo2Ol4pMI?si=LeyTeTgNFZLwWnqS" },
        { title: "Chip 'n Dale: Rescue Rangers", type: "Mystery / Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/9c/2e/a3/9c2ea33e1990f950980918e7b748d5af.jpg", videoUrl: "https://youtu.be/Uh6Gu3sVoL0?si=KTLlbcn9p1LQxO1l" },
        { title: "TaleSpin", type: "Action / Aviation Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/1200x/b9/37/e7/b937e7d59940abdbe2ed017b3c9c2ca8.jpg", videoUrl: "https://youtu.be/-u7H828HUsc?si=sH0jmvuh1GOWt4bV" },
        { title: "Darkwing Duck", type: "Superhero / Action-Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/46/a9/05/46a9056878974c6d66e191a04b20eee6.jpg", videoUrl: "https://youtu.be/dMAVtSrkIhI?si=p4_2RkdQL-SZh3d-" },
        { title: "Gargoyles", type: "Dark Fantasy / Action / Drama", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/83/3d/8d/833d8d65396c843ef002e119d68863f2.jpg", videoUrl: "https://www.youtube.com/embed/p1A4c14k_r4" },
        { title: "Goof Troop", type: "Family / Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.pinimg.com/736x/f9/4f/60/f94f6029866bc747fad700f736d91549.jpgS", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Aladdin: The Animated Series", type: "Fantasy / Action / Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/c4W28vQ2/aladdin.jpg", videoUrl: "https://www.youtube.com/embed/gP0Neif7Y4E" },
        { title: "The Little Mermaid", type: "Fantasy / Musical / Adventure", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/26L135V1/little-mermaid.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "Timon & Pumbaa", type: "Slapstick Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/L4hQ6fG9/timon-pumbaa.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "Recess", type: "School Comedy / Slice of Life", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/KjhGkbh4/recess.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "Pepper Ann", type: "Coming-of-Age / Slice of Life", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/26L1m14M/pepper-ann.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "Hercules: The Animated Series", type: "Mythology / Action-Comedy", era: "Pre-2000 Classics", thumbnail: "https://i.postimg.cc/c4W28vQ2/hercules.jpg", videoUrl: "https://www.youtube.com/embed/gP0Neif7Y4E" },
        { title: "Phineas and Ferb", type: "Musical / Sci-Fi / Slapstick Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/26L135V1/phineas.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "Kim Possible", type: "Action / Secret Agent / Teen Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/3RpxCsc3/kim-possible.jpg", videoUrl: "https://www.youtube.com/embed/h_D3VFfhvs4" },
        { title: "American Dragon: Jake Long", type: "Urban Fantasy / Superhero", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/pT3Y09kZ/jake-long.jpg", videoUrl: "https://www.youtube.com/embed/yP23g3B9z74" },
        { title: "The Proud Family", type: "Slice of Life / Sitcom Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/26L1m14M/proud-family.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "Lilo & Stitch: The Series", type: "Sci-Fi / Comedy / Adventure", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/Y2R9J5gK/lilo-stitch.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "Brandy & Mr. Whiskers", type: "Slapstick Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/L4hQ6fG9/brandy-whiskers.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "Dave the Barbarian", type: "Fantasy Parody / Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/Y2R9J5gK/dave-barbarian.jpg", videoUrl: "https://www.youtube.com/embed/G1E98XyH_A8" },
        { title: "The Emperor's New School", type: "Comedy / School Life", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/6qS3sV0g/emperors-school.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Kick Buttowski: Suburban Daredevil", type: "Action / Slapstick Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/SsdqXvVn/kick-buttowski.jpg", videoUrl: "https://www.youtube.com/embed/VSrv_n4tw7w" },
        { title: "Kid vs. Kat", type: "Sci-Fi / Slapstick Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/L8WkS89x/kid-vs-kat.jpg", videoUrl: "https://www.youtube.com/embed/sA_N3aI6oCo" },
        { title: "Super Robot Monkey Team Hyperforce Go!", type: "Mecha / Action / Sci-Fi", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/2S5k50L6/srmthfg.jpg", videoUrl: "https://www.youtube.com/embed/0x9uX0m_gC4" },
        { title: "Yin Yang Yo!", type: "Martial Arts / Fantasy / Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/SsdqXvVn/yin-yang-yo.jpg", videoUrl: "https://www.youtube.com/embed/VSrv_n4tw7w" },
        { title: "A.T.O.M. (Alpha Teens On Machines)", type: "Action / Sci-Fi", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/3R9Xz6vM/atom.jpg", videoUrl: "https://www.youtube.com/embed/0G6C_sW_Xp0" },
        { title: "Monster Buster Club", type: "Sci-Fi / Action / Comedy", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/90p50bHq/mbc.jpg", videoUrl: "https://www.youtube.com/embed/V6S_x8L3v0M" },
        { title: "Get Ed", type: "Sci-Fi / Action", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/3R9Xz6vM/get-ed.jpg", videoUrl: "https://www.youtube.com/embed/0G6C_sW_Xp0" },
        { title: "Pucca", type: "Action / Slapstick Comedy / Romance", era: "2000–2010 Era", thumbnail: "https://i.postimg.cc/L4hQ6fG9/pucca.jpg", videoUrl: "https://www.youtube.com/embed/eX3-kR2h-iU" },
        { title: "Gravity Falls", type: "Mystery / Supernatural / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/90X1D7L6/gravity-falls.jpg", videoUrl: "https://www.youtube.com/embed/tctX7B9UUMQ" },
        { title: "The Owl House", type: "Dark Fantasy / Horror-Comedy / Adventure", era: "2010s–Present", thumbnail: "https://i.postimg.cc/Y2R9J5gK/owl-house.jpg", videoUrl: "https://www.youtube.com/embed/G1E98XyH_A8" },
        { title: "Amphibia", type: "Isekai Fantasy / Adventure / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/Y2R9J5gK/amphibia.jpg", videoUrl: "https://www.youtube.com/embed/bhM_I0S3k2k" },
        { title: "Star vs. the Forces of Evil", type: "Magical / Fantasy / Action-Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/J0bZ3qKk/star-vs-evil.jpg", videoUrl: "https://www.youtube.com/embed/K9qN95F5q14" },
        { title: "Wander Over Yonder", type: "Sci-Fi / Musical Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/26L135V1/wander.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "DuckTales (2017 Reboot)", type: "Adventure / Action-Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/c4W28vQ2/ducktales.jpg", videoUrl: "https://www.youtube.com/embed/gP0Neif7Y4E" },
        { title: "Big Hero 6: The Series", type: "Superhero / Sci-Fi / Action", era: "2010s–Present", thumbnail: "https://i.postimg.cc/pT3Y09kZ/big-hero-6.jpg", videoUrl: "https://www.youtube.com/embed/yP23g3B9z74" },
        { title: "The Proud Family: Louder and Prouder", type: "Slice of Life / Sitcom Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/26L1m14M/proud-family.jpg", videoUrl: "https://www.youtube.com/embed/107_8jK0K4A" },
        { title: "Ghost and Molly McGee", type: "Supernatural / Musical Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/26L135V1/molly-mcgee.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "Big City Greens", type: "Slice of Life / Slapstick Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/6qS3sV0g/big-city-greens.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" },
        { title: "Hamster & Gretel", type: "Superhero / Musical Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/26L135V1/hamster-gretel.jpg", videoUrl: "https://www.youtube.com/embed/4p8O2rSgJvg" },
        { title: "Kiff", type: "Musical / Slice of Life / Comedy", era: "2010s–Present", thumbnail: "https://i.postimg.cc/6qS3sV0g/kiff.jpg", videoUrl: "https://www.youtube.com/embed/2_m3LwA8S8k" }
    ]
};

// --- RENDER LOGIC ---

// Helper function to convert standard YouTube links into embed URLs
function formatVideoUrl(url) {
    if (url.includes("youtu.be/")) {
        const videoId = url.split("youtu.be/")[1].split("?")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
}

// Function to generate card HTML
function createCardHtml(item) {
    const badgeText = item.channel || item.era || '';
    const safeTitle = item.title.replace(/'/g, "\\'");
    const embedUrl = formatVideoUrl(item.videoUrl);

    return `
        <div class="card" onclick="openPlayer('${safeTitle}', '${embedUrl}')">
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

// Function to populate all section grids
function renderAllSections() {
    const sections = ['popular', 'cartoon-network', 'nickelodeon', 'disney'];

    sections.forEach(key => {
        const gridElement = document.getElementById(`grid-${key}`);
        if (gridElement && cartoonData[key]) {
            gridElement.innerHTML = cartoonData[key].map(item => createCardHtml(item)).join('');
        }
    });
}

// --- SEARCH HANDLER ---

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const sections = ['popular', 'cartoon-network', 'nickelodeon', 'disney'];

    sections.forEach(key => {
        const gridElement = document.getElementById(`grid-${key}`);
        if (!gridElement || !cartoonData[key]) return;

        const filtered = cartoonData[key].filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.type.toLowerCase().includes(query)
        );

        if (filtered.length > 0) {
            gridElement.innerHTML = filtered.map(item => createCardHtml(item)).join('');
        } else {
            gridElement.innerHTML = `<p class="no-results">No shows found matching "${query}"</p>`;
        }
    });
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

// Automatically render cards when the DOM content loads
document.addEventListener('DOMContentLoaded', renderAllSections);