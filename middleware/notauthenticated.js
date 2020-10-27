export default function({ store, redirect }) {
	if(store.state.user){
		console.log('middleware',store.state.user)
		return redirect('/')
	}
}