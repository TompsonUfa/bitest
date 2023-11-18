<template>
    <div class="row test">
        <div class="col-5">
            <SelectImage @selectImage = 'selectImage' class="test__select-img"></SelectImage>
        </div>
        <div class="col-7">
            <AccordionMenu></AccordionMenu>
        </div>
    </div>
</template>

<script>
    import SelectImage from "@/components/UI/SelectImage.vue";
    import AccordionMenu from "@/components/AccordionMenu.vue";
    export default {
        name: "CreateTest",
        components: {AccordionMenu, SelectImage},
        data(){
            return {
                form: {
                    img : null,
                }
            }
        },
        methods: {
            selectImage(img) {
                this.form.img = img;
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        &__select-img {
            width: 100%;
            height: 300px;
        }
    }
</style>
