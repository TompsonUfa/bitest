<template>
    <div class="access">
        <div class="col-12 mb-3">
            <label class="form-label">Для кого</label>
            <custom-select :item="accessFor" @select-item="selectedAccessFor"></custom-select>
        </div>
        <div class="col-12 mb-3">
            <label class="form-label">Пользователи/группы</label>
            <custom-select :item="selectedItems">
            </custom-select>
        </div>
        <div class="col-12">
            <ui-button  class="access__btn">Добавить</ui-button>
        </div>
    </div>
</template>

<script>
 import CustomSelect from "@/components/UI/CustomSelect.vue";
 import UiButton from "@/components/UI/UiButton.vue";
 import {ref} from "vue";

 export default {
     name: "AccordionAccess",
     components: {UiButton, CustomSelect},
     data(){
         return {
             accessFor:{
                 selected: ref(null),
                 options: [
                     {id: 1, name: 'Группы', value: 'groups'},
                     {id: 2, name: 'Пользователи', value: 'users'},
                 ],
             },
             selectedItems: [],
         }
     },
     methods: {
         selectedAccessFor(item){
             this.accessFor.selected = item;

         }
     }
 }
</script>

<style scoped lang="scss">

</style>
