Page({
  data: {
    students: [
      { name: '张三', status1: 'A+', status2: '已交', status3: '优' },
      { name: '李四', status1: '良', status2: '未交', status3: '已交' },
      { name: '王五', status1: '中', status2: 'A+', status3: '良' },
      // 添加更多学生数据
    ],
    currentCell: null,
    deleteMode: false,
    selectedRows: new Set(),
  },

  showMenu: function (event) {
    const cell = event.currentTarget;
    this.setData({ currentCell: cell });
    // 显示状态菜单
  },

  setStatus: function (status) {
    const { currentCell } = this.data;
    if (currentCell) {
      currentCell.textContent = status; // 更新状态
      // 更新状态颜色
    }
  },

  addRow: function () {
    const newStudent = { name: '新学生', status1: '未交', status2: '未交', status3: '未交' };
    this.setData({
      students: [...this.data.students, newStudent]
    });
  },

  toggleDeleteMode: function () {
    this.setData({ deleteMode: !this.data.deleteMode });
  },

  confirmDelete: function () {
    // 删除选中的行
  },

  editName: function (event) {
    const cell = event.currentTarget;
    // 编辑学生姓名
  },

  editDate: function (event) {
    const cell = event.currentTarget;
    // 编辑日期
  },

  // 其他功能函数...
});
