<script setup lang="ts">
// import ABaseBreadcrumb from '../../packages/components/src/BaseBreadcrumb'
// import ABaseSearchBar from '../../packages/components/src/BaseSearchBar'
import {ref} from "vue";
const config = ref([
  {
    "name": "deptName",
    "value": "",
    "type": "INPUT",
    "label": "处理单位",
    "attrs": {
      "placeholder": "请输入处理单位"
    }
  },
  {
    "name": "times",
    "value": [],
    "default": [],
    "type": "DATE_RANGE_PICKER",
    "label": "创建时间",
    "attrs": {
      "placeholder": "请输入",
      "clearable": true,
      "enableTimePicker": true,
      "pickMonth": 3
    }
  },
  {
    "name": "timeLimit",
    "value": "",
    "type": "SELECT",
    "label": "处理时限",
    "attrs": {
      "options": [
        {
          "key": -1,
          "label": "已逾期",
          "value": -1
        },
        {
          "key": 0,
          "label": "今天到期",
          "value": 0
        },
        {
          "key": 3,
          "label": "近3天到期",
          "value": 3
        },
        {
          "key": 7,
          "label": "近7天到期",
          "value": 7
        },
        {
          "key": 15,
          "label": "近15天到期",
          "value": 15
        }
      ],
      "clearable": true
    }
  }
])
</script>

<template>
  <div>
    1111
    <ABaseBreadcrumb :list="[{ title: 'a', path: '/a'}, { title: 'b', path: '/b'}]" isBack></ABaseBreadcrumb>
    <a-base-search-bar :config="config"></a-base-search-bar>
  </div>
</template>

<style scoped>
</style>
