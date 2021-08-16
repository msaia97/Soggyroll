# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Anime.destroy_all
Episode.destroy_all
Bookmark.destroy_all


# user
cory = User.create!(username: 'CoryInDaHouse', password: 'BaxterBaddie', email: 'whitehouse@myhouse.com')

# one piece
onePiece = Anime.create!(title: 'One Piece', description: "Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!")
onePiece.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/onePiecePic.jpeg'), filename: 'onePiecePic.jpeg')
opEp1 = Episode.create!(title: 'I’m Luffy! The Man Who’s Gonna Be King of the Pirates!', description: 'Countless souls have been lured along the Grand Line in pursuit of the legendary One Piece! Luffy D. Monkey is a young pirate with a dream: to prove the legend true and be king of them all!', video_id: onePiece.id, episode_num: 1)
opEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1img.jpeg'), filename: 'opEp1img.jpeg')
opEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1.mp4'), filename: 'opEp1.mp4')

opEp2 = Episode.create!(title: 'Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!', description: "Luffy and his new companion Coby set sail in search of the infamous pirate hunter Zoro, rumored to be held captive at the Marine Base.", video_id: onePiece.id, episode_num: 2)
opEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp2.jpeg'), filename: 'opEp2.jpeg')
opEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1.mp4'), filename: 'opEp1.mp4')

opEp3 = Episode.create!(title: 'Morgan versus Luffy! Who’s the Mysterious Pretty Girl?', description: "Luffy is in the line of fire after saving Zoro, and now tyrannical Captain Morgan is out for their heads! Zoro must decide if he will join forces with Luffy or die in captivity.", video_id: onePiece.id, episode_num: 3)
opEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp3.jpeg'), filename: 'opEp3.jpeg')
opEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1.mp4'), filename: 'opEp1.mp4')


# naruto
naruto = Anime.create!(title: 'Naruto', description: 'The Village Hidden in the Leaves is home to the stealthiest ninja. But twelve years earlier, a fearsome Nine-tailed Fox terrorized the village before it was subdued and its spirit sealed within the body of a baby boy.')
naruto.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/narutoPic.jpeg'), filename: 'narutoPic.jpeg')
narEp1 = Episode.create!(title: 'Enter: Naruto Uzumaki!', description: 'Welcome to the Village Hidden in the Leaves, where deadly serious ninja roam the land and the seriously mischievous Naruto Uzumaki causes trouble everywhere he goes.', video_id: naruto.id, episode_num: 1)
narEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp1Photo.jpeg'), filename: 'narEp1Photo.jpeg')
narEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp1Vid.mp4'), filename: 'narEp1Vid.mp4')
narEp2 = Episode.create!(title: 'My Name is Konohamaru!', description: "Naruto finally graduates from the Ninja Academy and claims to know it all.", video_id: naruto.id, episode_num: 2)
narEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp2.jpeg'), filename: 'narEp2.jpeg')
narEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp1Vid.mp4'), filename: 'narEp1Vid.mp4')
narEp3 = Episode.create!(title: 'Sasuke and Sakura: Friends or Foes?', description: "On the way to becoming a ninja, Naruto must team up with his classmates, the pretty Sakura and the pretty serious Sasuke...", video_id: naruto.id, episode_num: 3)
narEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp3.jpeg'), filename: 'narEp3.jpeg')
narEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/narEp1Vid.mp4'), filename: 'narEp1Vid.mp4')


# bleach
bleach = Anime.create!(title: 'Bleach', description: 'BLEACH follows the story of Ichigo Kurosaki. When Ichigo meets Rukia he finds his life is changed forever.')
bleach.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/bleachPic.jpeg'), filename: 'bleachPic.jpeg')
bleachEp1 = Episode.create!(title: 'Untitled', description: "Meet Ichigo Kurosaki, age 15. He's a high-school student who possesses the uncanny ability to see ghosts. But when he meets Rukia Kuchiki, a Soul Reaper from the Soul Society who helps lost souls find peace, his not-so-normal life becomes even more abnormal. In order to save his family from the grips of a Hollow, an evil spirit that preys on humans, Rukia lends some of her powers to Ichigo. Much to her surprise, he absorbs most of her powers and in turn, he too becomes a Soul Reaper.", video_id: bleach.id, episode_num: 1)
bleachEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/bleachEp1Photo.jpeg'), filename: 'bleachEp1Photo.jpeg')
bleachEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/bleachEp1Vid.mp4'), filename: 'bleachEp1Vid.mp4')
bleachEp2 = Episode.create!(title: 'Untitled.', description: "Eren begins his training with the Cadet Corps, but questions about his painful past overwhelm him. When he struggles with a maneuvering exercise, Berholt and Reiner offer kindly advice.", video_id: bleach.id, episode_num: 2)
bleachEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/bleachEp2.jpeg'), filename: 'bleachEp2.jpeg')
bleachEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/bleachEp1Vid.mp4'), filename: 'bleachEp1Vid.mp4')


