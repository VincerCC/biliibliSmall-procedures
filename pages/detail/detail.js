// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo:[],
    OthersList:[],
    CommentList:[]
  },
  getVideo(id){
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id='+id,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success:(res)=>{
        // success
        if(res.data.code===0){
          this.setData({
            videoInfo:res.data.data.videoInfo
          })
        }
        console.log(res.data.data.videoInfo)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getCommentList(id){
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id='+id,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success:(res)=>{
        if(res.data.code===0){
          this.setData({
            CommentList:res.data.data.commentData
          })
        }
        console.log(res.data.data.commentData)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getOthersList(id){
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id='+id,
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success:(res)=>{
        if(res.data.code===0){
          this.setData({
            OthersList:res.data.data.othersList
          })
        }
        console.log(res.data.data)
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
    //通过options可以获取到外部传过来的信息
    this.getVideo(options.id)
// console.log(options.id);
    this.getOthersList(options.id)
    this.getCommentList(options.id)
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