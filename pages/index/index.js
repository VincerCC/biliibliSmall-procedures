Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航数据
    navList:[],
    //通过点击之后的那个下标控制样式
    currentActive:0,
    imgUrls:[],
    videoList:[]
  },
  getvideoList(){
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      success: (res)=>{
        // success
        console.log(res.data.data.videosList)
        // this.navlist=res.data.data.navList  小程序不能这样赋值，需要用this.setData

        if(res.data.code===0){
          //数据请求成功
          this.setData({
            videoList:res.data.data.videosList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  active(el){
    console.log(el)
    this.setData({
      currentActive:el.target.dataset.index
    })
  },
  getnavlist(){
    let that=this;
    //获取首页导航数据
    //利用小程序内置的获取ajax的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList#!method=GET&queryParameters=%5B%5D&body=&headers=%5B%5D',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res)=>{
        // success
        console.log(res.data.data.navList)
        // this.navlist=res.data.data.navList  小程序不能这样赋值，需要用this.setData

        if(res.data.code===0){
          //数据请求成功
          this.setData({
            navList:res.data.data.navList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getImgUrls(){
      wx.request({
        url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: (res)=>{
          // success
          if(res.data.code===0){
            console.log(res.data.data.swiperList)
            this.setData({
              imgUrls:res.data.data.swiperList
            })
          }
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getnavlist()//获取首页导航数据
    this.getImgUrls()//获取轮播图数据
    this.getvideoList()//获取视频列表数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})