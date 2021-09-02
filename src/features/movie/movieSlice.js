import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import db from '../../firebase';

const initialState= {
    movies: []
}

export const fetchMovies= createAsyncThunk(
  'movie/fetchMovies', async() => {
  const temp = await db.collection("movies").get();
  return temp.docs.map((doc)=>{
    return {id: doc.id,...doc.data()}
  })
})


const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers: {
    },
    extraReducers: {
      [fetchMovies.fulfilled]: (state,{payload}) =>{
            state.movies=payload;
        }
      }
})

export const selectMovies=(state) =>state.movie.movies;

export default movieSlice.reducer;