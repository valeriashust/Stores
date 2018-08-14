export const ADD_STORE = 'ADD_STORE';
export const EDIT_STORE = 'EDIT_STORE';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';

export const addStore = store => (
    {
        type: 'ADD_STORE',
        store,
    }
);

export const editStore = (id, newInfo) => (
    {
        type: 'EDIT_STORE',
        id,
        newInfo,
    }
);

export const setLoading = () => (
    {
        type: 'SET_LOADING'
    }
);

export const setError = state => (
    {
        type: 'SET_ERROR',
        state,
    }
);

export const setSuccess = state => (
    {
        type: 'SET_SUCCESS',
        state,
    }
);
