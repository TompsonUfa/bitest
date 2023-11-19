<template>
    <div class="row mb-4">
        <div class="col-12">
            <QuestionSwitcher :questions="questions"></QuestionSwitcher>
        </div>
    </div>
    <div class="row">
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
                    {id: 1, name: 'as'},
                ],
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
