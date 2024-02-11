<template>
    <div class="col-5">
        <select-image @select-image="(image) => this.form.image = image"
                      class="accordion-menu__select-img"
                      :image="this.form.image">
        </select-image>
    </div>
    <div class="col-7">
        <div class="mb-2">
            <CustomInput v-model:modelValue="this.form.title" :label="'Название'" :type="'text'"
                         :id="'exampleInputName'"></CustomInput>
        </div>
        <div class="mb-2">
            <label class="form-label">{{ this.form.timeComplete?.label }}</label>
            <custom-select :item="this.form.timeComplete"
                           @select-item="(item) => this.form.timeComplete.selected = item"></custom-select>
        </div>
        <div class="mb-2">
            <label class="form-label">{{ this.form.attempts?.label }}</label>
            <custom-select :item="this.form.attempts"
                           @select-item="(item) => this.form.attempts.selected = item"></custom-select>
        </div>
        <div class="mb-4">
            <label class="form-label">{{ this.form.limitQuestions?.label }}</label>
            <custom-select :item="this.form.limitQuestions"
                           @select-item="(item) => this.form.limitQuestions.selected = item"></custom-select>
        </div>
        <div class="form-check d-flex gap-2 justify-content-end">
            <input v-model="this.form.published" class="form-check-input" type="checkbox" value="" id="checkPublish">
            <label class="form-check-label" for="checkPublish">
                Опубликовать
            </label>
        </div>
    </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput.vue";
import SelectImage from "@/components/UI/SelectImage.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";
import {ref} from "vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "AccordionMainContent",
    components: {CustomSelect, SelectImage, CustomInput},
    data() {
        return {
            dataLoaded: false,
            form: {
                title: '',
                image: '',
                published: false,
                timeComplete: {
                    label: "Время на выполнение",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Неограниченно', value: null},
                        {id: 2, name: '15 минут', value: 15},
                        {id: 3, name: '30 минут', value: 30},
                        {id: 4, name: '1 час', value: 60},
                        {id: 5, name: '2 час', value: 120},
                    ]
                },
                attempts: {
                    label: "Количество попыток",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Неограниченно', value: null},
                        {id: 2, name: '1 попытка', value: 1},
                        {id: 3, name: '2 попытки', value: 2},
                        {id: 4, name: '3 попытки', value: 3},
                    ]
                },
                limitQuestions: {
                    label: "Отображение вопросов",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Все', value: null},
                        {id: 2, name: '10 вопросов', value: 10},
                        {id: 3, name: '20 вопросов', value: 20},
                        {id: 4, name: '30 вопросов', value: 30},
                    ]
                },
            },
        }
    },
    mounted() {
        let foundItemInfo = this.cachedInfo.find(item => item[this.event]);
        if (foundItemInfo) {
            this.form.title = foundItemInfo[this.event].title;
            this.form.image = foundItemInfo[this.event].image;
            this.form.timeComplete.selected = foundItemInfo[this.event].timeComplete;
            this.form.attempts.selected = foundItemInfo[this.event].attempts;
            this.form.limitQuestions.selected = foundItemInfo[this.event].limitQuestions;
            this.form.published = foundItemInfo[this.event].published;
        } else {
            if (this.infoTest) {
                this.form.title = this.infoTest.title;
                this.form.image = this.infoTest.image;
                this.form.timeComplete.selected = this.form.timeComplete.options.find(item => item.value === this.infoTest.timeComplete);
                this.form.attempts.selected = this.form.attempts.options.find(item => item.value === this.infoTest.attempts);
                this.form.limitQuestions.selected = this.form.limitQuestions.options.find(item => item.value === this.infoTest.limitQuestions);
                this.form.published = this.infoTest.published;
            }
        }
        this.dataLoaded = true;
        // let foundItemQuestions = this.cachedQuestions.find(item => item[this.event])
        // this.testQuestions = foundItemQuestions ? foundItemQuestions[this.event] : [];
    },
    watch: {
        form: {
            deep: true,
            handler(newForm, oldForm) {
                if (this.dataLoaded) {
                    const info = {
                        title: newForm.title,
                        image: newForm.image,
                        timeComplete: newForm.timeComplete.selected,
                        attempts: newForm.attempts.selected,
                        limitQuestions: newForm.limitQuestions.selected,
                        published: newForm.published,
                    }

                    this.updateInfo([this.event, info]);
                }
            },
        },
    },
    computed: {
        ...mapGetters(['cachedAccesses', 'cachedQuestions', 'cachedInfo']),
    },
    methods: {
        ...mapActions(['updateInfo']),
    },
    props: {
        infoTest: {
            required: false,
        },
        event: {
            required: true,
            type: String,
        }
    }
}
</script>

<style lang="scss">
.accordion-menu__select-img {
    width: 100%;
    height: 350px;
}
</style>
