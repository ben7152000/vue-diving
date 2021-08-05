export default {
  methods: {
    // 儲存購物車
    setLocalStorage (cartInfo) {
      return window.localStorage.setItem('cart', JSON.stringify(cartInfo))
    },
    // 讀取購物車
    getLocalStorage () {
      return JSON.parse(window.localStorage.getItem('cart') || {})
    },
    // 檢查購物車
    checkStatus () {
      const { isPost = null } = this.getLocalStorage()
      if (isPost) {
        this.$message({
          message: '上次購物未完成，請先完成訂單',
          type: 'error'
        })
        return false
      }
      return true
    },
    // 新增購物車
    addToCart (course, form) {
      if (!this.checkStatus()) return
      const addData = {
        courseId: course.id,
        qty: form.selectedNum,
        title: course.title,
        price: course.price,
        img: course.img,
        unit: course.unit,
        date: form.date,
        time: form.time
      }

      const { cartList = [] } = this.getLocalStorage()
      if (!cartList.length) {
        cartList.push(addData)
        this.$message.success('商品已加入購物車')
      }
    }
  }
}
