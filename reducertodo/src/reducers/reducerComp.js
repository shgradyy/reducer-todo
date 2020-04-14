export const initialTodoState = {
    input: '',
    list: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
};


const simpReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                input: action.payload
            };
        case 'ADD_ITEM':
            if (state.input !== '') {
                return {
                    ...state,
                    list: [
                        ...state.list,
                       {
                           item: action.payload,
                           completed: false,
                           id: Date.now()
                       }
                    ],
                    input: ''
                };
            }
            return state;
        case 'REMOVE_ITEM':
            return {
                ...state,
                list: state.list.filter(item => item.ed !== action.payload)
            };
        case 'COMPLETE_ITEM':
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === action.payload ? {...item, completed: !item.completed}
                    : item
                )
            };
        case 'ROMOVE_COMPLETED':
            return {
                ...state,
                list: state.list.filter(item => !item.completed)
            };
        default:
            return state;
    }
  }