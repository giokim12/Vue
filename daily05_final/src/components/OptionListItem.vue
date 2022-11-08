<template>
  <div>
    <b-container>
      <b-button block variant="outline-success" class="m-1">
        <b-row>
          <b-col>{{ option.type }}</b-col>
          <b-col>
            <b-button pill variant="outline-dark" @click="increase"> + </b-button>
            {{ option.count }}
            <b-button pill variant="outline-dark" @click="decrease"> - </b-button>
          </b-col>
        </b-row>
      </b-button>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
    },
    decrease() {
    },
  },
}
</script>

<style>
</style>