<template>
  <div class="header">
    <div class="first">
      <div class="title">
        <a href="#" class="cize">LOOKFANTASTIC</a>
      </div>
      <div class="input">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="el-input"
          prefix-icon="el-icon-search"
          clearable
        >
        </el-input>
      </div>
      <div class="user">
        <el-button icon="el-icon-user">账户</el-button>
      </div>
      <div class="goods">
        <el-button icon="el-icon-goods">购物车</el-button>
      </div>
    </div>
    <div class="second">
      <div class="label">
        <div class="link">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 新品上市 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>护肤新品</el-dropdown-item>
              <el-dropdown-item>彩妆新品</el-dropdown-item>
              <el-dropdown-item>护发新品</el-dropdown-item>
              <el-dropdown-item>护体新品</el-dropdown-item>
              <el-dropdown-item>男士新品</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美容护肤 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/About">面部清洁</router-link>
              </el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美容护发 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>面部清洁</el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美容彩妆 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>面部清洁</el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美体防晒 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>面部清洁</el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美容护肤 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>面部清洁</el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link"> 美容护肤 </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>面部清洁</el-dropdown-item>
              <el-dropdown-item>口碑之选</el-dropdown-item>
              <el-dropdown-item>补水保湿</el-dropdown-item>
              <el-dropdown-item>皮肤护理</el-dropdown-item>
              <el-dropdown-item>特殊护理</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {},
};
</script>

<style>
.header {
  height: 136px;
}
.first {
  display: flex;
  height: 96px;
  position: absolute;

  width: 100%;
}
.title {
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  width: 205px;
  margin: 30px;
}
.cize {
  font-size: 25px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
}
.input {
  width: 440px;
  margin-left: 170px;
  margin-top: 30px;
  border: 1px solid #000;
  height: 40px;
  border-radius: 4px;
}
.user {
  margin-left: 110px;
  margin-top: 30px;
}
.goods {
  margin-left: 90px;
  margin-top: 30px;
}
.second {
  padding-top: 100px;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gray;
}
.label {
  border-top: 1px solid gray;
  margin-top: 5px;
  margin-bottom: 10px;
}
.link {
  width: 100%;
  padding-left: 50px;
  padding-top: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #000;
  font-size: 16px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 30px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
