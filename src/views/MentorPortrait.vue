<template>
    <el-card shadow="always" id="card">
        <!--        操作栏-->

        <div style="text-align: center;margin-left: -200px">
            <div style="display:inline;">
                <span>单位名称</span>
                <el-select size="default" v-model="CompanyName" placeholder="全部" style="margin-left: 10px">
                    <el-option
                            v-for="item in optionsForCompanyName"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div style="display:inline;">
                <span style="margin-left: 20px">导师类别</span>
                <el-select size="default" style="margin-left: 10px" v-model="MentorCategory" placeholder="全部">
                    <el-option
                            v-for="item in optionsForMentorCategory"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div style="display:inline;">
                <span style="margin-left: 20px">姓名</span>
                <el-input size="default" style="position: absolute;margin-left: 10px;width: 200px" v-model="name"
                          placeholder="请输入姓名" class="input" clearable></el-input>
            </div>
        </div>
        <div style="margin-top: 20px;margin-left: 1000px;">
            <el-button size="default">重置</el-button>
            <el-button type="primary" size="default">搜索</el-button>
        </div>
    </el-card>
    <div style="background-color: rgba(128,128,128,0.58)">
        <ul class="list BanXing">
            <li v-for="item in teachers" :key="item.id" @click="goDetails(item.id)"
                style="border-radius: 4px;margin-left: 20px;margin-top: 20px;">
                <div>
                    <img class="image" :src="item.src">
                </div>
                <div class="name">{{ item.name }}</div>
                <div class="company">{{ item.company }}</div>
                <div class="btn">查看更多</div>
            </li>
        </ul>
    </div>


</template>


<script>
    export default {
        methods: {
            //跳转到详情页
            goDetails(id) {
                this.$router.push({path:"/details",query:{id}})
            }
        },
        data() {
            return {
                name: '',
                optionsForCompanyName: [{
                    value: '选项1',
                    label: '计算机与电子信息学院'
                }],
                optionsForMentorCategory: [
                    {
                        value: '选项1',
                        label: '硕士研究生导师'
                    },
                    {
                        value: '选项2',
                        label: '博士研究生导师'
                    },
                    {
                        value: '选项3',
                        label: '博士后合作导师'
                    }
                ],
                CompanyName: '',
                MentorCategory: '',
                teachers: [
                    {
                        id: 1,
                        name: '张三',
                        company: '计算机与电子信息学院',
                        src: require('../assets/test.jpeg')
                    },
                    {
                        id: 2,
                        name: '李四',
                        company: '计算机与电子信息学院',
                        src: require('../assets/test.jpeg')
                    },
                    {
                        id: 3,
                        name: '王五',
                        company: '计算机与电子信息学院',
                        src: require('../assets/test.jpeg')
                    },
                    {
                        id: 4,
                        name: '赵六',
                        company: '计算机与电子信息学院',
                        src: require('../assets/test.jpeg')
                    },

                ],
            }
        }
    }
</script>

<style lang="less" scoped>
  .BanXing {
    width: 1200px;
    margin: auto;
  }

  .image {
    width: 70%;
    display: block;
    margin: 10px auto;
    padding-left: -10px;
    padding-right: -10px;
    border-radius: 4px
  }

  .list {
    border-radius: 4px;

    li {
      float: left;
      list-style-type: none;
      padding-bottom: 32px;
      width: 150px;
      height: 80%;
      background-color: aliceblue;
      cursor: pointer;
      position: relative;
      top: 0;

      img {
        display: block;
        margin-bottom: 15px;
      }

      .name {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 5px;
        text-align: center;
      }

      .company {
        font-weight: bold;
        color: #fd604d;
        text-align: center;
        margin-bottom: 2px;
      }

      .btn {
        width: 100px;
        text-align: center;
        font-size: 12px;
        font-weight: 300;
        color: #0a328e;
        border: 1px solid #0a328e;
        margin: auto;
      }

      &:hover {
        .btn {
          background-color: #0a328e;
          color: #f0f0f0;
        }

        top: -5px;
        transition: top 0.2s linear;
      }
    }
  }

  #card {
    width: 80%;
    padding: 20px;
    background-color: rgba(255, 255, 255, .95);
    border-radius: 4px;
    display: flex;
    margin: 100px auto auto;;
  }

  #card_1 {
    width: 90%;
    margin: auto;
  }
</style>