<template>
  <div
    style="
      margin: 10px 0px 0px 0px;
      padding: 10px;
      background-color: aliceblue;
      height: 7.3rem;
    "
  >
    <!--      功能区域-->
    <div style="margin: 10px 0">
      <!-- <el-button type="primary" @click="add">新增</el-button> -->
    </div>
    <!--      搜索区域-->
    <div style="margin: 10px 0">
      <el-input
        v-model="search"
        placeholder="键入关键字"
        style="width: 20%"
        clearable
      ></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load"
        >查询</el-button
      >
      <el-button type="primary" @click="exportRecords">导出</el-button>
    </div>
    <!--        表格-->
    <el-table
      :data="tableData"
      :cell-style="{ 'text-align': 'center' }"
      :header-cell-style="{ 'text-align': 'center' }"
      stripe
      border
      style="width: 100%; height: 6.2rem"
      fit
    >
      <el-table-column prop="id" label="编号" sortable width="50%" />
      <el-table-column prop="uid" label="学号" />
      <!-- <el-table-column prop="name" label="姓名" width="90%" /> -->
      <el-table-column prop="course_name" label="课程名" width="150%" />
      <el-table-column prop="course_score" label="成绩" sortable width="70%" />
      <el-table-column prop="grade_point" label="绩点" sortable width="70%" />
      <el-table-column prop="term" label="学期" width="100%" />
      <el-table-column fixed="right" label="操作" width="130%">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)">
            编辑
          </el-button>
          <el-popconfirm
            title="你确定这么做吗?此操作无法恢复!"
            @confirm="handleDelete(scope.row.id)"
          >
            <template #reference>
              <el-button type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!--        分页-->
    <div style="margin: 10px 0">
      <el-pagination
        v-model:currentPage="pageInfo.pageNum"
        :default-page-size="10"
        :page-size="pageInfo.pageSize"
        :page-sizes="[10, 20, 50]"
        :total="total"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <!--            弹窗-->
      <el-dialog v-model="dialogVisible" title="新增人员" width="30%" draggable>
        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="form.userName" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="form.email" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="高考成绩">
            <el-input v-model="form.score_hs" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="学期成绩">
            <el-input v-model="form.score_course" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input
              type="textarea"
              v-model="form.address"
              style="width: 80%"
            ></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="danger" @click="dialogVisible = false"
              >取消</el-button
            >
            <el-button type="primary" @click="save">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

const small = ref(true);
const background = ref(true);
const disabled = ref(true);
// const url = "后端地址"
export default {
  name: "ProtratiCenter",
  methods: {
    exportRecords() {
      alert("前端干不了这个活儿");
    },
    load() {
      // axios.get(url + "/user", {
      //     params: {
      //         pageNum: this.pageInfo.pageNum,
      //         pageSize: this.pageInfo.pageSize,
      //         search: this.search
      //     }
      // }).then(res => {
      //     console.log(res)
      //     this.tableData = res.data.data.records
      //     this.total = res.data.data.total
      // })
    },
    save() {
      // //form有id为更新，否则为新增
      // if (this.form.id) {
      //     axios.put(url + "/user", this.form).then(res => {
      //         console.log(res)
      //         if (res.data.code === '0') {
      //             this.$message({
      //                 type: 'success',
      //                 message: '修改成功',
      //                 showClose: true
      //             })
      //             this.dialogVisible = false
      //             this.load()
      //         } else {
      //             this.$message({
      //                 type: "error",
      //                 message: '发生了未知错误：' + res.data.msg,
      //             })
      //         }
      //     })
      // } else {
      //     // 传数据到后台
      //     console.log(this.form)
      //     axios.post(url + "/user", this.form).then(res => {
      //         console.log(res)
      //         this.$message.success("添加成功")
      //         this.dialogVisible = false
      //         this.load()
      //     })
      // }
    },
    add() {
      console.log("新增被点击了");
      this.dialogVisible = true;
      this.form = {};
    },
    handleDelete(id) {
      // axios.delete(url + "/user/" + id).then(res => {
      //     console.log(res)
      //     if (res.data.code === "0") {
      //         this.$message.success('删除成功')
      //         this.load()
      //     } else {
      //         this.$message.error('未知错误' + res.data.msg)
      //         this.load()
      //     }
      // })
    },
    handleEdit(row) {
      console.log("编辑被点击了");
      this.form = JSON.parse(JSON.stringify(row));
      this.dialogVisible = true;
    },
    handleSizeChange(newSize) {
      // 几条每页改变执行
      console.log("handleSizeChange called");
      this.pageInfo.pageSize = newSize;
      this.load();
    },
    handleCurrentChange(newPage) {
      //改变页码执行
      console.log("handleCurrentChange called");
      this.pageInfo.pageNum = newPage;
      this.load();
    },
  },
  data() {
    return {
      // 这是分页要用到的参数
      pageInfo: {
        pageNum: 1,
        pageSize: 3,
      },
      // 这是搜索的关键字
      search: "",
      form: {},
      dialogVisible: false,
      total: 8,
      tableData: [
        {
          id: 1,
          uid: "2022123",
          // name: "捍卫者",
          course_name: "人工智能导论",
          course_score: 80,
          grade_point: 3.0,
          term: "2022下学期",
        },
        {
          id: 2,
          uid: "2022123",
          // name: "张三",
          course_name: "中特理论与实践",
          course_score: 91,
          grade_point: 4.1,
          term: "2022下学期",
        },
        {
          id: 3,
          uid: "2022123",
          // name: "李四",
          course_name: "深度学习基础",
          course_score: 82,
          grade_point: 3.2,
          term: "2022下学期",
        },
        {
          id: 4,
          uid: "2022123",
          // name: "李四",
          course_name: "数学分析",
          course_score: 83,
          grade_point: 3.3,
          term: "2022下学期",
        },
        {
          id: 5,
          uid: "2022123",
          // name: "李四",
          course_name: "算法设计与分析",
          course_score: 84,
          grade_point: 3.4,
          term: "2022下学期",
        },
        {
          id: 6,
          uid: "2022123",
          // name: "李四",
          course_name: "应用密码学与网络安全",
          course_score: 86,
          grade_point: 3.6,
          term: "2022下学期",
        },
        {
          id: 7,
          uid: "2022123",
          // name: "李四",
          course_name: "云计算技术",
          course_score: 86,
          grade_point: 3.6,
          term: "2022下学期",
        },
        {
          id: 8,
          uid: "2022123",
          // name: "李四",
          course_name: "大数据技术",
          course_score: 85,
          grade_point: 3.5,
          term: "2022下学期",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-table-column {
  height: 60px;
}
</style>