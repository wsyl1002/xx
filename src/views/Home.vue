<template>
  <div class="home">
    <el-main>
      <div>
        <el-carousel height="500px" ref="carousel">
          <el-carousel-item v-for="item in image" :key="item.id">
            <div>
              <img :src="item.img" alt="" />
              <span @click.stop="chooseCard(item.id)"
                ><h2>{{ item.title }}</h2></span
              >
              <span>{{ item.list }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="middle">
        <div class="m-t">
          <h2 class="fz">最新上架</h2>
        </div>
        <div>
          <el-row>
            <el-col :span="6" v-for="(item, index) in goods" :key="index">
              <el-card :body-style="{ padding: '20px' }" shadow="never">
                <img :src="item.img" alt="" />
                <div style="padding: 5px">
                  <span>{{ item.title }}</span>
                  <div class="bottom clearfix">
                    <span>¥{{ item.price }}</span>
                    <el-button class="button">购买正品</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>

          <div class="bot">
            <el-row>
              <el-col :span="8" v-for="(item, index) in cart" :key="index">
                <el-card :body-style="{ padding: '20px' }" shadow="never">
                  <img :src="item.img" alt="" />
                  <div style="padding: 5px">
                    <span
                      ><h3>{{ item.title }}</h3></span
                    >
                    <el-divider></el-divider>
                    <div class="bottom clearfix">
                      <h5>{{ item.list }}</h5>
                      <el-button class="button">购买正品</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div>
          <div class="m-t">
            <h2 class="fz">大家都在买</h2>
          </div>
          <div>
            <el-row>
              <el-col :span="6" v-for="(item, index) in btn" :key="index">
                <el-card :body-style="{ padding: '20px' }" shadow="never">
                  <img :src="item.img" alt="" />
                  <div style="padding: 5px">
                    <span
                      ><h3>{{ item.title }}</h3></span
                    >
                    <div class="bottom clearfix">
                      <span>¥{{ item.price }}</span>
                      <el-button class="button">购买正品</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>

        <div>
          <div class="m-t">
            <h2 class="fz">博客与微信</h2>
          </div>
          <div>
            <el-row>
              <el-col :span="6" v-for="(item, index) in ban" :key="index">
                <el-card :body-style="{ padding: '20px' }" shadow="never">
                  <img :src="item.img" alt="" width="100%" />
                  <div style="padding: 5px">
                    <span class="span"
                      ><h3>{{ item.title }}</h3></span
                    >
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: [
        {
          id: 0,
          img: require("../assets/images/swiper1(2).jpg"),
          title: "圣诞集市",
          list:
            "想要选购到最完美的圣诞礼物吗？LOOKFANTASTIC为您精选了各种各样精美的礼盒套装，快来为自己和亲朋好友们选购一份惊喜与快乐吧！",
        },
        {
          id: 1,
          img: require("../assets/images/swiper1(3).jpg"),
          title: "ESPA 圣诞套装",
          list: "与ESPA一起尽享圣诞欢愉",
        },
      ],
      goods: [
        {
          id: 0,
          img: require("../assets/images/list1.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 1,
          img: require("../assets/images/list2.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 2,
          img: require("../assets/images/list3.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 3,
          img: require("../assets/images/list4.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 4,
          img: require("../assets/images/list5.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 5,
          img: require("../assets/images/list6.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 6,
          img: require("../assets/images/list7.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
        {
          id: 7,
          img: require("../assets/images/list8.jpg"),
          title: "Philip Kingsley A Body and Volume Story",
          price: 395.55,
        },
      ],
      cart: [
        {
          id: 0,
          img: require("../assets/images/cart1.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
        {
          id: 1,
          img: require("../assets/images/cart2.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
        {
          id: 2,
          img: require("../assets/images/cart3.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
        {
          id: 3,
          img: require("../assets/images/cart4.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
        {
          id: 4,
          img: require("../assets/images/cart5.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
        {
          id: 5,
          img: require("../assets/images/cart6.jpg"),
          title: "圣诞日历",
          list:
            "一份圣诞日历陪您一起等待圣诞的到来，为等待中的每一天增添多一份惊喜！",
        },
      ],
      btn: [
        {
          id: 0,
          img: require("../assets/images/bt1.jpg"),
          title: "NUXE 欧树圣诞日历",
          price: 377,
        },
        {
          id: 1,
          img: require("../assets/images/bt2.jpg"),
          title: "NUXE 欧树圣诞日历",
          price: 377,
        },
        {
          id: 2,
          img: require("../assets/images/bt3.jpg"),
          title: "NUXE 欧树圣诞日历",
          price: 377,
        },
        {
          id: 3,
          img: require("../assets/images/bt4.jpg"),
          title: "NUXE 欧树圣诞日历",
          price: 377,
        },
      ],
      ban: [
        {
          id: 0,
          img: require("../assets/images/ban1.jpg"),
          title: "换季开买 | 你以为的耿直评价，实际上瞬间惹毛女生的一句话",
        },
        {
          id: 1,
          img: require("../assets/images/ban2.jpg"),
          title: "111Skin-美容界的高、精、尖代表",
        },
        {
          id: 2,
          img: require("../assets/images/ban3.jpg"),
          title: "成分党变美秘籍",
        },
        {
          id: 3,
          img: require("../assets/images/ban4.jpg"),
          title: "掌上购物更方便",
        },
      ],

      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        // ...
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        // ...
      },
    };
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {},
};
</script>
<style scoped>
.middle {
  width: 100%;
  margin-top: 80px;
}
.m-t {
  text-align: center;
}
.fz {
  font-size: 20px;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
  margin-right: 30px;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.bot {
  margin-top: 80px;
}
</style>
