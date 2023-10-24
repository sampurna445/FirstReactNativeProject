import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {kApiUrlEndpoint} from './WebServices';

export const todosApiUsingRTKQuery = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({baseUrl: kApiUrlEndpoint}),
  endpoints: builder => ({
    getTodos: builder.query({
      query: name => '/todos',
    }),
  }),
});

export const {useGetTodosQuery} = todosApiUsingRTKQuery;
