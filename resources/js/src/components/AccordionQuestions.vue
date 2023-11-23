<template>
    <div class="row mb-4">
        <div class="col-12 mb-3">
            <QuestionSwitcher v-if="questions" :questions="questions"></QuestionSwitcher>
        </div>
        <div class="col-12">
            <QuestionCreationForm @add-question="addQuestion"></QuestionCreationForm>
        </div>
    </div>
</template>

<script>
    import CustomSelect from "@/components/UI/CustomSelect.vue";
    import QuestionSwitcher from "@/components/QuestionSwitcher.vue";
    import QuestionCreationForm from "@/components/QuestionCreationForm.vue";

    export default {
        name: "AccordionQuestions",
        components: {QuestionCreationForm, QuestionSwitcher, CustomSelect},
        data(){
            return {
                questions:[

                ],
            }
        },
        methods: {
            addQuestion(item){
                this.questions.push(item);
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
