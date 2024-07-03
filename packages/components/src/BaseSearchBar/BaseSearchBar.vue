<template>
<t-form :label-width="80" colon @reset="emits('reset')" @submit="emits('submit')">
    <t-row :gutter="[24, 24]">
      <t-col :span="12 - (btnSpan || 2)">
        <t-row :gutter="[24, 24]">
          <t-col v-for="(item, index) in (config || [])" :key="index" :span="item.span || 4">
            <t-form-item
                v-if="item.type === 'SLOT'"
                :label="item?.label"
                :label-width="item?.labelWidth"
                :name="item?.name"
            >
              <slot :name="item.name" :data="item"></slot>
            </t-form-item>
            <base-form-item v-bind="item.attrs" v-model="item.value" v-model:typeValue="item.typeValue" :config="item" @change="(value) => onChangeValue(value, item)" />
          </t-col>
        </t-row>
      </t-col>
      <t-col :span="btnSpan || 2" class="text-right" :style="btnBoxStyle || null">
        <slot name="btnPre"></slot>
        <div v-if="!hiddenBtn" class="base-search-operator">
          <t-button type="submit" theme="primary">查询</t-button>
          <t-button class="ml-15" type="reset" variant="base" theme="default">重置</t-button>
        </div>
        <slot></slot>
      </t-col>
    </t-row>
  </t-form>
</template>
<script lang="ts" setup>
import { BaseFormItemType } from "../BaseTableHead";
import BaseFormItem from './BaseFormItem.vue';
import { TBaseSearchBarProps, TBaseSearchBarPropsEmits } from "./BaseSearchBar";

defineOptions({
  name: 'ABaseSearchBar'
})
defineProps(['hiddenBtn', 'btnSpan', 'btnBoxStyle', 'config'])
// ['reset', 'submit']
const emits = defineEmits<TBaseSearchBarPropsEmits>();

const onChangeValue = (value: any, item: BaseFormItemType) => {
  if (item.trigger === 'immediately') {
    emits('submit');
  }
};
</script>
