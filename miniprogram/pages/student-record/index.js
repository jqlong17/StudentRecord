// miniprogram/pages/student-record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [{ name: '', status: {}, scores: {}, selected: false }],
    dates: [{ date: '日期1', remark: '', selected: false }],
    selectedDates: [],
    isDeletingDates: false // 新增状态标识是否在删除日期模式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 初始化数据
  },

  /**
   * 生命周期函数--监听页面初次染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  addStudent() {
    this.setData({
      students: [...this.data.students, { name: '', status: {}, scores: {}, selected: false }]
    });
  },

  deleteSelectedStudents() {
    const remainingStudents = this.data.students.filter(student => !student.selected);
    this.setData({
      students: remainingStudents
    });
  },

  toggleStudentSelection(event) {
    const index = event.currentTarget.dataset.index;
    const students = this.data.students;
    students[index].selected = !students[index].selected;
    this.setData({ students });
  },

  addDate() {
    const newDateIndex = this.data.dates.length + 1;
    this.setData({
      dates: [...this.data.dates, { date: `日期${newDateIndex}`, remark: '', selected: false }]
    });
  },

  toggleDeleteDatesMode() {
    this.setData({
      isDeletingDates: !this.data.isDeletingDates
    });
  },

  deleteSelectedDates() {
    const remainingDates = this.data.dates.filter(date => !date.selected);
    this.setData({
      dates: remainingDates,
      isDeletingDates: false // 退出删除模式
    });
  },

  toggleDateSelection(event) {
    if (!this.data.isDeletingDates) return; // 非删除模式下不处理
    const index = event.currentTarget.dataset.index;
    const dates = this.data.dates;
    dates[index].selected = !dates[index].selected;
    this.setData({ dates });
  },

  editStudentName(event) {
    const index = event.currentTarget.dataset.index;
    const newName = event.detail.value;
    this.setData({
      [`students[${index}].name`]: newName
    });
  },

  editStatus(event) {
    const { studentIndex, dateIndex } = event.currentTarget.dataset;
    const newStatus = event.detail.value;
    this.setData({
      [`students[${studentIndex}].status.${dateIndex}`]: newStatus
    });
  },

  editScore(event) {
    const { studentIndex, dateIndex } = event.currentTarget.dataset;
    const newScore = event.detail.value;
    this.setData({
      [`students[${studentIndex}].scores.${dateIndex}`]: newScore
    });
  },

  editDate(event) {
    if (this.data.isDeletingDates) return; // 删除模式下不允许编辑
    const index = event.currentTarget.dataset.index;
    wx.showModal({
      title: '编辑日期',
      content: '请输入新的日期',
      editable: true,
      placeholderText: this.data.dates[index].date,
      success: (res) => {
        if (res.confirm) {
          this.setData({
            [`dates[${index}].date`]: res.content
          });
        }
      }
    });
  },

  settings() {
    // 打开设置面板，设置单元格的枚举值
  }
});