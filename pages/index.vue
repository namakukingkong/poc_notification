<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  async mounted() {
    const currentToken = await this.$fire.messaging.getToken()
    console.info('Init FCM id: ', currentToken)

  }
}
</script>

