import { GET_PRODUCTS_DETAIL } from '../store/types.js'

export default {
	[GET_PRODUCTS_DETAIL]:function(state,detail){
		console.log(detail)
		state.details = detail
	},
	
}