// pages/disclose/disclose.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    name: '',
    phone: '',
    content: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  submit: function () {
    var vm = this;
    wx.request({
      url: app.globalData.url + 'discloses',
      data: {
        'name': this.data.name,
        'phone': this.data.phone,
        'contents': this.data.content,
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        var disclose_id = res.data;
        for (var i = 0; i < vm.data.files.length; i++) {
          wx.uploadFile({
            url: app.globalData.url + 'images',
            filePath: vm.data.files[i],
            name: 'img',
            formData: {
              'disclose_id': disclose_id
            },
            success: function (res) {
              console.log(res.data);
              vm.setData({
                name: '',
                phone: '',
                content: '',
                files: []
              });

            }
          })
        }
        wx.showToast({
          title: '成功',
          icon: 'success'
        })
      }
    })
  },
  bindNameInput: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindPhoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindContentInput: function (e) {
    this.setData({
      content: e.detail.value
    })
  }
})