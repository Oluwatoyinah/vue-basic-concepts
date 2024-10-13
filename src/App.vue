<script setup>
// import { provide, ref } from 'vue'

// import Introduction from './components/Introduction/Introduction.vue'
// import EventBox from './components/Events/EventBox.vue'
// import ComputedProperties from './components/Computed/ComputedProperties.vue'
// import Conditionals from './components/Conditionals/Conditionals.vue'
// import Iterations from './components/Iterations/Iterations.vue'
// import ComponentEvent from './components/Component Events/ComponentEvent.vue'
// import FormComponent from './components/Forms/FormComponent.vue'
// import PropsComponent from './components/Props/PropsComponent.vue'
// import DefaultSlotComponent from './components/Slot/DefaultSlotComponent.vue'
// import NamedSlot from './components/Slot/NamedSlot.vue'
// import SlotComponent from './components/Slot/SlotComponent.vue'
// import FallBackSlotContent from './components/Slot/FallBackSlotContent.vue'
// import CompanyComponent from './components/provide-and-inject/CompanyComponent.vue'
// import MainComponent from './components/AsyncComponent/MainComponent.vue'
// import LifecycleComponent from './components/Lifecycle-hooks/LifecycleComponent.vue'
// import RefComponent from './components/TemplateRef/RefComponent.vue'
// import WatchersComponent from './components/Watchers/WatchersComponent.vue'

// import AgeComponent from './components/Composable/AgeComponent.vue'
// import StudentCount from './components/Composable/StudentCount.vue'
// import CustomDirectiveComponent from './components/Custom Directives/CustomDirectiveComponent.vue'
// import MainComponent from './components/Dynamic Components/MainComponent.vue'
// import DataRequestComponent from './components/Fetching Data/DataRequestComponent.vue'

// let companyname = ref('Ty SHop')
// const count = ref(0)
// const name = ref('Bola')

// provide('companyName', companyname)
// provide('companyType', 'AgroBusiness')

// function triggerSubmit(firstName, email, password) {
//   alert(`My name is ${firstName}. My email address is ${email} and ${password} is my password `)
// }
</script>

<template>
  <!-- INTRODUCTION  -->
  <!-- <Introduction /> -->

  <!-- EVENTS  -->
  <!-- <EventBox /> -->

  <!-- COMPUTED PROPERTIES  -->
  <!-- <ComputedProperties /> -->

  <!-- CONDITIONALS  -->
  <!-- <Conditionals /> -->

  <!-- ITERATIONS  -->
  <!-- <Iterations /> -->

  <!-- FORM  -->
  <!-- <FormComponent /> -->

  <!-- PROPS -->
  <!-- <PropsComponent name="Baddest" :age="2 + 18" userType="ADMIN" /> -->

  <!-- COMPONENT EVENTs  -->
  <!-- <p>Count is {{ count }}, i am in the parent component</p>
  <p>Your current name is {{ name }}, i am in the parent component</p>
  <ComponentEvent
    @InreaseCount="count++"
    @changeName="name = 'Toyin'"
    @submitForm="triggerSubmit"
  /> -->

  <!-- SLOT  -->
  <!-- <SlotComponent>
    <p>The space in the slot component</p>
  </SlotComponent> -->

  <!-- Uses the fallback content since there's no content in it -->
  <!-- <FallBackSlotContent></FallBackSlotContent> -->

  <!-- content in it replaces the fallback content  because there is a content in it -->
  <!-- <FallBackSlotContent>
    <p>Replaces the fallback content</p>
  </FallBackSlotContent> -->

  <!-- <NamedSlot>
     using v-slot: syntax  
    <template v-slot:page-title>
      <p>This is the page title that appears in slot "page-title"</p>
    </template>

    using the # syntax 
    <template #page-content>
      <p>Appears in slot "page-content"</p>
    </template>
  </NamedSlot> -->

  <!-- <DefaultSlotComponent>
    <template #default>
      <p>Default slot component</p>
    </template>
  </DefaultSlotComponent> -->

  <!-- PROVIDE AND INJECT  -->
  <!-- <CompanyComponent @changeNameFn="companyname = 'Ty luxHomes'" /> -->

  <!-- LIFECYCLCE HOOKS  -->
  <!-- <LifecycleComponent /> -->

  <!-- WATCHERS  -->
  <!-- <WatchersComponent /> -->

  <!-- TEMPLATE REF  -->
  <!-- <RefComponent /> -->

  <!-- ASYNC COMPONENT  -->
  <!-- <MainComponent /> -->

  <!-- COMPOSABLE  -->
  <!-- <AgeComponent />
  <StudentCount /> -->

  <!-- CUSTOM DIRECTIVE  -->
  <!-- <CustomDirectiveComponent /> -->

  <!-- DYNAMIC COMPONENTS  -->
  <!-- <MainComponent /> -->

  <!-- FETCHING DATA  -->
  <!-- <DataRequestComponent /> -->
</template>

<style scoped></style>
