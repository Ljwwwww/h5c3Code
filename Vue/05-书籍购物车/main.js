const app = new Vue({
	el: '#app',
	data: {
		books: [
		  {
			  id: 1,
			  name: '算法导论',
			  date: '2006-9',
			  price: 85.00,
			  count: 1
		  },
		  {
			  id: 2,
			  name: 'java伦理',
			  date: '2006-9',
			  price: 75.00,
			  count: 1
		  },
		  {
			  id: 3,
			  name: 'c#',
			  date: '2006-9',
			  price: 155.00,
			  count: 1
		  }
		]
	},
	computed:{
		totalPrice() {
			return this.books.reduce(function(preValue,books) {
				return preValue + books.price * books.count
			},0)
		}
	},
	methods: {
		removeId(index) {
			this.books.splice(index,1);
		},
		totalMoney(index) {
			return this.books[index].price * this.books[index].count
		}
	},
	// 过滤器
	filters: {
		showPrice(price) {
			return '$' + price.toFixed(2)
		}
	}
	
})