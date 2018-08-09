import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import PlayerCard from '../PlayerCard';
import mainStyles from '../../Styles/mainStyles';

export default class PlayerList extends Component {

    static navigationOptions = {
        title: 'Players',
    };

    constructor() {
        super();
        var path = 'https://raw.githubusercontent.com/misael93/RN-Images/master/';
        this.state = {
            players: [
                {
                    name: 'Ronaldo',
                    country: 'Brazil',
                    img: path + 'ronaldo.jpg',
                    team: 'Retired',
                    age: 41,
                    biggestAchievment: '2x World Cup winner',
                    bio: `Ronaldo Luís Nazário de Lima, commonly known as Ronaldo, is a retired Brazilian professional footballer who played as a striker. Popularly dubbed O Fenômeno ("The Phenomenon"), he is widely considered to be one of the greatest football players of all time. In his prime, he was known for his dribbling at speed, feints, and clinical finishing.`
                },
                {
                    name: 'Cristiano Ronaldo',
                    country: 'Portugal',
                    img: path + 'cr7.jpeg',
                    team: 'Juventus',
                    age: 33,
                    biggestAchievment: '5x Champions League winner',
                    bio: `Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for Italian club Juventus and the Portugal national team. Often considered the best player in the world and regarded by many as one of the greatest of all time, Ronaldo has a record-tying five Ballon d'Or awards, the most for a European player, and is the first player to win four European Golden Shoes.`
                },
                {
                    name: 'Bastian Schweinsteiger',
                    country: 'Germany',
                    img: path + 'bastian.jpg',
                    team: 'Chicago Fire',
                    age: 34,
                    biggestAchievment: 'World Cup winner',
                    bio: `Bastian Schweinsteiger is a German professional footballer who plays as a midfielder for Major League Soccer club Chicago Fire. He spent 17 seasons at Bayern Munich, playing in exactly 500 matches across all competitions and scoring 68 goals. His honours at the club include eight Bundesliga titles, seven DFB-Pokal titles, a UEFA Champions League title, a FIFA Club World Cup title and a UEFA Super Cup title.`
                },
                {
                    name: 'Kylian Mbappé',
                    country: 'France',
                    img: path + 'mbappe.jpg',
                    team: 'Paris Saint-Germain',
                    age: 19,
                    biggestAchievment: 'World Cup winner',
                    bio: `Kylian Mbappé Lottin is a French professional footballer who plays as a forward for Paris Saint-Germain and the France national team. At the age of 19, he has been labelled the best young player in the world, and has been projected as the future best player in the world.`
                },
                {
                    name: 'Luka Modric',
                    country: 'Croatia',
                    img: path + 'modric.jpeg',
                    team: 'Real Madrid',
                    age: 32,
                    biggestAchievment: '4x Champpions League winner',
                    bio: `Luka Modrić is a Croatian professional footballer who plays as a midfielder for Spanish club Real Madrid and is the captain of the Croatia national team. Modrić plays mainly as a central midfielder but can also play as an attacking midfielder or as a defensive midfielder, usually deployed as a deep-lying playmaker. Modrić is widely regarded as one of the best midfielders of his generation, and among the greatest Croatian footballers of all-time.`
                },
                {
                    name: 'Toni Kross',
                    country: 'Germany',
                    img: path + 'kroos.jpg',
                    team: 'Real Madrid',
                    age: 28,
                    biggestAchievment: 'World Cup winner',
                    bio: `Toni Kroos is a German professional footballer who plays as a midfielder for Spanish club Real Madrid and the German national team. A member of Bayern Munich's first team at the age of 17, Kroos played in a 18-month loan spell at Bayer Leverkusen, before going back to Munich and winning back-to-back Bundesliga titles and the 2012–13 Champions League. After winning the FIFA World Cup in 2014, he joined Real Madrid on a six-year contract, for a fee of £20 million. In Madrid, he won the 2015–16, 2016–17 and 2017–18 Champions Leagues and was elected to the squad of the season in the last five seasons. He became the first German ever to win four UCL titles.`
                },
                {
                    name: 'Paul Pogba',
                    country: 'France',
                    img: path + 'pogba.jpg',
                    team: 'Manchester United',
                    age: 25,
                    biggestAchievment: 'World Cup winner',
                    bio: `Paul Labile Pogba is a French professional footballer who plays for Premier League club Manchester United and the French national team. He operates primarily as a central midfielder, but can also be deployed as an attacking midfielder, defensive midfielder, and deep-lying playmaker.`
                },
                {
                    name: 'Zlatan Ibrahimovic',
                    country: 'Sweden',
                    img: path + 'zlatan.jpg',
                    team: 'LA Galaxy',
                    age: 36,
                    biggestAchievment: 'Champion in every country he has played',
                    bio: `Zlatan Ibrahimović is a Swedish professional footballer who plays as a forward for LA Galaxy. Primarily a striker, he is a prolific goalscorer, who is best known for his technique, creativity, strength, ability in the air, and his powerful and accurate striking ability. He is currently the third-most decorated active footballer in the world, having won 32 trophies in his career.`
                }
            ]
        }
    }

    render() {

        const navigator = this.props.navigation;

        return (
            <View style={mainStyles.background}>
                <FlatList
                    style={mainStyles.mv5}
                    data={this.state.players}
                    renderItem={({ item }) =>
                        <PlayerCard player={item} navigator={navigator} />}
                />
            </View>
        );
    }

}