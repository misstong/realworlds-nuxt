export default function({ store, redirect }) {
	console.log('mid',store.state.user)
	if(!store.state.user){
		console.log('middleware',store.state.user)
		return redirect('/login')
	}
}