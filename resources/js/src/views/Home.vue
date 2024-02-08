<template>
    <div class="row my-3">
        <div class="col-12">
            <filter-nav></filter-nav>
        </div>
    </div>
    <div class="row">
        <div class="col-12 mb-3">
            <card-list :tests=this.tests></card-list>
        </div>
        <div class="col-12 text-center">
            <ui-button class="load-more">
                <i class="bi bi-arrow-clockwise"></i>
                Еще 10 тестов из 100
            </ui-button>
        </div>
    </div>
</template>

<script>
import UiButton from "@/components/UI/UiButton.vue";
import filterNav from "@/components/FilterNav.vue";
import CardList from "@/components/CardList.vue";
import axios from "axios";

export default {
    name: "Home",
    components: {
        CardList,
        filterNav,
        UiButton
    },
    data() {
        return {
            tests: [],
        }
    },
    mounted() {
        axios.get('/api/tests').then((res) => {
            this.tests = res.data.tests.data;
        })
    }
}
</script>

<style scoped lang="scss">
.load-more {
    color: var(--main-color);
    font-weight: 600;
    background-color: transparent;
    border: 1px solid var(--border-color);

    &:hover {
        color: #fff;
        background-color: var(--brand-color);
        border: 1px solid transparent;
    }
}
</style>
