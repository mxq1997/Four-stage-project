<template>
    <div id="main">
        <div class="mycenterlist">
            <mycenterlist /></div>
        <div>
            <router-view></router-view>
            <!-- <order class="order" /> -->
            <!-- <centermiddle class="centermiddle" /> -->
        </div>
    </div>
</template>
<script>
    import mycenterlist from './MyCenterList.vue'
    import order from './mycenlist/order.vue'
    // import centermiddle from './centermiddle.vue'
    export default {
        name: "display",
        methods: {

        },
        components: {
            mycenterlist,
            order,
            // centermiddle,
        }
    }

</script>
<style scoped>
    #main {
        display: flex;
    }

    .mycenterlist {
        margin-right: 50px;
    }

    /* .order {
        margin-bottom: 15px;
    } */
</style>