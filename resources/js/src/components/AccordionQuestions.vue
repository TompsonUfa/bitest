<template>
    <div class="row mb-4">
        <div class="col-12">
            <QuestionSwitcher v-if="questions" :questions="questions"></QuestionSwitcher>
        </div>
        <div class="col-12">
            <QuestionCreationForm></QuestionCreationForm>
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
        }
    }
</script>

<style scoped lang="scss">

</style>
