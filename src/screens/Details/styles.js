import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
flex:1;
background-color:black;
flex-direction:column;
`;

export const ScroollView = styled.ScrollView`
flex:1;
margin-left:10px;
margin-right:10px;
`;

export const TitleArea = styled.View`
padding: 5px;
`;

export const MovieTitle = styled.Text`
font-size: 20px;;
color: white;
font-weight: bold;
text-align: center;
margin-bottom: 10px;
`;

export const RowView = styled.View`
flex-direction: row;
`;

export const RatingsContainer = styled.View`
flex-direction: column;
`;

export const MovieRatingsArea = styled.View`
flex-direction: row;
`;

export const MovieRatingTitle = styled.Text`
font-size: 16px;
color: white;
`;

export const MovieRatings = styled.Text`
font-size: 13px;
color: white;
flex: 1;
font-weight: bold;
margin-top: 5px;
margin-left: 5px;
`;

export const MoviePosterArea = styled.View`
height: 300px;
`;


export const PosterImage = styled.Image`
flex: 1;
`;

export const ReleaseMovie = styled.Text`
color: white;
`;

export const TimeMovie  = styled.Text`
color: white;
margin-left: 10px;
flex: 1;
`;

export const GenreText = styled.Text`
color: white;
padding: 10px;
font-size: 16px;
`;

export const PlotText = styled.Text`
color: white;
`;

export const Line = styled.View`
height: 1px;
background-color: silver;
margin-top: 5px;
margin-bottom: 5px;
`;

export const Label = styled.Text`
font-size: 16px;
font-weight: bold;
color:white;
`;

export const Fields = styled.Text`
color:dodgerblue;
font-size: 15px;
flex: 1;
margin-left: 5px;
`;