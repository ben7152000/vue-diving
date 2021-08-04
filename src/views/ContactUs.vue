<template>
  <section>

    <Breadcrumb name="聯絡我們"/>
    <Subtitle subtitle="聯絡我們"/>

    <ContactUsInfo />

    <ContactUsForm />

  </section>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Subtitle from '../components/Subtitle'
import ContactUsInfo from '../components/ContactUs/ContactUsInfo'
import ContactUsForm from '../components/ContactUs/ContactUsForm'

export default {
  name: 'ContactUs',
  components: {
    Breadcrumb,
    Subtitle,
    ContactUsInfo,
    ContactUsForm
  }
}
</script>
