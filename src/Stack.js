class Stack {
	constructor () {
		this.value = []
        this.top = this.value[0]
        this.size = this.value.length
        this.isEmpty = this.value.length === 0
	}
	init () {
		this.top = this.value[0]
        this.size = this.value.length
        this.isEmpty = this.value.length === 0
	}
	push (item) {
		this.value.unshift(item)
		init()
		return this.size
	}
	push () {
		let out = this.value.shift()
		init()
		return out
	}
}