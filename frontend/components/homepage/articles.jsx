import React from 'react';

class Article extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="article">
                <p className="news-header">Latest News!</p>
                <ul>
                    <li className="article-component">
                        <img src="https://soggyroll-seed.s3.us-west-1.amazonaws.com/Fena.jpg" alt="FenaPic" />
                        <div className="article-text">
                            <p className="article-author">Posted by Joseph Luster 9 hours ago</p>
                            <p className="article-title">Fena: Pirate Princess Hits Soggyyroll and Adult Swim soon!</p>
                            <p className="article-description">Last month we got another look at Fena: Pirate Princess with the announcement of the main staff and more, and now we have a premiere date to go to along with the English voice cast. Read on for more.</p>
                        </div>
                    </li>

                    <li className="article-component">
                        <img src="https://soggyroll-seed.s3.us-west-1.amazonaws.com/crGirlArticle.png" alt="crArticle" />
                        <div className="article-text">
                            <p className="article-title">FINAL UPDATE: Soggyrollw Announces Summer 2022 Anime Lineup!</p>
                            <p className="article-author">Posted by Kyle Cardine 28 days ago</p>
                            <p className="article-description">Digi-dive into an exciting new anime season with Soggyroll-Hime as she gives you the full download on Soggyroll's upcoming Summer 2021 season! Check out the latest patch which includes That Time I Got Reincarnated as a Slime Season 2, The Idaten Deities Know Only Peace, Girlfriend, Girlfriend and more!</p>
                        </div>
                    </li>

                    <li className="article-component">
                        <img src="https://soggyroll-seed.s3.us-west-1.amazonaws.com/lASheild.jpg" alt="lASheild" />
                        <div className="article-text">
                            <p className="article-title">The Rising of The Shield Hero Stage Play's Openening Performance Clip Introduces Its Main Cast Members</p>
                            <p className="article-author">Posted by Mikikazu Komatsu one hour ago</p>
                            <p className="article-description">After the postponement due to the effects of COVID-19, the stage play adaptation of Aneko Yusagi's fantasy light novel series The Rising of the Shield Hero finally opened at Theater Sun Mall in Tokyo on July 15. Meet its main cast members in the opening performance clip after the jump!</p>
                        </div>
                    </li>

                    <li className="article-component">
                        <img src="https://soggyroll-seed.s3.us-west-1.amazonaws.com/opManArticle.jpg" alt="opManArticle" />
                        <div className="article-text">
                            <p className="article-title">One-Punch Man: A Hero Nobody Knows to End Multiplayer Service in February 2022</p>
                            <p className="article-author">Posted by Joseph Luster 5 hours ago</p>
                            <p className="article-description">It's time to plan your remaining months of multiplayer for One-Punch Man: A Hero Nobody Knows if you're still playing it. Read on for the latest on the game. </p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Article;