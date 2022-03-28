<template>
  <Page>
    <ActionBar>
      <Label text="Home"/>
    </ActionBar>

    <GridLayout>
      <SearchBar 
        hint="종목명 또는 종목코드 검색" 
        v-model="searchQuery"
        :text="searchPhrase" 
        @onChange="onChange" 
        @submit="onSubmit" 
      />
      <Label :text="text" />
      <GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
        <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
        <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
        <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
        <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
        <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
        <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
        <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
    </GridLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import LandingtService from "~/services/LandingService";
import { NameCodeMappingModel } from '../models/content'

const landingService = new LandingtService()

export default Vue.extend({
  data () {
    return {
      text: '',
      searchPhrase: '',
      searchQuery: '',
    }
  },
  computed: {
    message() {
      return landingService.getLandingContents()
    },
    stock () {

    }
  },
  methods: {
    onTapStock(args: any) {
      const id = args.stock.code
    },
    onChange(arg: any) {
      
    },
    onSubmit() {
      this.text = landingService.getStockByCode(this.searchQuery) as string
    }
  },
  mounted() {
    // this.renderChart(chartData, options)
  },
  created() {
    landingService.createLandingContentsAsync()
  },
  updated () {

  }
  
});
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