# attack on titan
titan = Anime.create!(title: 'Attack on Titan', description: 'Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!')
titan.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/titanPic.jpeg'), filename: 'titanPic.jpeg')
titanEp1 = Episode.create!(title: 'To You, 2,000 Years in the Future -The Fall of Zhiganshina (1)', description: "After 100 years, peace is broken by the appearance of a fifty meter tall Titan.", video_id: titan.id, episode_num: 1)
titanEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp1.jpeg'), filename: 'titanEp1.jpeg')
titanEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp1.mp4'), filename: 'titanEp1.mp4')
titanEp2 = Episode.create!(title: 'That Day - The Fall of Zhiganshina (2)', description: "As Titans continue to rampage, the townspeople gather at the inner gate. But a new Titan breaks through and this one is unlike the others.", video_id: titan.id, episode_num: 2)
titanEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp2.jpeg'), filename: 'titanEp2.jpeg')
titanEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp1.mp4'), filename: 'titanEp1.mp4')
titanEp3 = Episode.create!(title: 'A Dim Light in the Darkness of Despair - Humanity Rises Again (1)', description: "Eren begins his training with the Cadet Corps, but questions about his painful past overwhelm him. When he struggles with a maneuvering exercise, Berholt and Reiner offer kindly advice.", video_id: titan.id, episode_num: 3)
titanEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp3.jpeg'), filename: 'titanEp3.jpeg')
titanEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/titanEp1.mp4'), filename: 'titanEp1.mp4')



