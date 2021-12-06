import React, { useContext } from "react";
import {
    Container, TitleArea, MovieTitle, RowView, MovieRatingsArea, MovieRatingTitle, MovieRatings,
    MoviePosterArea, PosterImage, ScroollView, ReleaseMovie, TimeMovie, RatingsContainer,
    GenreText, PlotText, Line, Label, Fields
} from './styles'
import { UserContext } from '../../contexts/UserContext';
import { Ionicons } from '@expo/vector-icons';


export default () => {

    const movie = useContext(UserContext).state.movie;

    return (
        <Container>
            <ScroollView>
                <TitleArea>
                    <MovieTitle>{movie.Title}</MovieTitle>

                    <RowView>
                        <ReleaseMovie>{movie.Released}</ReleaseMovie>
                        <TimeMovie>{movie.Runtime}</TimeMovie>
                        <RatingsContainer>
                            <MovieRatingTitle>IMDb Rating</MovieRatingTitle>
                            <MovieRatingsArea>
                                <Ionicons name="star" size={24} color="gold" />
                                <MovieRatings>{movie.Ratings[0].Value}</MovieRatings>
                            </MovieRatingsArea>
                        </RatingsContainer>
                    </RowView>
                </TitleArea>
                <MoviePosterArea>
                    <PosterImage source={{ uri: movie.Poster }} resizeMode='contain' />
                </MoviePosterArea>
                <GenreText>{movie.Genre}</GenreText>
                <PlotText>{movie.Plot}</PlotText>
                <Line />                
                <RowView>
                    <Label>Directors</Label>
                    <Fields>{movie.Director}</Fields>
                </RowView>
                <Line />
                <RowView>
                    <Label>Writer</Label>
                    <Fields>{movie.Writer}</Fields>
                </RowView>                
                <Line />
                <RowView>
                    <Label>Actors</Label>
                    <Fields>{movie.Actors}</Fields>
                </RowView>
                <Line />
                <RowView>
                    <Label>Awards</Label>
                    <Fields>{movie.Awards}</Fields>
                </RowView>
                <Line />
                <RowView>
                    <Label>Country</Label>
                    <Fields>{movie.Country}</Fields>
                </RowView>
            </ScroollView>
        </Container>
    )

}