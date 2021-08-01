<template>
  <el-row type="flex" justify="center" class="question-section">
    <el-col :xs="24" :md="20" :lg="16">
      <Breadcrumb name="政策與條款"/>
      <h3>非證照課程規範 ( 體驗 / 導潛 )</h3>
      <div class="question" v-for="experience in experiences" :key="experience.id">
        <h4>{{ experience.title }}</h4>
        <ul>
          <li v-for="(item, index) in experience.info" :key="index">{{ item }}</li>
        </ul>
      </div>
      <h3>國際證照課程規範</h3>
      <div
        class="question"
        v-for="course in courses"
        :key="course.id"
      >
        <h4>{{ course.title }}</h4>
        <p>{{ course.info }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
export default {
  name: 'Policies',
  components: {
    Breadcrumb
  },
  data () {
    return {
      experiences: [
        {
          id: '1',
          title: '個人因素取消',
          info: [
            '時間排定後，個人因素造成改期以一次為限',
            '當日時段僅保留15分鐘，逾時視同取消，如欲改為當日其他時段，將視同重新報名並收取原價費用。因教練排程皆須預先確認，現場是否可成功報名，須視當日狀況而定，恕無法保證',
            '前7-4天內取消或改期，每人需負擔一成行政處理費用',
            '前3天內取消，各項作業已排定，不可改期，且恕不退款'
          ]
        },
        {
          id: '2',
          title: '個人因素改期',
          info: [
            '前7-4天內改期，每人需負擔一成行政處理費用',
            '前3天內因各項作業已排定，改期視同取消，請重新預約報名'
          ]
        },
        {
          id: '3',
          title: '天災因素退款與延期',
          info: [
            '退款- 每人必須扣除一成行政處理費',
            '改期- 免費改期，時效不限，改期延伸成本由我們吸收',
            '如活動進行中遇天候狀況或其他事件影響行程安全時，教練有權終止課程'
          ]
        }
      ],
      courses: [
        {
          id: '1',
          title: '個人因素取消',
          info:
            '一旦完成報名程序，即完成教材訂購和教練預留，如因個人因素取消，將扣除全額訂金為取消費用，恕無法退款'
        },
        {
          id: '2',
          title: '個人因素改期',
          info:
            '於課程開始七日前通知改期，須另收課程全額的一成費用作為行政處理費，並以一次為限；七日內改期視同取消'
        },
        {
          id: '3',
          title: '個人因素中斷',
          info:
            '課程一旦開始，因個人因素經教練評估而無法完成課程者，恕不受理任何退款，但可重新安排檔期完成剩餘課程'
        },
        {
          id: '4',
          title: '轉讓課程名額',
          info: '在所有課程尚未開始前，可轉讓名額於其他人，並以一次為限'
        },
        {
          id: '5',
          title: '補考',
          info:
            '所有課程已完成但未通過證照測驗者，可以海洋複習進行補考，需視補課狀況另計費用'
        },
        {
          id: '6',
          title: '不可抗力之天災因素',
          info:
            '如地震、颱風、豪雨、潮汐變化等，可退款或擇期進行，可重新預約上課時間完成課程，不另收額外費用，若選擇取消需扣除一成行政處理費（客服溝通、人事安排、帳務處理等作業雜項成本）'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.question-section {
  padding: 30px;
  position: relative;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
  );
}

h3 {
  font-size: 24px;
  line-height: 46px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #ffc66c;
}

h4 {
  margin: 10px 0;
}

ul {
  margin-left: 20px;
}

li,
p {
  letter-spacing: 1px;
  line-height: 30px;
}

.question {
  margin-bottom: 30px;
}

/* sm */
@media only screen and (min-width: 768px) {
  .question-section {
    padding: 30px 80px;
  }
}

/* md */
@media only screen and (min-width: 992px) {
  .question-section {
    padding: 30px 120px;
  }
}
</style>