# my hero academia
my_hero_academia = Anime.create!(title: 'My Hero Academia', description: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.')
my_hero_academia.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/myHeroAcademiaPic.jpeg'), filename: 'myHeroAcademiaPic.jpeg')
myHeroEp1 = Episode.create!(title: 'Izuku Midoriya: Origin', description: "Izuku Midoriya desperately wants to be a hero, but he is one of the few in his generation born without a Quirk. Will meeting the number one hero, All Might, change his fate?", video_id: my_hero_academia.id, episode_num: 1)
myHeroEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp1.jpeg'), filename: 'myHeroEp1.jpeg')
myHeroEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp1Vid.mp4'), filename: 'myHeroEp1Vid.mp4')
myHeroEp2 = Episode.create!(title: 'What It Takes to Be a Hero', description: "Izuku accidentally learns of All Might's secret, but there's trouble in town again before Izuku has time to process it. Will All Might be able to save the day again?", video_id: my_hero_academia.id, episode_num: 2)
myHeroEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp2.jpeg'), filename: 'myHeroEp2.jpeg')
myHeroEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp1Vid.mp4'), filename: 'myHeroEp1Vid.mp4')
myHeroEp3 = Episode.create!(title: 'Roaring Muscles', description: "All Might tells Izuku that he can become a hero, but does he really have what it takes to become one?", video_id: my_hero_academia.id, episode_num: 3)
myHeroEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp3.jpeg'), filename: 'myHeroEp3.jpeg')
myHeroEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/myHeroEp1Vid.mp4'), filename: 'myHeroEp1Vid.mp4')

# jusjutsu kaisen
jujutsuK = Anime.create!(title: 'JUJUTSU KAISEN', description: 'Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.')
jujutsuK.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/jujutsuKPic.jpeg'), filename: 'jujutsuKPic.jpeg')
jujutsuKEp1 = Episode.create!(title: 'Ryomen Sukuna', description: "Itadori Yuji is a high school student with exceptional physical abilities. On the night his grandfather dies he meets Fushiguro Megumi from Jujutsu High. Fushiguro had come there to retrieve the cursed object that Itadori had picked up, but it was currently in the possession of Itadori's upperclassmen who were trying to remove its seal. The upperclassmen are then attacked by monsters drawn there by the cursed object as Itadori and Fushiguro race to their rescue.", video_id: jujutsuK.id, episode_num: 1)
jujutsuKEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/jKEp1.jpeg'), filename: 'jKEp1.jpeg')
jujutsuKEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/jujutsuKEp1Vid.mp4'), filename: 'jujutsuKEp1Vid.mp4')
jujutsuKEp2 = Episode.create!(title: 'For Myself', description: "Itadori wakes up in an unfamiliar room and before him rests Gojo Satoru, a teacher at Jujutsu High, who declares Itadori's secret execution has been decided upon. Gojo presents Itadori with two options. He can be executed immediately, or he can hunt down all 20 of Ryomen Sukuna's fingers and die after absorbing all of them...", video_id: jujutsuK.id, episode_num: 2)
jujutsuKEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/jujutsuKEp2.jpeg'), filename: 'jujutsuKEp2.jpeg')
jujutsuKEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/jujutsuKEp1Vid.mp4'), filename: 'jujutsuKEp1Vid.mp4')

# basilisk
basilisk = Anime.create!(title: 'Basilisk : The Ouka Ninja Scrolls', description: 'The battle for succession that continued for three generations of shogun in the Keichou era culminated in a gruesome battle of ninja arts between the Kouga and Iga clans. Amidst a rain of flower petals, a man and woman who had decided to live for love were separated once again, beautiful in their transience')
basilisk.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/basiliskPic.jpeg'), filename: 'basiliskPic.jpeg')
basiliskEp1 = Episode.create!(title: 'Destiny', description: "The Iga Tsubagakure and Kouga Manjidani clans are at a meeting with Ieyasu Tokugawa in Sunpu. After a brief display of their skills the ninja are called over and told of the plan to break Hanzo the 1st's treaty, allowing the Iga and Kouga to kill one another.", video_id: basilisk.id, episode_num: 1)
basiliskEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/basiliskEp1.webp'), filename: 'basiliskEp1.webp')
basiliskEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/basiliskEp1.mp4'), filename: 'basiliskEp1.mp4')


# reincarnation of a slime
rein_slime = Anime.create!(title: 'That Time I Got Reincarnated as a Slime', description: 'Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.')
rein_slime.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/reinSlimePic.jpeg'), filename: 'reinSlimePic.jpeg')
reinSlimeEp1 = Episode.create!(title: 'The Storm Dragon, Veldora', description: "Mikami Satoru, a businessman, is stabbed by a criminal on the street and killed. When he regains consciousness in the darkness, he finds that he's been reincarnated as a slime! With nothing better to do, he spends his time devouring all the rare herbs and precious ores he comes across. As he does, he encounters the Storm Dragon Veldora, who was sealed in this cave 300 years ago by a hero's Unlimited Imprisonment skill. He's frightened at first, but as they talk, he becomes friends with the long-isolated Veldora.", video_id: rein_slime.id, episode_num: 1)
reinSlimeEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp1.jpeg'), filename: 'reinSlimeEp1.jpeg')
reinSlimeEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp1.mp4'), filename: 'reinSlimeEp1.mp4')
reinSlimeEp2 = Episode.create!(title: 'Meeting the Goblins', description: "The slime Mikami and the Storm Dragon Veldora decide to give each other names. Veldora gives the slime Mikami the name Rimuru, and Rimuru comes up with a family name for both of them: Tempest. Then Rimuru uses his Predator skill to take Veldora into his body and analyze the Unlimited Imprisonment seal in hopes of breaking it... but this action sends a shock through the nations surrounding the Great Forest of Jura. With Veldora gone, there's a chance that the larger nations could become bold and invade the smaller provinces. With no knowledge of this, Rimuru leaves the cave and meets some Goblins.", video_id: rein_slime.id, episode_num: 2)
reinSlimeEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp2.jpeg'), filename: 'reinSlimeEp2.jpeg')
reinSlimeEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp1.mp4'), filename: 'reinSlimeEp1.mp4')
reinSlimeEp3 = Episode.create!(title: 'Battle at the Goblin Village', description: "After leaving the cave, Rimuru encounters a village of Goblins under attack by a clan of Direwolves. Caught in the heat of the moment, Rimuru agrees to help the Goblins in their battle. That night, the Direwolves arrive to try to take over as the new rulers of the Great Forest of Jura!", video_id: rein_slime.id, episode_num: 3)
reinSlimeEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp3.jpeg'), filename: 'reinSlimeEp3.jpeg')
reinSlimeEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/reinSlimeEp1.mp4'), filename: 'reinSlimeEp1.mp4')


# hunter x hunter 
hunterX = Anime.create!(title: 'Hunter x Hunter', description: 'Gon, a young boy who lives on Whale Island, dreams of becoming a Hunter like his father, who left when Gon was still young.')
hunterX.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/hunterXPic.jpeg'), filename: 'hunterXPic.jpeg')
hunterXEp1 = Episode.create!(title: 'Departure x And x Friends', description: "Gon, a 12-year-old boy, fulfills his promise to Mito-san, the woman who raised him, in order to receive permission to set out on a journey to take the Hunter exam and become a Hunter like his father was. While sailing to the examination site, Gon meets Leorio and Kurapika, who are also trying to become Hunters. But the three of them get off to a rocky start...", video_id: hunterX.id, episode_num: 1)
hunterXEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp1.jpeg'), filename: 'hunterXEp1.jpeg')
hunterXEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp1.mp4'), filename: 'hunterXEp1.mp4')
hunterXEp2 = Episode.create!(title: 'Test x Of x Tests', description: "Gon, Leorio, and Kurapika have arrived at the city where the exam will be held. They follow the captain's advice and head for a shortcut to the exam site. On the way, they pass through a slum where a group of old ladies are waiting for them. The ladies tell them that they must pass their quiz or be disqualified from the Hunter exam.", video_id: hunterX.id, episode_num: 2)
hunterXEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp2.jpeg'), filename: 'hunterXEp2.jpeg')
hunterXEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp1.mp4'), filename: 'hunterXEp1.mp4')
hunterXEp3 = Episode.create!(title: 'Rivals x In x Survival', description: "The Kiriko have brought our three heroes to the exam site. Many applicants have already arrived. There's the veteran Tonpa, the creepy-looking Hisoka, the talkative ninja Hanzo, and the boy with the skateboard Killua. The first phase of the exam is finally about to begin.", video_id: hunterX.id, episode_num: 3)
hunterXEp3.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp3.jpeg'), filename: 'hunterXEp3.jpeg')
hunterXEp3.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/hunterXEp1.mp4'), filename: 'hunterXEp1.mp4')


# haikyu
haikyu = Anime.create!(title: 'Haikyu!!', description: 'Based off of the original Weekly Shonen Jump manga series from Haruichi Furudate, Haikyu!! is a slice-of-life sports anime revolving around Shoyo Hinata’s love of volleyball. Inspired by a small-statured pro volleyball player, Hinata creates a volleyball team in his last year of middle school. Unfortunately the team is matched up against the "King of the Court" Tobio Kageyama’s team in their first tournament and inevitably lose. After the crushing defeat, Hinata vows to surpass Kageyama After entering high school, Hinata joins the volleyball team only to find that Tobio has also joined.')
haikyu.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/haikyuPic.jpeg'), filename: 'haikyuPic.jpeg')
haikyuEp1 = Episode.create!(title: 'The End & The Beginning', description: "Hinata Shoyo is enamored with volleyball; he is in the 3rd year of middle-school, and will not be discouraged by the fact that he has no teammates to play with. He finally scrapes together a team to enter his first and last official tournament.", video_id: haikyu.id, episode_num: 1)
haikyuEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/haikyuEp1.jpeg'), filename: 'haikyuEp1.jpeg')
haikyuEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/haikyuEp1.mp4'), filename: 'haikyuEp1.mp4')
haikyuEp2 = Episode.create!(title: 'Karasuno High School Volleyball Club', description: "Before starting high school, Hinata had sworn revenge against Kageyama of Kitagawa Daiichi. But strangely enough he encounters the “king of the court” again, but this time in the gym of Karasuno High School. Their head-butting is unrelenting and they start their own match, but the third-year captain Sawamura disallows them from participating in the volleyball club until they learn to show team spirit. What now?", video_id: haikyu.id, episode_num: 2)
haikyuEp2.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/haikyuEp2.jpeg'), filename: 'haikyuEp2.jpeg')
haikyuEp2.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/haikyuEp1.mp4'), filename: 'haikyuEp1.mp4')
