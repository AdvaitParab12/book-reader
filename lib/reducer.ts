export const BooksReducer = (state:Book[],action:Action):Book[]=>{
    switch(action.type){
        case 'add':
            const book ={
                id:crypto.randomUUID(),
                title:action.payload.title,
                author:action.payload.author,
                rating:0
            }
            return [book,...state]
        case 'delete':
            return state.filter(book=>book.id!==action.payload.id)
        case 'like':
            return state.map(book=>{
                if(book.id===action.payload.id){
                    return {...book,rating:book.rating+1}
                }
                return book
            })
        case 'unlike':
            return state.map(book=>{
                if(book.id===action.payload.id){
                    return {...book,rating:book.rating-1}
                }
                return book
            })
            case 'sort':
                return [...state].sort((a,b)=>b.rating-a.rating)
        default:
            return state
    }
}