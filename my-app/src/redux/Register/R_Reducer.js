import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "./R_type"

const initialState={
    loading:false,
    users:[],
    error:'',
    active:""

}

const reducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case REGISTER_USER_REQUEST:
            return{
                ...state,
                loading:true

            }

            case REGISTER_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
                
            }
            case REGISTER_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
                
            }
            case "active":
                return{
                    ...state,active:action.payload
                }
            default: return state
    }
}
export default reducer