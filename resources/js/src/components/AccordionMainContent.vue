<template>
        <div class="col-5">
            <select-image class="accordion-menu__select-img"></select-image>
        </div>
        <div class="col-7">
            <div class="mb-2">
                <CustomInput v-model:modelValue="this.form.title" :label="'Название'" :type="'text'" :id="'exampleInputName'"></CustomInput>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.form.direction?.label}}</label>
                <custom-select :item="this.form.direction" @select-item="(item) => this.form.direction.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.form.discipline?.label}}</label>
                <custom-select :item="this.form.discipline" @select-item="(item) => this.form.discipline.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.form.time?.label}}</label>
                <custom-select :item="this.form.time" @select-item="(item) => this.form.time.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.form.attempts?.label}}</label>
                <custom-select :item="this.form.attempts" @select-item="(item) => this.form.attempts.selected = item"></custom-select>
            </div>
            <div class="mb-4">
                <label class="form-label">{{this.form.displayQuestions?.label}}</label>
                <custom-select :item="this.form.displayQuestions" @select-item="(item) => this.form.displayQuestions.selected = item"></custom-select>
            </div>
            <div class="form-check d-flex gap-2 justify-content-end">
                <input v-model="this.form.publication" class="form-check-input" type="checkbox" value="" id="checkPublish">
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
        data(){
            return {
                dataLoaded: false,
                form: {
                    img: ref(null),
                    title: '',
                    publication: false,
                    direction: {
                        label: "Направление",
                        selected: ref(null),
                        options: [
                            {id: 1, name: 'Значение с бд'},
                        ],
                    },
                    discipline: {
                        label: "Дисциплина",
                        selected: ref(null),
                        options: [
                            {id: 1, name: 'Значение с бд'},
                            {id: 2, name: 'Значение с бд'},
                        ]
                    },
                    time: {
                        label: "Время на выполнение",
                        selected: ref(null),
                        options: [
                            {id: 1, name: 'Неограниченно'},
                            {id: 2, name: '15 минут', value: "15"},
                            {id: 3, name: '30 минут', value: "30"},
                            {id: 4, name: '1 час', value: "60"},
                            {id: 5, name: '2 час', value: "120"},
                        ]
                    },
                    attempts: {
                        label: "Количество попыток",
                        selected: ref(null),
                        options: [
                            {id: 1, name: 'Неограниченно'},
                            {id: 2, name: '1 попытка', value: "1"},
                            {id: 3, name: '2 попытки', value: "2"},
                            {id: 4, name: '3 попытки', value: "3"},
                        ]
                    },
                    displayQuestions: {
                        label: "Отображение вопросов",
                        selected: ref(null),
                        options: [
                            {id: 1, name: 'Все'},
                            {id: 2, name: '10 вопросов', value: "10"},
                            {id: 3, name: '20 вопросов', value: "20"},
                            {id: 4, name: '30 вопросов', value: "30"},
                        ]
                    },
                },
            }
        },
        mounted() {
            if(this.cachedInfo) {
                this.form.title = this.cachedInfo.title;
                this.form.direction.selected = this.cachedInfo.direction;
                this.form.discipline.selected = this.cachedInfo.discipline;
                this.form.time.selected = this.cachedInfo.time;
                this.form.attempts.selected = this.cachedInfo.attempts;
                this.form.displayQuestions.selected = this.cachedInfo.displayQuestions;
                this.form.publication = this.cachedInfo.publication;
            };
            this.dataLoaded = true
        },
        watch: {
            form: {
                deep: true,
                handler(newForm, oldForm) {
                    if (this.dataLoaded){
                        const info = {
                            title: newForm.title,
                            direction: newForm.direction.selected,
                            discipline: newForm.discipline.selected,
                            time: newForm.time.selected,
                            attempts: newForm.attempts.selected,
                            displayQuestions: newForm.displayQuestions.selected,
                            publication: newForm.publication,
                        }
                        this.updateInfo(info);
                    }
                },
            },
        },
        methods: {
            ...mapActions(['updateInfo']),
        },
        computed: {
            ...mapGetters(['cachedInfo']),
        }
    }
</script>

<style lang="scss">
    .accordion-menu__select-img {
        width: 100%;
        height: 350px;
    }
</style>
