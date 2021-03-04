<template>
  <div>
    <div class="calendar_head">
      <div class="onecale">
          <h2>{{decorateYear}}{{decorateMonth}}</h2>
        <ul class="calendarWeek">
          <li v-for="item in weekName" :key="item">{{item}}</li>
        </ul>
        <ul class="calendarDay">
          <li v-for="item in MonthFirstWeek-1" :key="item+' '"></li>
          <li v-for="item in renderDay" :key="item" :class="{nowday:item == nowDay}">{{item}}</li>
        </ul>
      </div>
      <div class="twocale">
          <h2>{{decorateYear}}{{NextDecorateMonth}}</h2>
        <ul class="calendarWeek">
          <li v-for="item in weekName" :key="item">{{item}}</li>
        </ul>
        <ul class="calendarDay">
          <li v-for="item in nextMothFirstDay-1" :key="item+' '"></li>
          <li v-for="item in nextRenderDay" :key="item" >{{item}}</li>
        </ul>
      </div>
    <p style="text-align:left">グレーの日は定休日になります。※ご注文は24時間年中無休で受け付けております。 </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    weekName: {
      type: Array,
      default: function () {
        return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
      }
    },
    defaultRest: Array,
    default: function () {
      return [0, 6]
    },
    custom: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created: function () {
    this.getDate()
    this.setDate()
    this.getMonthFirstDay()
    this.getNextMonthFirstDay()
    this.changeflag()
  },
  mounted: function () {
    this.renderRest()
    this.customRest()
  },
  data: function () {
    return {
      nowDate: Date,
      nowYear: 0,
      nowMonth: 0,
      nowDay: 0,
      MonthFirstWeek: Date,
      nextMothFirstDay: Date,
      renderDay: 0,
      nextRenderDay: 0,
      month_olympic: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_normal: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
  },
  methods: {
    getDate: function () {
      this.nowDate = new Date()
    },
    setDate: function () {
      this.nowYear = this.nowDate.getFullYear()
      this.nowMonth = this.nowDate.getMonth()
      this.nowDay = this.nowDate.getDate()
    },
    getMonthFirstDay: function () {
      this.renderDay = this.getMonth()
      this.MonthFirstWeek = new Date(this.nowYear, this.nowMonth, 1).getDay()
      if (this.MonthFirstWeek === 0) {
        this.MonthFirstWeek = 7
      }
    },
    getNextMonthFirstDay: function () {
      this.nextRenderDay = this.getMonth(1)
      this.nextMothFirstDay = new Date(this.nowYear, this.nowMonth + 1, 1).getDay()
      if (this.nextMothFirstDay === 0) {
        this.nextMothFirstDay = 7
      }
    },
    getMonth: function (num = 0) {
      if (this.nowYear % 4 === 0) {
        return this.month_olympic[this.nowMonth + num]
      } else {
        return this.month_normal[this.nowMonth + num]
      }
    },
    renderRest: function () {
      const arr = document.querySelectorAll('.calendarDay')[0].childNodes
      const nextarr = document.querySelectorAll('.calendarDay')[1].childNodes
      for (let i = 6; i < arr.length; i += 7) {
        arr[i].setAttribute('class', 'restDay')
      }
      for (let i = 6; i < nextarr.length; i += 7) {
        nextarr[i].setAttribute('class', 'restDay')
      }
    },
    customRest: function () {
      const arr = [...document.querySelectorAll('.calendarDay')[0].childNodes]
      arr.splice(0, this.MonthFirstWeek - 1)
      arr.map((item) => {
      })
    },
    changeflag () {
      if (this.nowMonth === 1) {
        this.flag = true
      }
    }
  },
  computed: {
    decorateMonth: function () {
      return this.nowMonth + 1 + ' 月'
    },
    decorateYear: function () {
      return this.nowYear + ' 年 '
    },
    NextDecorateMonth: function () {
      return this.nowMonth + 2 + ' 月'
    }
  }
}
</script>
<style lang="less" scoped>
.calendar_head{
  text-align: center;
  h2{
    margin: 0;
  }
}
.twocale{
  margin-top: 20px;
}
.calendarWeek{
  display: flex;
  justify-content: space-around;
}
.calendarDay{
  display: flex;
  flex-wrap: wrap;
  li{
    width:14.2% ;
    height: 30px;
    line-height: 30px;
    align-content: center;
  }
}
.nowday{
  background: skyblue;
}
.restDay{
 background-color: #bebebe;
}
</style>
