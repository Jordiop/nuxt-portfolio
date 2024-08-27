<template>
  <div
    class="container flex flex-col-reverse py-5 mx-auto md:flex-row md:py-10 md:mt-10"
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
  import feather from "feather-icons";
  import ContactDetails from "@/components/contact/ContactDetails.vue";

  export default {
    components: {
      ContactDetails,
    },
    data() {
      return {
        contacts: [
          {
            id: 1,
            name: "jordiosarenkhoe@outlook.es",
            icon: "mail",
          },
        ],
      };
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
    methods: {},
  };
</script>

