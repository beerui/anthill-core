<template>
    <t-row align="center" justify="space-between" :style="{marginBottom: `${props.mb}px`}">
      <t-breadcrumb :max-item-width="props.maxItemWidth">
        <t-breadcrumbItem v-for="(item, index) in props.list" :key="`breadcrumbItem-${index}`" :to="item.path">
          {{ item.title }}
        </t-breadcrumbItem>
      </t-breadcrumb>
      <slot name="right"></slot>
      <t-button v-if="props.isBack" theme="primary" shape="round" variant="base" @click="onBack" >
        <template #icon>
          <t-icon name="rollback"></t-icon>
        </template>
        返回
      </t-button>
    </t-row>
</template>
<script lang="ts" setup>
  import { BaseBreadcrumbProps } from "./BaseBreadcrumb";

  defineOptions({
    name: 'ABaseBreadcrumb'
  })
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const onBack = () => {
    router.back();
  };
  const props = withDefaults(
    defineProps(),
    {
      isBack: false,
      maxItemWidth: '150',
      mb: 20
    }
  ) as BaseBreadcrumbProps;
</script>
