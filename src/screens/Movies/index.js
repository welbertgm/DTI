import React, { useContext, useState, useEffect } from "react";
import {
    Container, LoadingIcon, MoviesListArea, MoviesList, FilterArea, Input,
    InputArea, ButtomFilter, InputContainer, RowView, ButtomOrderMovies,
    Label
} from './styles';
import { UserContext } from '../../contexts/UserContext';
import MovieItems from "../../components/listItems/movies";
import MoviesApi from '../../proxy/Movies'
import { Alert, RefreshControl } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text'

export default () => {

    const [moviesList, setMoviesList] = useState([])
    const [loading, setLoading] = useState(false)
    const [refreshing, setRefreshing] = useState(false);
    const [order, setOrder] = useState('ASC');
    const [movieYear, setMovieYear] = useState('');
    const [movieTitle, setMovieTitle] = useState('');


    const getMovies = async () => {



    }

    const onFilterClick = async () => {

        if (movieTitle === '') {
            Alert.alert('IMDb', 'Informe o nome do filme!')
            return
        }

        if ((movieYear.length > 0) && (movieYear.length < 4)) {
            Alert.alert('IMDb', 'Informe o ano com os quatro digitos!')
        }

        try {
            setMoviesList([])
            setLoading(true)
            const res = await MoviesApi.get(movieTitle, movieYear)
            setLoading(false)
            if (res.Response == 'True') {
                setMoviesList(res.Search)
            } else {
                setMoviesList([])
                Alert.alert('IMDb', 'Filme não encontrado!')
            }

        } catch (error) {
            setMoviesList([])
            setLoading(false)
        }

    }

    useEffect(() => {
        getMovies();
    }, []);

    const onRefresh = React.useCallback(async () => {
        try {
            setRefreshing(true);
            await getMovies();
            setRefreshing(false);
        } catch (err) {
            Toast.error('Ops!!!Não consegui acessar o servidor!');
        }

    }, [refreshing])


    const OnSortButtonClick = () => {
        setOrder( order === 'ASC'?'DESC':'ASC')
        
        if (moviesList.length === 0) {
            return
        }

        let _tempList = moviesList
        if (order === 'ASC') {
            _tempList.sort(function (a, b) {
                if (a.Title < b.Title) {
                    return -1;
                } else {
                    return true;
                }
            })
        } else {
            _tempList.sort(function (a, b) {
                if (a.Title > b.Title) {
                    return -1;
                } else {
                    return true;
                }
            })
        }
        setMoviesList(_tempList)
    }

    return (
        <Container>
            <FilterArea>
                <InputArea>
                    <Input placeholder='Nome do filme'
                        placeholderTextColor="white"
                        value={movieTitle}
                        onChangeText={(t) => setMovieTitle(t)}
                    />
                </InputArea>
                <RowView>
                    <InputContainer>
                        <TextInputMask
                            style={{ flex: 1, marginLeft: 10 }}
                            type={'datetime'}
                            options={{ format: 'DD/MM/YYYY' }}
                            placeholder={'Ano do filme'}
                            placeholderTextColor="white"
                            value={movieYear}
                            onChangeText={text => setMovieYear(text)} />
                    </InputContainer>
                    <ButtomFilter onPress={() => onFilterClick()}>
                        <Feather name="search" size={24} color="black" />
                    </ButtomFilter>
                </RowView>
                <RowView>
                    <Label>Title</Label>
                    <ButtomOrderMovies onPress={OnSortButtonClick}>
                        {
                            order === 'ASC' ?
                                <MaterialCommunityIcons name="sort-variant" size={24} color="black" />
                                :
                                <MaterialCommunityIcons name="sort-reverse-variant" size={24} color="black" />
                        }
                    </ButtomOrderMovies>
                </RowView>
            </FilterArea>

            {
                loading && <LoadingIcon size="large" />
            }
            <MoviesListArea>
                <MoviesList
                    data={moviesList}
                    numColumns={2}
                    keyExtractor={(item) => item.imdbID}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                    renderItem={(obj) => {
                        return (
                            <MovieItems key={obj.item.imdbID} data={obj.item} />
                        )
                    }
                    } />



            </MoviesListArea>
        </Container>


    )
}
