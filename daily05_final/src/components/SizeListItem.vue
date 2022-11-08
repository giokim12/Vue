<template>
  <div>
      <b-container>
      <b-button block variant="outline-success" class="m-1">
        <b-row
          class='one-size'
          :class="{ 'is-selected': size.selected }"
        >
          <b-col>{{ size.name }}</b-col>
          <b-col>{{ size.price }}원</b-col>
        </b-row>
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
}
</script>

<style>
</style>