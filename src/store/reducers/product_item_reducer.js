const LOAD_PRODUCT = "LOAD_PRODUCT"

const inicial_state ={}

export const oneProductReducer = ( state = inicial_state, action )=>{
  

  if(action.type === LOAD_PRODUCT){
    return action.payload
  }
        return state
    }

    export const oneProdAction = payload=>({type:LOAD_PRODUCT,payload})