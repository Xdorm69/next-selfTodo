import { TodoType } from "@/components/AllTodos";

export const DEMO_TODOS: TodoType[] = [
  {
    id: "demo1",
    title: "Learn Next.js",
    description: "Study Next.js fundamentals",
    status: "pending",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "demo2",
    title: "Build a Todo App",
    description: "Create a full-stack todo application",
    status: "completed",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "demo3",
    title: "Deploy to Vercel",
    description: "Deploy the application to Vercel",
    status: "pending",
    userId: "demo-user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
export type GAME_TEXT_TYPE = {
  title: string;
  yt?: string;
  type: string;
  genres?: string[];
  description: string;
  from?: string;
  traits?: string[];
  bg?: string;
};

export const GAME_TEXT: GAME_TEXT_TYPE[] = [
  {
    title: "Vinland Saga",
    bg: "bg-[#C4B1A895]",
    type: "anime",
    yt: "https://www.youtube.com/embed/f7eM4vFBUpk?autoplay=1&mute=1&controls=1&loop=1&playlist=f7eM4vFBUpk",
    genres: ["Action", "Adventure", "Drama", "Historical"],
    description:
      "Vinland Saga is a historical anime that follows Thorfinn, a young Viking warrior seeking revenge against Askeladd, the man who killed his father. Set during the height of the Viking era, the series delves into themes of revenge, honor, and the true meaning of a warrior's life. As Thorfinn becomes entangled in the politics and battles of the time, he grapples with his own morals and the path he has chosen. The anime is renowned for its intense action sequences, deep character development, and exploration of historical events and figures.",
  },
  {
    title: "Red Dead Redemption 2",
    type: "game",
    yt: "https://www.youtube.com/embed/_7_1Jym4550?autoplay=1&mute=1&controls=1&loop=1&playlist=_7_1Jym4550",
    bg: "bg-[#FFFFB095]",
    genres: ["Action", "Adventure", "Western"],
    description:
      "Red Dead Redemption 2 is an action-adventure game set in 1899, following Arthur Morgan, a member of the Van der Linde gang. As the Wild West era wanes, Arthur must navigate the challenges of loyalty, survival, and morality. The game offers a vast open world, allowing players to engage in various activities like hunting, horseback riding, and interacting with diverse characters. Its rich storytelling, detailed environments, and complex characters have earned it critical acclaim, making it a standout title in the gaming world.",
  },
  {
    title: "Bunny Girl Senpai",
    type: "anime",
    yt: "https://www.youtube.com/embed/IrZNsbQv7_A?autoplay=1&mute=1&controls=1&loop=1&playlist=IrZNsbQv7_A",
    bg: "bg-[#C62BFE95]",
    genres: ["Romance", "Supernatural", "Drama"],
    description:
      "This anime centers on Sakuta Azusagawa, a high school student who encounters various girls afflicted by 'Adolescence Syndrome,' a mysterious phenomenon linked to their emotional states. The story begins with Sakuta meeting Mai Sakurajima, a famous actress who becomes invisible to others. As he helps her and other girls overcome their challenges, the series delves into themes of identity, mental health, and the complexities of adolescence. Combining supernatural elements with heartfelt drama, the anime offers a unique and thought-provoking narrative.",
  },
  {
    title: "Portgas D. Ace",
    type: "character",
    from: "One Piece",
    yt: "https://www.youtube.com/embed/qKp333R3lDc?autoplay=1&mute=1&controls=1&loop=1&playlist=qKp333R3lDc",
    bg: "bg-[#FE462695]",
    traits: ["Fire powers", "Brave", "Protective"],
    description:
      "Portgas D. Ace, also known as 'Fire Fist Ace,' is the adopted brother of Monkey D. Luffy and the son of Gol D. Roger. Possessing the Flame-Flame Fruit, he can create and control fire. Ace is known for his strong sense of justice, loyalty to his friends, and fearless nature. As the commander of the Whitebeard Pirates' second division, he plays a significant role in the series, especially during the Marineford War arc. His character embodies themes of brotherhood, sacrifice, and the pursuit of freedom.",
  },
  {
    title: "Zenitsu Agatsuma",
    type: "character",
    yt: "https://www.youtube.com/embed/Ji7NxxG63kA?autoplay=1&mute=1&controls=1&loop=1&playlist=Ji7NxxG63kA",
    from: "Demon Slayer",
    bg: "bg-[#DBB02695]",
    traits: ["Lightning powers", "Cowardly but strong", "Loyal"],
    description:
      "Zenitsu Agatsuma is a Demon Slayer known for his cowardly demeanor and low self-esteem. Despite his fears, he possesses incredible strength and speed when unconscious, utilizing the Thunder Breathing technique. His character provides comic relief while also showcasing deep emotional growth throughout the series. Zenitsu's journey from a fearful boy to a courageous warrior highlights themes of self-discovery, bravery, and the importance of inner strength.",
  },
  {
    title: "Wind Breaker",
    type: "anime",
    bg: "bg-[#0F3B2695]",
    yt: "https://www.youtube.com/embed/RdEHQCpKNFg?autoplay=1&mute=1&controls=1&loop=1&playlist=RdEHQCpKNFg",
    genres: ["Action", "School", "Delinquent"],
    description:
      "Wind Breaker follows Haruka Sakura, a high school student who transfers to Furin High, a school notorious for its delinquents. However, instead of engaging in senseless fights, the students protect their town from harm. Haruka, seeking strength and purpose, becomes involved with the school's unique culture. The series combines intense action with themes of friendship, redemption, and the true meaning of strength, offering a fresh take on the delinquent genre.",
  },
  {
    title: "Itachi Uchiha",
    type: "character",
    from: "Naruto",
    yt: "https://www.youtube.com/embed/BNlhLwDyPT8?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    bg: "bg-[#07121895]",
    traits: ["Genius", "Strong", "Loyal", "Cold"],
    description:
      "Itachi Uchiha is a former ninja of the Hidden Leaf Village and the older brother of Sasuke Uchiha. He is known for his exceptional intelligence, combat prowess, and complex personality. Despite his cold exterior, he is fiercely loyal to his village and will stop at nothing to protect it. His character embodies themes of sacrifice, loyalty, and the blurred lines between good and evil.",
  },
  {
    title: "Solo Leveling",
    type: "anime",
    yt: "https://www.youtube.com/watch?v=-liwWqWHGfw?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    bg: "bg-[#E6A72395]",
    genres: ["Action", "Fantasy", "Adventure"],
    description:
      "Solo Leveling follows Sung Jin-Woo, the weakest hunter in a world where portals connect to dangerous dungeons. After a near-death experience, he gains the unique ability to level up without limit. As he grows stronger, he uncovers secrets about the dungeons and his own powers. The series combines thrilling battles with a compelling narrative, exploring themes of perseverance, power, and the unknown.",
  },
  {
    title: "Roronoa Zoro",
    type: "character",
    bg: "bg-[#4BB97295]",
    from: "One Piece",
    yt: "https://www.youtube.com/watch?v=drFBEq-QGyA?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    traits: ["Swordsman", "Loyal", "Strong"],
    description:
      "Roronoa Zoro is the swordsman of the Straw Hat Pirates, known for his three-sword fighting style and unwavering loyalty to Captain Luffy. Aspiring to become the world's greatest swordsman, Zoro trains relentlessly and faces formidable opponents. Despite his serious demeanor, he often provides comic relief due to his poor sense of direction. His character embodies themes of dedication, honor, and the pursuit of one's dreams.",
  },
  {
    title: "Solo Leveling: Ragnarok",
    type: "manhwa",
    yt: "https://www.youtube.com/watch?v=chYD0mO07GU?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    bg: "bg-[#65233095]",
    genres: ["Action", "Fantasy", "Adventure"],
    description:
      "Solo Leveling: Ragnarok is a sequel to the original Solo Leveling series, focusing on Sung Su-Ho, the son of Sung Jin-Woo. In a world still threatened by dungeons and monsters, Su-Ho inherits his father's powers and responsibilities. As he embarks on his journey, he faces new challenges and uncovers deeper mysteries. The series expands the Solo Leveling universe, introducing fresh characters and continuing the legacy of its predecessor.",
  },
  {
    title: "Lycoris Recoil",
    type: "anime",
    bg: "bg-[#7D271B95]",
    yt: "https://www.youtube.com/watch?v=iMe_K_av6r0?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    genres: ["Action", "Slice of Life", "Original"],
    description:
      "Lycoris Recoil is an original anime series set in Tokyo, where a secret organization employs orphaned girls as assassins to maintain peace. The story follows Chisato Nishikigi and Takina Inoue, two agents with contrasting personalities, as they balance their covert missions with working at a café. The series blends action-packed sequences with heartwarming moments, exploring themes of friendship, duty, and the value of life.",
  },
  {
    title: "Tokyo Ghoul",
    type: "anime",
    yt: "https://www.youtube.com/watch?v=MlHlLJAWljc?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    bg: "bg-[#FE462695]",
    genres: ["Action", "Horror", "Supernatural", "Psychological"],
    description:
      "Tokyo Ghoul centers on Ken Kaneki, a college student who becomes a half-ghoul after a chance encounter. Struggling with his new identity, Kaneki navigates a world where ghouls and humans are in constant conflict. The series explores themes of identity, humanity, and the nature of evil, all set against a backdrop of intense action and psychological horror. Its dark atmosphere and complex characters have made it a standout in the anime community.",
  },
  {
    title: "Monkey D. Luffy",
    type: "character",
    bg: "bg-[#2DDDE195]",
    yt: "https://www.youtube.com/watch?v=zwA3BXqHp9A?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    from: "One Piece",
    traits: ["Rubber powers", "Cheerful", "Leader"],
    description:
      "Monkey D. Luffy is the enthusiastic and determined captain of the Straw Hat Pirates. After eating the Gum-Gum Fruit, he gains rubber-like abilities, which he uses in his quest to become the King of the Pirates. Luffy is known for his unwavering loyalty to his crew, fearless nature, and strong sense of justice. His journey is filled with adventures, battles, and the pursuit of freedom.",
  },
  {
    title: "One Punch Man",
    type: "anime",
    yt: "https://www.youtube.com/watch?v=qnbqa7KS-Bs?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    bg: "bg-[#CC242495]",
    genres: ["Action", "Comedy", "Superhero"],
    description:
      "One Punch Man follows Saitama, a hero who can defeat any opponent with a single punch. Bored by the lack of challenging battles, he seeks meaning in his hero work. The series satirizes superhero tropes while delivering high-octane action and humor. It explores themes of purpose, strength, and the essence of heroism, making it a unique entry in the superhero genre.",
  },
  {
    title: "Tanjiro Kamado",
    type: "character",
    bg: "bg-[#FFE61395]",
    yt: "https://www.youtube.com/watch?v=8khffUA_O48?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    from: "Demon Slayer",
    traits: ["Kind", "Strong sense of justice", "Water & Sun Breathing"],
    description:
      "Tanjiro Kamado is the compassionate protagonist of Demon Slayer. After his family is slaughtered by demons and his sister Nezuko is turned into one, he becomes a Demon Slayer to avenge his family and find a cure for Nezuko. Tanjiro is known for his empathy, determination, and mastery of Water and Sun Breathing techniques. His journey is marked by intense battles, personal growth, and unwavering resolve.",
  },
  {
    title: "Baki",
    type: "anime",
    bg: "bg-[#513E8D95]",
    yt: "https://www.youtube.com/watch?v=ntosogSwBpQ?autoplay=1&mute=1&controls=1&loop=1&playlist=BNlhLwDyPT8",
    genres: ["Action", "Martial Arts", "Seinen"],
    description:
      "Baki follows Baki Hanma, a young martial artist training to surpass his father, the strongest fighter in the world. The series showcases brutal battles, diverse fighting styles, and intense rivalries. As Baki faces formidable opponents, he pushes his limits to achieve his goal. The anime delves into themes of strength, perseverance, and the human spirit's resilience.",
  },
  {
    title: "JoJo's Bizarre Adventure",
    type: "anime",
    bg: "bg-[#FE462695]",
    genres: ["Action", "Adventure", "Supernatural"],
    yt: "https://www.youtube.com/watch?v=HkNe8CXqff8",
    description:
      "JoJo's Bizarre Adventure is a generational saga that follows the Joestar family, each member possessing unique powers and facing supernatural foes. The series is known for its distinctive art style, imaginative battles, and intricate plotlines. Spanning various time periods and settings, it combines action, humor, and drama, creating a rich and diverse narrative that has captivated audiences worldwide.",
  },
];
