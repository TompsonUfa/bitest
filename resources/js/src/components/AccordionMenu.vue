<template>
    <div class="accordion-menu">
        <div class="row">
            <div class="col-12">
                <div class="accordion-menu__header">
                    <ui-button :class="this.selectedFilter === filter ? 'accordion-menu__btn_active' : null"
                               class="accordion-menu__btn" v-for="filter in filters" :key="filter.id"
                               @click="this.selectedFilter = filter">{{ filter.name }}</ui-button>
                </div>
            </div>
        </div>
        <div class="accordion-menu__content" v-if="this.selectedFilter">
            <accordion-main-content v-if="this.selectedFilter.value === 'main'"></accordion-main-content>
            <accordion-questions v-if="this.selectedFilter.value === 'questions'"></accordion-questions>
            <accordion-access v-if="this.selectedFilter.value === 'access'"></accordion-access>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
import UiButton from "@/components/UI/UiButton.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import SelectImage from "@/components/UI/SelectImage.vue";
import AccordionMainContent from "@/components/AccordionMainContent.vue";
import AccordionQuestions from "@/components/AccordionQuestions.vue";
import AccordionAccess from "@/components/AccordionAccess.vue";

export default {
    name: "AccordionMenu",
    components: {
        AccordionAccess,
        AccordionQuestions, AccordionMainContent, SelectImage, CustomSelect, CustomInput, UiButton},
    data(){
        return {
            // filters
            selectedFilter: ref(null),
            filters: [
                {id: 1, name: 'Основное', value: 'main'},
                {id: 2, name: 'Вопросы', value: 'questions'},
                {id: 3, name: 'Доступ', value: 'access'},
            ],
        }
    },
    mounted() {
        this.selectedFilter = this.filters[0];
    },
}
</script>

<style scoped lang="scss">
    .accordion-menu {
        &__header {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        &__btn {
            background-color: inherit;
            border: 1px solid var(--border-color);
            color: var(--main-color);
            font-weight: 600;
            &:hover, &_active {
                background-color: var(--brand-color);
                color: #fff;
                border: 1px solid transparent;
            }
        }
    }
</style>
