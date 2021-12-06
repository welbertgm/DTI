import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
background-color:black;
flex-direction:column;
`;

export const LoadingIcon = styled.ActivityIndicator`
margin-top:50px;
color:dodgerblue;
`;

export const MoviesListArea = styled.View`
flex:1;
`;

export const MoviesList = styled.FlatList`
margin-top:5px;
margin-bottom:5px;
margin-left:5px;
margin-right:5px;
flex-basis:0;
flex-grow: 1;
flex:1;
padding: 5px;
width:100%;
`;


export const FilterArea = styled.View`
flex-direction: column;
padding: 10px;
background-color: silver;
height: 160px;
`;
export const InputArea = styled.View`
border-radius: 20px;
border-width: 1px;
height: 40px;
`;

export const Input = styled.TextInput.attrs(props => ({    
    type: "numeric"}))`
flex:1;
font-size:16px;
color:black;
margin-left:10px;
margin-right:10px;
`;

export const ButtomFilter = styled.TouchableOpacity`
margin-left:5px;
margin-right:10px;
align-content:center;
justify-content:center;
padding:5px;
`;

export const RowView = styled.View`
flex-direction: row;
height: 40px;
margin-top: 10px;
`;

export const InputContainer = styled.View`
border-color: black;
border-style: solid;
border-width: 1px;
flex:1;
border-radius: 20px;
`;

export const ButtomOrderMovies = styled.TouchableOpacity`
margin-left:5px;
margin-right:10px;
align-content:center;
justify-content:center;
padding:5px;
`;

export const Label = styled.Text`
color:black;
text-align: center;
text-align-vertical:center;
`;
