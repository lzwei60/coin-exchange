<template>
  <a-table v-bind="filteredAttrs">
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps" />
    </template>
  </a-table>
</template>

<script lang="ts">
export default { name: 'CptTable' };
</script>

<script setup lang="ts">
import { PAGINATION_CONFIG } from '@/utils';

const attrs = useAttrs();
const filteredAttrs = computed(() => {
  let paginationProp = attrs.pagination;
  if (
    paginationProp &&
    typeof paginationProp === 'object' &&
    Object.keys(paginationProp).length > 0
  ) {
    paginationProp = {
      ...PAGINATION_CONFIG,
      ...paginationProp,
    };
  }
  return {
    ...attrs,
    class: `cpt-table ${attrs.class ? attrs.class : ''}`,
    bordered: attrs.bordered || true,
    size: attrs.size || 'small',
    pagination: paginationProp,
  };
});
</script>

<style lang="less">
.cpt-table {
  .ant-table-small {
    font-size: 12px;
  }
  .ant-table-thead {
  }
}
</style>
