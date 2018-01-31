// pages/appointment/appointment.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    phone: "",
    date: "",
    time: "",
    address: "",
    project: ""
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
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
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
  bindAddressInput: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindProjectInput: function (e) {
    this.setData({
      project: e.detail.value
    })
  },
  submit: function () {
    var vm = this;
    wx.request({
      url: app.globalData.url + 'appointments',
      data: {
        'name': this.data.name,
        'phone': this.data.phone,
        'date':this.data.date,
        'time':this.data.time,
        'address':this.data.address,
        'project':this.data.project,
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data);
        vm.setData({
          name: '',
          phone: '',
          date: '',
          time: '',
          address:'',
          project:'',
        });
        wx.showToast({
          title: '成功',
          icon: 'success'
        })
      }
    })
  },
})