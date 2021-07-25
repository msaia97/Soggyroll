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


# user
cory = User.create!(username: 'CoryInDaHouse', password: 'BaxterBaddie', email: 'whitehouse@myhouse.com')

# shows
onePiece = Anime.create!(title: 'One Piece', description: "Monkey. D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!")
onePiece.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/onePiecePic.jpeg'), filename: 'onePiecePic.jpeg')
naruto = Anime.create!(title: 'Naruto', description: 'The Village Hidden in the Leaves is home to the stealthiest ninja. But twelve years earlier, a fearsome Nine-tailed Fox terrorized the village before it was subdued and its spirit sealed within the body of a baby boy.')
naruto.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/narutoPic.jpeg'), filename: 'narutoPic.jpeg')
bleach = Anime.create!(title: 'Bleach', description: 'BLEACH follows the story of Ichigo Kurosaki. When Ichigo meets Rukia he finds his life is changed forever.')
bleach.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/bleachPic.jpeg'), filename: 'bleachPic.jpeg')
titan = Anime.create!(title: 'Attack on Titan', description: 'Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!')
titan.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/titanPic.jpeg'), filename: 'titanPic.jpeg')
my_hero_academia = Anime.create!(title: 'My Hero Academia', description: 'Izuku has dreamt of being a hero all his life—a lofty goal for anyone, but especially challenging for a kid with no superpowers. That’s right, in a world where eighty percent of the population has some kind of super-powered “quirk,” Izuku was unlucky enough to be born completely normal. But that’s not enough to stop him from enrolling in one of the world’s most prestigious hero academies.')
my_hero_academia.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/myHeroAcademiaPic.jpeg'), filename: 'myHeroAcademiaPic.jpeg')
jujutsuK = Anime.create!(title: 'JUJUTSU KAISEN', description: 'Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.')
jujutsuK.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/jujutsuKPic.jpeg'), filename: 'jujutsuKPic.jpeg')
basilisk = Anime.create!(title: 'Basilisk : The Ouka Ninja Scrolls', description: 'The battle for succession that continued for three generations of shogun in the Keichou era culminated in a gruesome battle of ninja arts between the Kouga and Iga clans. Amidst a rain of flower petals, a man and woman who had decided to live for love were separated once again, beautiful in their transience')
basilisk.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/basiliskPic.jpeg'), filename: 'basiliskPic.jpeg')
rein_slime = Anime.create!(title: 'That Time I Got Reincarnated as a Slime', description: 'Corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru, he begins his quest to create a world that’s welcoming to all races.')
rein_slime.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/reinSlimePic.jpeg'), filename: 'reinSlimePic.jpeg')
hunterX = Anime.create!(title: 'Hunter x Hunter', description: 'Gon, a young boy who lives on Whale Island, dreams of becoming a Hunter like his father, who left when Gon was still young.')
hunterX.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/hunterXPic.jpeg'), filename: 'hunterXPic.jpeg')
haikyu = Anime.create!(title: 'Haikyu!!', description: 'Based off of the original Weekly Shonen Jump manga series from Haruichi Furudate, Haikyu!! is a slice-of-life sports anime revolving around Shoyo Hinata’s love of volleyball. Inspired by a small-statured pro volleyball player, Hinata creates a volleyball team in his last year of middle school. Unfortunately the team is matched up against the "King of the Court" Tobio Kageyama’s team in their first tournament and inevitably lose. After the crushing defeat, Hinata vows to surpass Kageyama After entering high school, Hinata joins the volleyball team only to find that Tobio has also joined.')
haikyu.cover_photo.attach(io: open('https://soggyroll-seed.s3-us-west-1.amazonaws.com/haikyuPic.jpeg'), filename: 'haikyuPic.jpeg')

# episodes
opEp1 = Episode.create!(title: 'I’m Luffy! The Man Who’s Gonna Be King of the Pirates!', description: 'Countless souls have been lured along the Grand Line in pursuit of the legendary One Piece! Luffy D. Monkey is a young pirate with a dream: to prove the legend true and be king of them all!', video_id: onePiece.id)
opEp1.photo.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1img.jpeg'), filename: 'opEp1img.jpeg')
opEp1.video.attach(io: open('https://soggyroll-seed.s3.us-west-1.amazonaws.com/opEp1.mp4'), filename: 'opEp1.mp4')