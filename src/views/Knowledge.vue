<template>
  <section>
    <Breadcrumb name="潛水知識"/>
    <Subtitle subtitle="潛水知識"/>
    <KnowledgeList />
    <KnowledgeCard
      v-for="knowledgeInfo in knowledgeInfos"
      :key="knowledgeInfo.id"
      :knowledgeInfo="knowledgeInfo"
    />
  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import KnowledgeList from '../components/KnowledgeList'
import KnowledgeCard from '../components/KnowledgeCard'
export default {
  name: 'Knowledge',
  components: {
    Breadcrumb,
    Subtitle,
    KnowledgeList,
    KnowledgeCard
  },
  data () {
    return {
      knowledgeInfos: [
        {
          id: '1',
          title: '規劃屬於自己的潛水旅遊',
          subtitle: '去不一樣的地方走走',
          desc: '相較於一般的旅遊活動，從事戶外休閒旅遊活動總是需要比較多的考量與準備，尤其是潛水旅遊，除了最基本的交通食宿之外，還有潛水中心、參加人員以及裝備支援的安排問題，要如何規劃一趟潛水旅遊呢！',
          img: 'knowledge-1.jpeg'
        },
        {
          id: '2',
          title: '規劃屬於自己的潛水旅遊',
          subtitle: '去不一樣的地方走走',
          desc: '相較於一般的旅遊活動，從事戶外休閒旅遊活動總是需要比較多的考量與準備，尤其是潛水旅遊，除了最基本的交通食宿之外，還有潛水中心、參加人員以及裝備支援的安排問題，要如何規劃一趟潛水旅遊呢！',
          img: 'knowledge-1.jpeg'
        },
        {
          id: '3',
          title: '規劃屬於自己的潛水旅遊',
          subtitle: '去不一樣的地方走走',
          desc: '相較於一般的旅遊活動，從事戶外休閒旅遊活動總是需要比較多的考量與準備，尤其是潛水旅遊，除了最基本的交通食宿之外，還有潛水中心、參加人員以及裝備支援的安排問題，要如何規劃一趟潛水旅遊呢！',
          img: 'knowledge-1.jpeg'
        }
      ]
    }
  }
}
</script>
