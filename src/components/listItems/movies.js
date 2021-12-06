import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import { Ionicons } from '@expo/vector-icons';
import MovieApi from '../../proxy/Movies'


const Area = styled.TouchableOpacity`
width:150px;
height:290px;
flex-grow:1;
margin-bottom:5px;
flex-direction:column;
align-content:center;
margin-left:5px;
padding:5px;
border-color:silver;
border-width:1px;
`;

const MovieImageArea = styled.View`
height: 200px;
background-color: black;
`;


const MovieImage = styled.Image`
flex: 1;
`;

const InfoArea = styled.View`
flex-direction:column;
height:50px;
background-color: black;
`;

const MovieTitle = styled.Text`
font-size: 16px;
font-weight: bold;
color: white;
`;
const MovieRatingsArea = styled.View`
flex-direction: row;
`;

const MovieRatingTitle = styled.Text`
font-size: 16px;
color: white;
`;

const MovieRatings = styled.Text`
font-size: 13px;
color: white;
flex: 1;
font-weight: bold;
margin-top: 5px;
margin-left: 5px;

`;


export default ({ data }) => {

    const movieDetailsInitialState = {
        "Title":"",
        "Year":"",
        "Rated":"",
        "Released":"",
        "Runtime":"",
        "Genre":"",
        "Director":"",
        "Writer":"",
        "Actors":"",
        "Plot":"",
        "Language":"",
        "Country":"",
        "Awards":"",
        "Poster":"",
        "Ratings":[
           {
              "Source":"",
              "Value":""
           }
        ],
        "Metascore":"",
        "imdbRating":"",
        "imdbVotes":"",
        "imdbID":"",
        "Type":"",
        "totalSeasons":"",
        "Response":""
     }

    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation();
    const [movieDetails, setMovieDetails] = useState(movieDetailsInitialState)    

    const handleItemClick = () => {

        userDispatch({
            type: 'setMovie',
            payload: {
                movie: movieDetails
            }
        });
        navigation.navigate('Details')        
    }


    const getMovieDetails = async()=>{
        try {
            const res = await MovieApi.getById(data.imdbID)
            if(res.Response==='True'){
                setMovieDetails(res)
            }            
        } catch (error) {
            setMovieDetails({})            
        }
    }


    useEffect(() => {
        getMovieDetails(data.imdbID);
    }, []);


    return (
        <Area onPress={handleItemClick}>
            <MovieImageArea>
                <MovieImage source={{ uri: data.Poster }} resizeMode='center' />
            </MovieImageArea>
            <InfoArea>
                <MovieTitle>{data.Title}</MovieTitle>
                <MovieRatingTitle>IMDb Rating </MovieRatingTitle>
                <MovieRatingsArea>
                    <Ionicons name="star" size={24} color="gold" />
                    <MovieRatings>{movieDetails.Ratings[0].Value}</MovieRatings>
                </MovieRatingsArea>

            </InfoArea>
        </Area>
    )
}
