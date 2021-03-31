<template>
  <div>
    <ul class="ac">
      <li v-for="(item,i) in list" :key="i">
        <h3>{{item}}</h3>
        <div class="nr" @click="add(i)">
          <li v-for="(item,i) in aaaa" :key="i" v-show="item.id==i">{{item.conter}}</li>
          <div class="se" v-show="i==index">
            <div class="wzy1">
              <button @click.stop="xxx">关闭</button>
              <h2>{{item}}</h2>
              <ul>
                <li v-for="(item,i) in aaaa" :key="i" v-show="item.id==index">
                  {{item.conter}}
                  <button v-if="flag" @click="btn">完成</button>
                  <span v-else>已完成</span>
                  <button @click="del(item)">删除</button>
                </li>
              </ul>
              <p>
                <input type="text" v-model="conter" />
                <button @click.stop="tj(i)">添加</button>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import selc from "../components/selec";
export default {
  components: { selc },
  name: "",
  data() {
    return {
      list: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],

      flag: true,
      index: 0,
      conter: "",
      aaaa: [],
    };
  },
  created() {},
  methods: {
    // 弹出表单
    xxx() {
      this.index = -1;
    },
    tj(i) {
      let obj = {
        conter: this.conter,
        id: i,
      };
      this.aaaa.push(obj);
      this.conter = "";
    },
    add(i) {
      this.$store.commit("aa");
      this.index = i;
      console.log(i);
    },
    btn() {
      this.flag = false;
    },
    del(item) {
      this.aaaa.forEach((val, i) => {
        if (val == item) {
          this.aaaa.splice(i, 1);
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.ac {
  list-style: none;
  width: 100%;
  display: flex;
  li {
    flex: 1;
    margin: 0;
    padding: 0;
    .nr {
      height: 120px;
      width: 100%;
      border: 1px solid #000;
      margin: 0;
    }
    h3 {
      text-align: center;
      background-color: rgb(177, 164, 164);
    }
  }
}
.se {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.1);
  .wzy1 {
    margin: 30px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    p {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>