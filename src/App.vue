<template lang="pug">
	#wrapper
		form
			h1 Registration

			#fields(v-for='field in fields')
				field(:ref='field.name'
				:type='field.type'
				:name='field.name'
				:placeholder='field.placeholder'
				:validations='field.validations'
				:required='field.required')

			input#submit-button(type='button' value='Next' @click='submit')
</template>

<script>
import fields from "@/fields";
import field from "@/components/Field.vue";

export default {
  name: "app",
  data() {
    return {
      fields
    };
  },
  components: { field },
  methods: {
    getData() {
      let data = {};
      for (const key in this.$refs) {
        data[key] = this.$refs[key][0].check();
      }
      return data;
    },
    checkPasswordMatch() {
      const data = this.getData();
      if (data["password"] !== data["password-confirmation"]) {
        this.$refs["password-confirmation"][0].error = true;
        this.$refs["password-confirmation"][0].errormsg =
          "Password does not match";
        data["password-confirmation"] = false;
      } else {
        data["password-confirmation"] = true;
      }
    },
    submit() {
      this.checkPasswordMatch();
      console.log(this.getData());
    }
  }
};
</script>

<style lang="stylus">
@import '~@/components/standard'

body
  font-family sans-serif

#wrapper
  height 100vh
  display flex
  justify-content center
  align-items center

form
  width 400px
  margin 20px
  padding 40px 30px
  box-sizing border-box
  border-radius 5px
  box-shadow 1px 2px 5px 2px rgba(0, 0, 0, 0.22)
  display flex
  flex-direction column

  h1
    margin-bottom 5px

  #submit-button
    nice-button(#08f, #eee, #023)
    margin-top 4px
    align-self flex-end

@media screen and (max-width 440px)
  #wrapper
    display block

  form
    margin 0
    width 100%
    padding 10px 15px
    box-shadow none

@media screen and (max-height 673px)
  #wrapper
    align-items flex-start
</style>
