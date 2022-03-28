<template>
  <Page>

  </Page>
</template>

<script>
import Vue from 'nativescript-vue'
import LandingService from '@/services/LandingService'

const landingService = new LandingService()

export default Vue.extend({
  props: ['code'],
  data() {
    return {
      stock: landingService.getStockByCode(this.code)
    }
  }
})
</script>