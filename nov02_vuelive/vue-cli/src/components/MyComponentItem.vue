<template>
    <div>
        <h3>MyComponent의 하위 컴포넌트</h3>
        <p>{{ staticProps }}</p>
        <p>{{ dynamicProps }}</p>
    </div>
</template>

<script>
export default {
    name: 'MyComponentItem',
    props: {
        staticProps: String,
        dynamicProps: String,
    }
}
</script>

<style>

</style>