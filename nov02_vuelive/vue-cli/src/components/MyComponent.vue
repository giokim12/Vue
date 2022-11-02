<template>
<!-- 최상위태그 필요:div, li, ul 다 상관 X -->
  <div class='border'>
    <h1>이거는 내가 만든 컴포넌트</h1>
    <MyComponentItem 
        static-props="MyComponent에서 보낸 데이터"
        :dynamic-props="dynamicProps"
    
    
    />
    
  </div>
</template>

<script>
import MyComponentItem from '@/components/MyComponentItem'
export default {
    name: 'MyComponent',
    components : {
        MyComponentItem,
    },
    data: function () {
        return {
            dynamicProps: '이건 동적인 데이터',
        }
    }

}
</script>

<style>
    .border {
        border: solid 1px black;
    }
</style>