class Vector {
	constructor (x_, y_) {
		if (x_ instanceof Vector) {
			this.x = x_.x || 0
			this.y = x_.y || 0
		} else if (item instanceof Array) {
			this.x = x_[0] || 0
			this.y = x_[1] || 0
		} else {
			this.x = x_ || 0
			this.y = y_ || 0
		}
	}
	dist (v2) {
		if (!(v2 instanceof Vector)) throw new TypeError("Dist function expects vector object.")
		return Math.sqrt(((this.x - v2.x)*(this.x - v2.x))+((this.y - v2.y)*(this.y - v2.y)))
	}
	add (x_, y_) {
		if (x_ instanceof Vector) {
			this.x += x_.x || 0
			this.y += x_.y || 0
		} else if (item instanceof Array) {
			this.x += x_[0] || 0
			this.y += x_[1] || 0
		} else {
			this.x += x_ || 0
			this.y += y_ || 0
		}
		return this
	}
	sub (x_, y_) {
		if (x_ instanceof Vector) {
			this.x -= x_.x || 0
			this.y -= x_.y || 0
		} else if (item instanceof Array) {
			this.x -= x_[0] || 0
			this.y -= x_[1] || 0
		} else {
			this.x -= x_ || 0
			this.y -= y_ || 0
		}
		return this
	}
	set (x_, y_) {
		if (x_ instanceof Vector) {
			this.x = x_.x || 0
			this.y = x_.y || 0
		} else if (item instanceof Array) {
			this.x = x_[0] || 0
			this.y = x_[1] || 0
		} else {
			this.x = x_ || 0
			this.y = y_ || 0
		}
		return this
	}
	copy () {
		return new Vector(this.x, this.y)
	}
	
}